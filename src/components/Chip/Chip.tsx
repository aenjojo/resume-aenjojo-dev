export interface ChipPropsType {
	value: string
}

export function Chip({ value }: ChipPropsType) {
	return (
		<div
			className='bg-primary-500 text-primary-50 rounded inline-block border border-primary-300 px-2 text-xs'
		>
			{value}
		</div>
	);
}