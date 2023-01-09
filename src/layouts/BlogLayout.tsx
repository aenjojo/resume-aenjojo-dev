import Image from 'next/image';
import type { ReactNode } from 'react';
import type { metaDataType } from '#libs/posts';
import { MainLayout } from './MainLayout';
import { MainTitle, SectionTitle } from '#components/Heading';
import { DisplayText } from '#components/Text';
import { ButtonLink } from '#components/Link';
import { PostCard } from '#components/Card';
import { MdChevronLeft } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaShare } from 'react-icons/fa';

interface BlogLayoutType {
	children: ReactNode | ReactNode[],
	metadata: {
		title: string,
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
			{metadata.image && (
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
				<div className='my-2 flex flex-row gap-4 items-center justify-center'>
					<DisplayText
						size='S'
						value={metadata.date}
					/>
					<DisplayText
						size='S'
						value='8 minutes reading'
					/>
				</div>
			</section>
			<article className='col-span-full lg:col-span-9'>
				{children}
			</article>
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