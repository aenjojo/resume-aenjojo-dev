import clsx from 'clsx';
import BaseLink, { type BaseLinkPropsType } from './BaseLink';
import styles from '#styles/Button.module.css';

export interface ButtonLinkPropsType extends BaseLinkPropsType {
	type: 'fill' | 'outline' | 'empty',
	color: 'primary' | 'secondary',
};

export default function ButtonLink({ href, value, iconLeft, iconRight, isNewTab, className, type, color }: ButtonLinkPropsType) {
	const ButtonLinkStyle = clsx([
		styles.button,
		type === 'fill' && styles.fill,
		type === 'outline' && styles.outline,
		type === 'empty' && styles.empty,
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