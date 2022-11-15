import clsx from 'clsx';
import BaseLink, { type BaseLinkPropsType } from './BaseLink';
import styles from '#styles/Button.module.css';

export interface ButtonLinkPropsType extends BaseLinkPropsType {
	variant: 'fill' | 'outline' | 'empty',
	color: 'primary' | 'secondary',
	isReversed?: boolean,
};

export default function ButtonLink({ href, value, icon, isNewTab, className, variant, color, isReversed }: ButtonLinkPropsType) {
	const ButtonLinkStyle = clsx([
		styles.button,
		variant === 'fill' && styles.fill,
		variant === 'outline' && styles.outline,
		variant === 'empty' && styles.empty,
		color === 'primary' && styles.primary,
		color === 'secondary' && styles.secondary,
		isReversed ? 'flex-row-reverse' : 'flex-row',
		className,
	]);

	return (
		<BaseLink
			href={href}
			value={value}
			icon={icon}
			isNewTab={isNewTab}
			className={ButtonLinkStyle}
		/>
	);
}