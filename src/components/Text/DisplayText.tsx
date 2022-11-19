import clsx from 'clsx';

export interface DisplayTextPropsType {
	value: string,
	size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL',
	className?: string,
}

export function DisplayText({ value, size, className }: DisplayTextPropsType) {
	const DisplayTextStyle = clsx([
		'block text-base-900',
		size === 'XS' && 'text-xs',
		size === 'S' && 'text-sm',
		size === 'M' && 'text-base',
		size === 'L' && 'text-lg font-medium',
		size === 'XL' && 'text-xl font-semibold',
		size === 'XXL' && 'text-2xl font-bold',
		className,
	]);

	return (
		<div
			className={DisplayTextStyle}
		>
			{value}
		</div>
	);
}