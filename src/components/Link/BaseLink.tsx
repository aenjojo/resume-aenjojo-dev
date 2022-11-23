import Link from 'next/link';
import type { ReactNode } from 'react';
import { MdOpenInNew } from 'react-icons/md';

export interface BaseLinkPropsType {
	href: string | URL,
	value: string,
	icon?: ReactNode,
	isNewTab?: boolean,
	className?: string,
	children?: ReactNode,
};

export function BaseLink({ href, value, icon, isNewTab, className, children }: BaseLinkPropsType) {
	const isOpenNewTab = isNewTab !== undefined ? isNewTab : false;
	const isExternalLink = href && !href.toString().startsWith('/') && !href.toString().startsWith('#');
	const isChildrenExist = Boolean(children);

	if (!isExternalLink) {
		return (
            <Link
				href={href}
				target={isOpenNewTab ? '_blank' : '_self'}
				className={className}
			>
				<>
					{icon && <span>{icon}</span>}
					{
						isChildrenExist
							? children
							: value !== '' && <span>{value}</span>
					}
					{isOpenNewTab && (
						<span>
							<MdOpenInNew size={20} />
						</span>
					)}
				</>
            </Link>
        );
	}

	return (
		<a
			target={isOpenNewTab ? '_blank' : '_self'}
			rel='noopener noreferrer'
			href={href.toString()}
			className={className}
		>
			{icon && <span>{icon}</span>}
			{
				isChildrenExist
					? children
					: value !== '' && <span>{value}</span>
			}
			{isOpenNewTab && (
				<span>
					<MdOpenInNew size={20} />
				</span>
			)}
		</a>
	);
}