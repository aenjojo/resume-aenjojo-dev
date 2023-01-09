import { GenericTitle } from '..';
import { CardContainer } from './CardContainer';

export interface GenericCardPropsType {
	title: string,
	description: string,
}

export function GenericCard({ title, description }: GenericCardPropsType) {
	return (
		<CardContainer>
			<section className='h-auto p-4'>
				<GenericTitle>{title}</GenericTitle>
				<p>{description}</p>
			</section>
		</CardContainer>
	);
}