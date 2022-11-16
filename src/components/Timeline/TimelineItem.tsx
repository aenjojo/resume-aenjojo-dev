import type { ReactNode } from 'react';
import { DisplayText } from '#components/Text';
import styles from '#styles/Timeline.module.css';

export interface TimelineItemPropsType {
	title: string,
	subtitle: string,
	date: string,
	children: ReactNode | ReactNode[],
}

export default function TimelineItem({ title, subtitle, date, children }: TimelineItemPropsType) {
	return (
		<section
			className={styles.item}
		>
			<section className={styles.header}>
				<div className={styles.marker}></div>
				<div>
					<DisplayText value={title} size='XL' className='text-primary-500' />
					<DisplayText value={subtitle} size='M' />
					<DisplayText value={date} size='S' className='text-base-600' />
				</div>
			</section>
			<section className={styles.description}>
				{children}
			</section>
		</section>
	);
}