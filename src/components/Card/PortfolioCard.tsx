import Image from 'next/image';
import { CardContainer } from './CardContainer';
import { GenericTitle } from '#components/Heading';
import { ButtonLink } from '#components/Link';
import { MdOutlineCode, MdOutlineArticle, MdOutlinePublic } from 'react-icons/md';

export interface PortfolioCardPropsType {
	imageSource: string,
	tags: string[],
	title: string,
	description: string,
	projectUrl: string,
	codeUrl?: string,
}

export function PortfolioCard({ imageSource, title, description, projectUrl, codeUrl }: PortfolioCardPropsType) {
	return (
		<CardContainer>
			<section className='block relative overflow-hidden h-48'>
				<Image
					src={imageSource}
					alt=''
					fill={true}
					className='object-cover'
					priority={false}
					sizes='(min-width: 1536) 25vw, (min-width: 1024) 33vw, (min-width: 768px) 50vw, 100vw'
				/>
			</section>
			<section className='flex flex-col gap-4 p-4 border-t border-primary-200 h-48'>
				<div className='flex-grow'>
					<GenericTitle>{title}</GenericTitle>
					<p>{description}</p>
				</div>
				<div className='flex flex-row gap-2 justify-end'>
					<ButtonLink
						value='Detail'
						href={projectUrl}
						variant='empty'
						color='primary'
						icon={<MdOutlineArticle size={20} />}
						className='justify-center'
					/>
					{codeUrl && <ButtonLink
						value='Code'
						href={codeUrl}
						variant='empty'
						color='primary'
						icon={<MdOutlineCode size={20} />}
						className='justify-center'
					/>}
					<ButtonLink
						value='Demo'
						href={projectUrl}
						variant='empty'
						color='primary'
						icon={<MdOutlinePublic size={20} />}
						className='justify-center'
					/>
				</div>
			</section>
		</CardContainer>
	);
}