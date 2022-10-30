import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from '#styles/Button.module.css';

interface ButtonPropsType {
	value: string,
	iconLeft?: ReactNode,
	iconRight?: ReactNode,
	type: 'fill' | 'outline' | 'empty',
	color: 'primary' | 'secondary',
};

export default function Button({ value, iconLeft, iconRight, type, color }: ButtonPropsType) {
	const LinkButtonStyle = clsx([
		styles.button,
		type === 'fill' && styles.fill,
		type === 'outline' && styles.outline,
		type === 'empty' && styles.empty,
		color === 'primary' && styles.primary,
		color === 'secondary' && styles.secondary,
	]);
	
	return (
		<button
			className={LinkButtonStyle}
		>
			{iconLeft && <span>{iconLeft}</span>}
			<span>{value}</span>
			{iconRight && <span>{iconRight}</span>}
		</button>
	);
};