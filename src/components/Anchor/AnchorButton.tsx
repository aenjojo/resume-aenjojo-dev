import Link from 'next/link';
import type { ReactElement } from 'react';
import clsx from 'clsx';
import styles from '#styles/Button.module.css';

interface AnchorButtonType {
    href: string | URL,
    value: string,
    iconLeft?: ReactElement,
    iconRight?: ReactElement,
    type: 'fill' | 'outline' | 'empty',
    color: 'primary' | 'secondary',
};

export default function AnchorButton({ href, value, iconLeft, iconRight, type, color }: AnchorButtonType) {
    const AnchorButtonStyle = clsx([
        styles.button,
        type === 'fill' && styles.fill,
        type === 'outline' && styles.outline,
        type === 'empty' && styles.empty,
        color === 'primary' && styles.primary,
        color === 'secondary' && styles.secondary,
    ]);

    return (
        <Link href={href}>
            <a
                className={AnchorButtonStyle}
            >
                {iconLeft && <span>{iconLeft}</span>}
                <span>{value}</span>
                {iconRight && <span>{iconRight}</span>}
            </a>
        </Link>
    )
}