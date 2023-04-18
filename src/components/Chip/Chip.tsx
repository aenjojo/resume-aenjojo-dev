export interface ChipPropsType {
	value: string
}

export function Chip({ value }: ChipPropsType) {
	return (
		<div
			className='bg-primary-50 dark:bg-primary-900 text-primary-500 dark:text-primary-200 rounded inline-block px-2 py-0.5 text-xs'
		>
			{value}
		</div>
	);
}