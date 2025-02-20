import type { ReactNode } from 'react';
import { DisplayText } from '#components/Text';

export interface TimelineItemPropsType {
	title: string,
	subtitle: string,
	date: string,
	children: ReactNode | ReactNode[],
}

export function TimelineItem({ title, subtitle, date, children }: TimelineItemPropsType) {
	return (
		<section
			className='flex py-2 flex-col lg:flex-row gap-2 border-b border-b-base-300 dark:border-b-base-700 last:border-b-0'
		>
			<section className='lg:w-4/12 block'>
				<div className='w-5 h-5 bg-base-100 dark:bg-base-900 absolute border-4 border-primary-500 dark:border-primary-400 rounded-full rotate-45 -translate-x-12 translate-y-1.5'></div>
				<div>
					<DisplayText value={title} size='XL' className='text-primary-500 dark:text-primary-300' />
					<DisplayText value={subtitle} size='M' />
					<DisplayText value={date} size='S' className='text-base-600 dark:text-base-400' />
				</div>
			</section>
			<section className='lg:w-8/12 block'>
				{children}
			</section>
		</section>
	);
}