import Link from 'next/link';
import type { ReactNode } from 'react';
import { MdOpenInNew } from 'react-icons/md';

export interface BaseLinkPropsType {
	href: string | URL,
	value: string,
	iconLeft?: ReactNode,
	iconRight?: ReactNode,
	isNewTab?: boolean,
	className?: string,
};

export default function BaseLink({ href, value, iconLeft, iconRight, isNewTab, className }: BaseLinkPropsType) {
	const isOpenNewTab = isNewTab !== undefined
		? isNewTab
		: href && !href.toString().startsWith('/') && !href.toString().startsWith('#');

	if (!isOpenNewTab) {
		return (
			<Link href={href}>
				<a
					className={className}
				>
					{iconLeft && <span>{iconLeft}</span>}
                	<span>{value}</span>
					{iconRight && <span>{iconRight}</span>}
				</a>
			</Link>
		);
	}

	return (
		<a
			target='_blank'
			rel='noopener noreferrer'
			href={href.toString()}
			className={className}
		>
			{iconLeft && <span>{iconLeft}</span>}
			<span>{value}</span>
			<span>
				{<MdOpenInNew size={20} />}
			</span>
		</a>
	);
}