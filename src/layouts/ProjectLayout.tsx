import Image from 'next/image';
import type { ReactNode } from 'react';
import { MainLayout } from './MainLayout';
import { MainTitle, SectionTitle } from '#components/Heading';
import { ButtonLink } from '#components/Link';
import { Breadcrumb } from '#components/Navigation';
import { getTechIcon } from '#libs/icons';
import { useRouter } from 'next/router';
import { MdOutlineCode, MdOutlinePublic } from 'react-icons/md';

interface ProjectLayoutType {
	children: ReactNode | ReactNode[],
	metadata: {
		title: string,
		description: string,
		keywords: string[],
		image: string,
		techStack: string[],
		codeUrl?: string,
		demoUrl?: string,
	},
}

export function ProjectLayout({ children, metadata }: ProjectLayoutType) {
	const { pathname } = useRouter();

	const pathnameArray = pathname.split('/');
	const breadcrumbPaths = [{
		href: '/',
		text: 'Home',
	}, {
		href: `/${pathnameArray[1]}`,
		text: 'Projects',
	}];
	const techStacks = getTechIcon(metadata.techStack);

	return (
		<MainLayout
			display='grid'
			seo={{
				title: metadata.title,
				description: metadata.description,
				keywords: metadata.keywords,
				pathUrl: pathname,
				isArticle: true,
				thumbnail: metadata.image,
			}}
		>
			<section className='col-span-full'>
				<Breadcrumb
					paths={breadcrumbPaths}
					current={metadata.title}
				/>
			</section>

			<section className='col-span-full'>
				<div className='h-64 lg:h-96 relative'>
					<Image
						src={metadata.image}
						alt=''
						fill={true}
						className='object-cover object-top'
						sizes='(min-width: 1024px) 75vw, 100vw'
						priority
					/>
				</div>
			</section>

			<section className='col-span-full text-center py-4 px-0 lg:p-10'>
				<MainTitle>{metadata.title}</MainTitle>
				<div className='my-2 flex flex-row gap-4 items-center justify-center'>
					{metadata.demoUrl && <ButtonLink
						value='Demo'
						href={metadata.demoUrl}
						variant='fill'
						icon={<MdOutlinePublic size={20} />}
					/>}
					{metadata.codeUrl && <ButtonLink
						value='Code'
						href={metadata.codeUrl}
						variant='outline'
						icon={<MdOutlineCode size={20} />}
					/>}
				</div>
			</section>

			<article className='main-content col-span-full lg:col-span-9'>
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