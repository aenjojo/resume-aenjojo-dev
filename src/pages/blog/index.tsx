import { MainLayout } from '#layouts/MainLayout';
import { MainTitle } from '#components/Heading';
import { PostCard } from '#components/Card';
import { Breadcrumb } from '#components/Navigation';
import { getPosts, type metaDataType } from '#libs/posts';
import { sortContent } from '#libs/sortContent';

export interface BlogPropsType {
	postsData: {
		id: string,
		meta: metaDataType,
	}[],
}

export default function Blog({ postsData }: BlogPropsType) {
	const title = 'Blog';
	const breadcrumbPaths = [{
		href: '/',
		text: 'Home',
	}];

	return (
		<MainLayout
			seo={{
				title: title,
				description: 'List of all blog post written by AenJojo',
				keywords: ['blog', 'next.js', 'aenjojo', 'posts list',],
				pathUrl: '/blog',
			}}
		>
			<section className='mb-4'>
				<Breadcrumb
					paths={breadcrumbPaths}
					current={title}
				/>
			</section>
			
			<MainTitle>My Blog Posts</MainTitle>

			<section className='grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 mt-4'>
				{postsData.map(({ id, meta }) => (
					<PostCard
						key={id}
						id={id}
						title={meta.title}
						description={meta.excerpt}
						tags={meta.tags}
						date={meta.fullDate}
					/>
				))}
			</section>
		</MainLayout>
	);
}

export async function getStaticProps() {
	const postsData = await getPosts();

	const sortedPosts = sortContent(postsData);

	return {
		props: {
			postsData: sortedPosts,
		},
	};
}