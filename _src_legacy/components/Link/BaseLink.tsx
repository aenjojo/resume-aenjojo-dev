import Link from 'next/link';
import type { ReactNode } from 'react';
import { MdOpenInNew } from 'react-icons/md';

export interface BaseLinkPropsType {
	href: string | URL,
	value: string,
	icon?: ReactNode,
	iconOnly?: boolean,
	openInNewTab?: boolean,
	isExternalLink?: boolean,
	className?: string,
};

export function BaseLink({ href, value, icon, iconOnly, openInNewTab, isExternalLink, className }: BaseLinkPropsType) {
	if (!isExternalLink) {
		return (
            <Link
				href={href}
				target={openInNewTab ? '_blank' : '_self'}
				className={className}
			>
				{icon && <span>{icon}</span>}
				{value !== '' && (
					<span className={iconOnly ? 'sr-only' : ''}>
						{value}
					</span>
				)}
				{openInNewTab && !iconOnly && (
					<span>
						<MdOpenInNew size={20} />
					</span>
				)}
            </Link>
        );
	}

	return (
		<a
			target={openInNewTab ? '_blank' : '_self'}
			rel='noopener noreferrer'
			href={href.toString()}
			className={className}
		>
			{icon && <span>{icon}</span>}
			{value !== '' && (
				<span className={iconOnly ? 'sr-only' : ''}>
					{value}
				</span>
			)}
			{openInNewTab && !iconOnly && (
				<span>
					<MdOpenInNew size={20} />
				</span>
			)}
		</a>
	);
}