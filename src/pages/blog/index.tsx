import MainLayout from '#layouts/MainLayout';
import { MainTitle } from '#components/Heading';
import { getPosts, type metaDataType } from '#libs/posts';
import { PostCard } from '#components/Card';

export interface BlogPropsType {
	postsData: {
		id: string,
		meta: metaDataType,
	}[],
}

export default function Blog({ postsData }: BlogPropsType) {
	return (
		<MainLayout>
			<section className='w-full lg:w-10/12 mx-auto'>
				<MainTitle>All Blog Posts</MainTitle>
				<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4 justify-center'>
					{postsData.map(({ id, meta }) => (
						<PostCard
							key={id}
							id={id}
							title={meta.title}
							description={meta.excerpt}
							tags={meta.tags}
							date={meta.date}
						/>
					))}
				</section>
			</section>
		</MainLayout>
	)
}

export async function getStaticProps() {
	const postsData = await getPosts();

	return {
		props: {
			postsData,
		},
	};
}