import type { ReactNode } from 'react';
import { DisplayText } from '#components/Text';
import styles from '#styles/Timeline.module.css';

export interface TimelineItemPropsType {
	title: string,
	children: ReactNode | ReactNode[],
}

export default function TimelineItem({ title, children }: TimelineItemPropsType) {
	return (
		<section
			className='block'
		>
			<section>
				<div className={styles.marker}></div>
				<DisplayText value={title} size='XL' />
			</section>
			<section>
				{children}
			</section>
		</section>
	);
}