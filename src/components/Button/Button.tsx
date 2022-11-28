import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from '#styles/Button.module.css';

export interface ButtonPropsType {
	value: string,
	icon?: ReactNode,
	variant: 'fill' | 'outline' | 'empty',
	color: 'primary' | 'secondary',
	iconOnly?: boolean,
	className?: string,
	onclick?(): void,
};

export function Button({ value, icon, variant, color, iconOnly, className, onclick }: ButtonPropsType) {
	const LinkButtonStyle = clsx([
		styles.button,
		variant === 'fill' && styles.fill,
		variant === 'outline' && styles.outline,
		variant === 'empty' && styles.empty,
		color === 'primary' && styles.primary,
		color === 'secondary' && styles.secondary,
		className,
	]);
	
	return (
		<button
			className={LinkButtonStyle}
			onClick={onclick}
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