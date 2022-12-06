import Link from 'next/link';
import MainLayout from '#layouts/MainLayout';
import { MainTitle, SectionTitle } from '#components/Heading';
import { getPosts } from '#libs/posts';

export interface BlogPropsType {
	postsData: {
		id: string,
		meta: {
			author: string,
			title: string,
		},
	}[],
}

export default function Blog({ postsData }: BlogPropsType) {
	return (
		<MainLayout>
			<MainTitle>All Blog Posts</MainTitle>
			{postsData.map(({ id, meta }) => (
				<Link 
					key={id}
					href={`/blog/posts/${id}`}
					className='block mt-2 p-4 border rounded-lg border-primary-300 hover:bg-primary-100'
				>
					<>
						<SectionTitle>{meta.title}</SectionTitle>
						<p>{meta.author}</p>
					</>
				</Link>
			))}
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