import Image from 'next/image';
import { ReactNode, useEffect, useRef, useState } from 'react';
import type { metaDataType } from '#libs/posts';
import { MainLayout } from './MainLayout';
import { MainTitle, SectionTitle } from '#components/Heading';
import { DisplayText } from '#components/Text';
import { PostCard } from '#components/Card';
import { Breadcrumb } from '#components/Navigation';
import { MdShare } from 'react-icons/md';
import { useRouter } from 'next/router'
import { calculateReadTime } from '#libs/calculateReadTime';
import { RWebShare } from 'react-web-share';
import { Button } from '#components/Button';
import { sites } from '#constants/sites';

interface BlogLayoutType {
	children: ReactNode | ReactNode[],
	metadata: {
		title: string,
		description: string,
		keywords: string[],
		date: string,
		image?: string,
		tags?: string[],
	},
	articles?: {
		id: string,
		meta: metaDataType,
	}[],
}

export function BlogLayout({ children, metadata, articles }: BlogLayoutType) {
	const { pathname } = useRouter();
	const contentRef = useRef<any>();
	const [readTime, setReadTime] = useState(0);

	const pathnameArray = pathname.split('/');
	const breadcrumbPaths = [{
		href: '/',
		text: 'Home',
	}, {
		href: `/${pathnameArray[1]}`,
		text: 'Blog',
	}];

	useEffect(() => {
		const content = contentRef.current.innerText;
		const contentReadTime = calculateReadTime(content);

		setReadTime(contentReadTime);
	}, []);

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

			{metadata.image && (
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
			)}

			<section className='col-span-full text-center py-4 px-0 lg:p-10'>
				<MainTitle>
					{metadata.title}
				</MainTitle>
				<DisplayText
					size='XL'
					value='Josua Fernando Simanjuntak'
					className='mt-4'
				/>
				<div className='my-2 flex flex-row gap-2 items-center justify-center'>
					<DisplayText
						size='S'
						value={metadata.date}
					/>
					{'·'}
					<DisplayText
						size='S'
						value={`${readTime} minutes reading`}
					/>
				</div>
			</section>

			<article ref={contentRef} className='main-content col-span-full lg:col-span-9'>
				{children}
			</article>

			<aside className='col-span-full lg:col-span-3'>
				<div className='flex flex-row lg:flex-col flex-wrap lg:flex-nowrap lg:items-center gap-4 lg:sticky lg:top-16'>
					<RWebShare
						data={{
							title: metadata.title,
							text: metadata.description,
							url: `${sites.siteUrl}${pathname}`,
						}}
					>
						<Button value='' variant='empty' icon={<MdShare size='24' />} iconOnly />
					</RWebShare>
				</div>
			</aside>
			
			{articles && (
				<section className='col-span-full'>
					<SectionTitle>More Article</SectionTitle>
					<div className='grid grid-cols-4 lg:grid-cols-12 gap-4'>
						{articles.map(({ id, meta }) => (
							<PostCard
								key={id}
								id={id}
								title={meta.title}
								description={meta.excerpt}
								date={meta.date}
							/>
						))}
					</div>
				</section>
			)}
		</MainLayout>
	);
}