import Image from 'next/image';
import { SectionTitle } from '#components/Heading';
import { PortfolioCard, PostCard } from '#components/Card';
import { ButtonLink } from '#components/Link';
import { DisplayText } from '#components/Text';
import { Footer, Header } from '#components/Navigation';
import { SEO } from '#components/Head';
import { getProjects, type metaDataType as projectMeta } from '#libs/projects';
import { getPosts, type metaDataType as postMeta } from '#libs/posts';
import { sortContent } from '#libs/sortContent';
import ShowcaseImage from '#public/images/showcase.png';
import { TopButton } from '#components/Button';

interface HomePropsType {
	latestProjects: {
		id: string,
		meta: projectMeta,
	}[],
	latestPosts: {
		id: string,
		meta: postMeta,
	}[],
}

export default function HomePage({ latestProjects, latestPosts }: HomePropsType) {
	return (
		<>
			<SEO
				title={'Home'}
				description={'Josua Fernando\'s personal website is a page that used to list all of his works and portfolios'}
				keywords={['aenjojo', 'personal website', 'portfolio page', 'josua fernando']}
				pathUrl='/'
			/>
			<Header />
			<main>
				<section className='py-10 bg-gradient-to-br from-primary-300 to-secondary-300 h-screen relative top-0'>
					<section className='container mx-auto px-4 lg:px-20 xl:px-40 lg:py-16 flex flex-col lg:flex-row gap-10 h-auto items-center'>
						<div className='w-full lg:w-1/2 p-10 bg-base-100 bg-opacity-60 backdrop-blur-lg rounded-lg'>
							<DisplayText
								value='Hi, there!'
								size='M'
								className='uppercase tracking-widest text-secondary-500 font-bold'
							/>
							<DisplayText
								value='I am Josua Fernando Simanjuntak'
								size='XXL'
								className='text-primary-500'
							/>
							<p className='lg:text-lg text-base-700'>
								I am a front-end software engineer.
								I mainly focused in web development with React JS, Next JS, and Tailwind CSS.
							</p>
							<div className='flex flex-row gap-4 mt-4'>
								<ButtonLink
									href='/resume'
									value='My resume'
									variant='fill'
								/>
							</div>
						</div>
						<div className='w-1/2 flex justify-center items-center'>
							<Image
								alt=''
								src={ShowcaseImage}
								className='w-full'
								sizes='(min-width: 1024px) 40vw, 50vw'
								priority
							/>
						</div>
					</section>
				</section>

				<section className='container mx-auto pt-4 pb-10 px-4 lg:px-20 xl:px-40'>
					<section className='mt-4 py-2'>
						<SectionTitle>Recent Projects</SectionTitle>
						<div className='grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 my-2'>
							{latestProjects.map(({ id, meta }) => (
								<PortfolioCard
									key={id}
									id={id}
									title={meta.title}
									description={meta.description}
									type='web'
									imageSource={meta.image}
									codeUrl={meta.codeUrl}
									demoUrl={meta.demoUrl}
								/>
							))}
						</div>
						<ButtonLink value='View All Projects' href='/projects' variant='outline' />
					</section>

					<section className='mt-4 py-2'>
						<SectionTitle>Recent Posts</SectionTitle>
						<div className='grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 my-2'>
							{latestPosts.map(({ id, meta }) => (
								<PostCard
									key={id}
									id={id}
									title={meta.title}
									description={meta.excerpt}
									date={meta.fullDate}
									tags={meta.tags}
								/>
							))}
						</div>
						<ButtonLink value='View All Posts' href='/blog' variant='outline' />
					</section>
				</section>
				<TopButton />
			</main>
			<Footer />
		</>
	);
}

export async function getStaticProps() {
	const projectsData = await getProjects('web');
	const postsData = await getPosts();

	const sortedProjects = sortContent(projectsData);
	const sortedPosts = sortContent(postsData);

	const latestProjects = sortedProjects.slice(0, 3);
	const latestPosts = sortedPosts.slice(0, 3);

	return {
		props: {
			latestProjects,
			latestPosts,
		},
	};
}