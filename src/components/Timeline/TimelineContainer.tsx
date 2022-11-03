import { ReactNode } from "react";

interface TimelineContainerPropsType {
	children: ReactNode | ReactNode[],
}

export default function TimelineContainer({ children }: TimelineContainerPropsType) {
	return (
		<div
			className='flex flex-col gap-0 mx-4 py-2'
		>
			{children}
		</div>
	);
}