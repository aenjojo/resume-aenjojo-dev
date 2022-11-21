export interface ChipPropsType {
	value: string
}

export function Chip({ value }: ChipPropsType) {
	return (
		<div
			className='bg-primary-500 text-primary-100 rounded-full inline-block border border-primary-300 px-3 text-xs'
		>
			{value}
		</div>
	);
}