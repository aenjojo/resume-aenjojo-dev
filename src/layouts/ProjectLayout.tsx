import Image from 'next/image';
import type { ReactNode } from 'react';
import { MainLayout } from './MainLayout';
import { MainTitle, SectionTitle } from '#components/Heading';
import { ButtonLink } from '#components/Link';
import { getTechIcon } from '#libs/icons';
import { MdChevronLeft } from 'react-icons/md';

interface ProjectLayoutType {
	children: ReactNode | ReactNode[],
	metadata: {
		title: string,
		image: string,
		techStack: string[],
		codeUrl?: string,
		demoUrl?: string,
	},
}

export function ProjectLayout({ children, metadata }: ProjectLayoutType) {
	const techStacks = getTechIcon(metadata.techStack);

	return (
		<MainLayout display='grid'>
			<section className='col-span-full'>
				<ButtonLink
					href='/blog'
					value='Back to blog'
					variant='empty'
					icon={<MdChevronLeft size='20' />}
				/>
			</section>
			<section className='col-span-full'>
				<div className='h-64 lg:h-96 relative'>
					<Image
						src={metadata.image}
						alt=''
						fill={true}
						className='object-cover'
						priority={false}
						sizes='100vw'
					/>
				</div>
			</section>
			<section className='col-span-full text-center py-4 px-0 lg:p-10'>
				<MainTitle>{metadata.title}</MainTitle>
				<div className='my-2 flex flex-row gap-4 items-center justify-center'>
					{metadata.demoUrl && <ButtonLink href={metadata.demoUrl} value='Demo' variant='fill' />}
					{metadata.codeUrl && <ButtonLink href={metadata.codeUrl} value='Code' variant='outline' />}
				</div>
			</section>
			<article className='col-span-full lg:col-span-9'>
				{children}
			</article>
			<aside className='col-span-full lg:col-span-3'>
				<SectionTitle>Tech Stack</SectionTitle>
				<div className='flex flex-col flex-nowrap lg:items-center gap-2 mt-4'>
					{techStacks.map(techStack => (
						<div
							key={techStack.name}
							className='py-2 px-4 w-full rounded-lg flex flex-row gap-4 items-center'
						>
							<span>{techStack.icon}</span>
							<span>{techStack.name}</span>
						</div>
					))}
				</div>
			</aside>
		</MainLayout>
	);
}