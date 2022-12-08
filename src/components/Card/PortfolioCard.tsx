import Image from 'next/image';
import Link from 'next/link';
import { CardContainer } from './CardContainer';
import { GenericTitle } from '#components/Heading';
import { ButtonLink } from '#components/Link';
import { MdOutlineCode, MdOutlinePublic } from 'react-icons/md';
import styles from '#styles/Link.module.css';

export interface PortfolioCardPropsType {
	title: string,
	description: string,
	imageSource: string,
	demoUrl?: string,
	codeUrl?: string,
}

export function PortfolioCard({ title, description, imageSource, demoUrl, codeUrl }: PortfolioCardPropsType) {
	const projectPageUrl = `/projects/${title.toLowerCase().replaceAll(' ', '-')}`;

	return (
		<CardContainer>
			<section className='block relative overflow-hidden h-48'>
				<Image
					src={imageSource}
					alt=''
					fill={true}
					className='object-cover'
					priority={false}
					sizes='(min-width: 1536px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
				/>
			</section>
			<section className='flex flex-col gap-4 p-4 border-t border-primary-200 h-48'>
				<div className='flex-grow'>
					<Link
						href={projectPageUrl}
						className={styles.base}
					>
						<GenericTitle>{title}</GenericTitle>
					</Link>
					<p>{description}</p>
				</div>
				<div className='flex flex-row gap-2 justify-end'>
					{codeUrl && <ButtonLink
						value='Code'
						href={codeUrl}
						variant='empty'
						color='primary'
						icon={<MdOutlineCode size={20} />}
						className='justify-center'
					/>}
					{demoUrl && <ButtonLink
						value='Demo'
						href={demoUrl}
						variant='empty'
						color='primary'
						icon={<MdOutlinePublic size={20} />}
						className='justify-center'
					/>}
				</div>
			</section>
		</CardContainer>
	);
}