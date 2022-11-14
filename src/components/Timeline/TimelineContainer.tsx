import type { ReactNode } from "react";
import styles from '#styles/Timeline.module.css';

export interface TimelineContainerPropsType {
	children: ReactNode | ReactNode[],
}

export default function TimelineContainer({ children }: TimelineContainerPropsType) {
	return (
		<section
			className={styles.container}
		>
			<div className={styles.line}></div>
			<section className={styles.content}>
				{children}
			</section>
		</section>
	);
}