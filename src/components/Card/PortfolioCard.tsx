import Image from 'next/image';
import Link from 'next/link';
import { CardContainer } from './CardContainer';
import { SubSectionTitle } from '#components/Heading';
import { ButtonLink } from '#components/Link';
import { MdOutlineCode, MdOutlinePublic } from 'react-icons/md';
import styles from '#styles/Link.module.css';

export interface PortfolioCardPropsType {
	id: string,
	title: string,
	type: 'web' | 'non-web',
	description: string,
	imageSource: string,
	demoUrl?: string,
	codeUrl?: string,
}

export function PortfolioCard({ id, title, type, description, imageSource, demoUrl, codeUrl }: PortfolioCardPropsType) {
	const projectPageUrl = `/projects/${type}/${id}`;

	return (
		<CardContainer>
			<section className='block relative overflow-hidden h-48'>
				<Image
					src={imageSource}
					alt=''
					fill={true}
					className='object-cover object-top'
					sizes='(min-width: 1536px) 15vw, (min-width: 1024px) 25vw, (min-width: 768px) 50vw, 75vw'
				/>
			</section>
			<section className='flex flex-col gap-4 p-4 border-t border-base-300 h-48'>
				<div className='flex-grow'>
					<Link
						href={projectPageUrl}
						className={styles.base}
					>
						<SubSectionTitle>{title}</SubSectionTitle>
					</Link>
					<p className='line-clamp-3'>{description}</p>
				</div>
				<div className='flex flex-row gap-2 justify-end'>
					{codeUrl && <ButtonLink
						value='Code'
						href={codeUrl}
						variant='empty'
						icon={<MdOutlineCode size={20} />}
						openInNewTab={false}
						className='justify-center'
					/>}
					{demoUrl && <ButtonLink
						value='Visit'
						href={demoUrl}
						variant='empty'
						icon={<MdOutlinePublic size={20} />}
						openInNewTab={false}
						className='justify-center'
					/>}
				</div>
			</section>
		</CardContainer>
	);
}