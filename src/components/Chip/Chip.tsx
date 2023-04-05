export interface ChipPropsType {
	value: string
}

export function Chip({ value }: ChipPropsType) {
	return (
		<div
			className='bg-primary-50 text-primary-500 rounded inline-block px-2 py-0.5 text-xs'
		>
			{value}
		</div>
	);
}