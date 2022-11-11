import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from '#styles/Button.module.css';

export interface ButtonPropsType {
	value: string | ReactNode,
	iconLeft?: ReactNode,
	iconRight?: ReactNode,
	variant: 'fill' | 'outline' | 'empty',
	color: 'primary' | 'secondary',
	onclick?: () => void,
};

export default function Button({ value, iconLeft, iconRight, variant, color, onclick }: ButtonPropsType) {
	const LinkButtonStyle = clsx([
		styles.button,
		variant === 'fill' && styles.fill,
		variant === 'outline' && styles.outline,
		variant === 'empty' && styles.empty,
		color === 'primary' && styles.primary,
		color === 'secondary' && styles.secondary,
	]);
	
	return (
		<button
			className={LinkButtonStyle}
			onClick={onclick}
		>
			{iconLeft && <span>{iconLeft}</span>}
			<span>{value}</span>
			{iconRight && <span>{iconRight}</span>}
		</button>
	);
};