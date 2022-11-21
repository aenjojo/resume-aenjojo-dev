import Image from 'next/image';
import { CardContainer } from './CardContainer';
import { GenericTitle } from '#components/Heading';
import { ButtonLink } from '#components/Link';
import { Chip } from '#components/Chip';
import { MdOutlineCode, MdInfoOutline, MdOutlinePublic } from 'react-icons/md';

export interface PortfolioCardPropsType {
	imageSource: string,
	imageAlt: string,
	tags: string[],
	title: string,
	description: string,
	projectUrl: string,
	codeUrl?: string,
}

// make sure image has a same size and aspect-ratio

export function PortfolioCard({ imageSource, imageAlt, tags, title, description, projectUrl, codeUrl }: PortfolioCardPropsType) {
	return (
		<CardContainer>
			<Image src={imageSource} alt={imageAlt} width={1024} height={1024} />
			<section className='flex flex-col gap-4 p-4 border-t border-primary-200 h-full'>
				<div className='flex flex-row flex-wrap gap-2'>
					{tags.map(tag => (
						<Chip key={tag} value={tag} />
					))}
				</div>
				<div className='flex-grow'>
					<GenericTitle>{title}</GenericTitle>
					<p>{description}</p>
				</div>
				<div className='flex flex-row gap-2 justify-end'>
					<ButtonLink value='Info' href={projectUrl} variant='empty' color='primary' icon={<MdInfoOutline />} className='justify-center' />
					{codeUrl && <ButtonLink value='Code' href={codeUrl} variant='empty' color='primary' icon={<MdOutlineCode />} className='justify-center' />}
					<ButtonLink value='Demo' href={projectUrl} variant='empty' color='primary' icon={<MdOutlinePublic />} className='justify-center' />
				</div>
			</section>
		</CardContainer>
	);
}