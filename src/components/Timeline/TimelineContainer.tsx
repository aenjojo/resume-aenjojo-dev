import type { ReactNode } from "react";

export interface TimelineContainerPropsType {
	children: ReactNode | ReactNode[],
}

export function TimelineContainer({ children }: TimelineContainerPropsType) {
	return (
		<section
			className='flex flex-row gap-5 my-4 ml-6 mr-4 py-2'
		>
			<div className='h-auto w-2 mr-3.5 bg-primary-100 border-x-2 border-x-primary-300 flex-shrink'></div>
			<section className='flex flex-col flex-grow'>
				{children}
			</section>
		</section>
	);
}