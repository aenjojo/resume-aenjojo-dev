import { ReactNode } from "react";

interface TimelineSectionPropsType {
	children: ReactNode | ReactNode[],
}

export default function TimelineSection({ children }: TimelineSectionPropsType) {
	return (
		<section
			className='border-l-4 border-l-primary-500 before:w-2 before:h-2 before:rotate-45 before:absolute before:bg-primary-800 before:-translate-x-1.5 before:translate-y-4'
		>
			{children}
		</section>
	);
}