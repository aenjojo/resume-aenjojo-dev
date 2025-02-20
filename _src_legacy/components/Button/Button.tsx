import type { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import styles from '#styles/Button.module.css';

export interface ButtonPropsType {
	value: string,
	icon?: ReactNode,
	variant: 'fill' | 'outline' | 'empty',
	reverse?: boolean,
	iconOnly?: boolean,
	className?: string,
};

export function Button({ value, icon, variant, reverse, iconOnly, className, ...props }: ButtonPropsType & ButtonHTMLAttributes<HTMLButtonElement>) {
	const LinkButtonStyle = clsx([
		styles.button,
		variant === 'fill' && styles.fill,
		variant === 'outline' && styles.outline,
		variant === 'empty' && styles.empty,
		iconOnly
			? 'px-2' : !icon
			? 'px-4' : reverse
			? 'pl-4 pr-3' : 'pl-3 pr-4',
		reverse ? 'flex-row-reverse' : 'flex-row',
		className,
	]);
	
	return (
		<button
			className={LinkButtonStyle}
			{...props}
		>
			{icon && <span>{icon}</span>}
			{value !== '' && (
				<span className={iconOnly ? 'sr-only' : ''}>
					{value}
				</span>
			)}
		</button>
	);
};