import type { ReactNode } from 'react';
import { CardContainer } from './CardContainer';
import { SubSectionTitle } from '#components/Heading';

export interface GenericCardPropsType {
	title: string,
	description: string,
	icon?: ReactNode,
}

export function GenericCard({ title, description, icon }: GenericCardPropsType) {
	return (
		<CardContainer>
			<section className='h-auto p-4 flex flex-row lg:flex-col gap-4 items-start'>
				{icon && (
					<div className='rounded-full border border-primary-300 p-2'>
						{icon}
					</div>
				)}
				<div>
					<SubSectionTitle>{title}</SubSectionTitle>
					<p>{description}</p>
				</div>
			</section>
		</CardContainer>
	);
}