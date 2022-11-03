import clsx from 'clsx';
import BaseLink, { type BaseLinkPropsType } from './BaseLink';
import styles from '#styles/Button.module.css';

export interface ButtonLinkPropsType extends BaseLinkPropsType {
	variant: 'fill' | 'outline' | 'empty',
	color: 'primary' | 'secondary',
};

export default function ButtonLink({ href, value, iconLeft, iconRight, isNewTab, className, variant, color }: ButtonLinkPropsType) {
	const ButtonLinkStyle = clsx([
		styles.button,
		variant === 'fill' && styles.fill,
		variant === 'outline' && styles.outline,
		variant === 'empty' && styles.empty,
		color === 'primary' && styles.primary,
		color === 'secondary' && styles.secondary,
		className,
	]);

	return (
		<BaseLink
			href={href}
			value={value}
			iconLeft={iconLeft}
			iconRight={iconRight}
			isNewTab={isNewTab}
			className={ButtonLinkStyle}
		/>
	);
}