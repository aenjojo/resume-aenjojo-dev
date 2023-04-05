import { MainLayout } from '#layouts/MainLayout';
import { MainTitle, SectionTitle } from '#components/Heading';
import { PortfolioCard } from '#components/Card';
import { Breadcrumb } from '#components/Navigation';
import { getProjects, type metaDataType } from '#libs/projects';
import { sortContent } from '#libs/sortContent';

type ProjectData = {
	id: string,
	meta: metaDataType,
};

export interface ProjectPropsType {
	webProjectsData: ProjectData[],
	nonWebProjectsData: ProjectData[],
}

const createProjectsList = (data: ProjectData[], type: 'web' | 'non-web') => (
	data.map(({ id, meta }) => (
		<PortfolioCard
			key={id}
			id={id}
			title={meta.title}
			type={type}
			description={meta.description}
			imageSource={meta.image}
			codeUrl={meta.codeUrl}
			demoUrl={meta.demoUrl}
		/>
	))
);

export default function ProjectsPage({ webProjectsData, nonWebProjectsData }: ProjectPropsType) {
	const title = 'Projects';
	const breadcrumbPaths = [{
		href: '/',
		text: 'Home',
	}];

	const webProjects = createProjectsList(webProjectsData, 'web');
	const nonWebProjects = createProjectsList(nonWebProjectsData, 'non-web');

	return (
		<MainLayout
			seo={{
				title: title,
				description: 'List of projects AenJojo ever worked in, includes personal projects',
				keywords: ['projects list', 'aenjojo', 'portfolio', 'next.js'],
				pathUrl: '/projects',
			}}
		>
			<section className='mb-4'>
				<Breadcrumb
					paths={breadcrumbPaths}
					current={title}
				/>
			</section>

			<MainTitle>My Projects</MainTitle>

			<section className='mt-4 py-2'>
				<SectionTitle>Web Development Projects</SectionTitle>
				<div className='grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 mt-4 justify-center'>
					{webProjects}
				</div>
			</section>

			<section className='mt-4 py-2'>
				<SectionTitle>Non Web Projects</SectionTitle>
				<div className='grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 mt-4 justify-center'>
					{nonWebProjects}
				</div>
			</section>
		</MainLayout>
	);
}

export async function getStaticProps() {
	const webProjectsData = await getProjects('web');
	const nonWebProjectsData = await getProjects('non-web');

	const sortedWebProjects = sortContent(webProjectsData);
	const sortedNonWebProjects = sortContent(nonWebProjectsData);

	return {
		props: {
			webProjectsData: sortedWebProjects,
			nonWebProjectsData: sortedNonWebProjects,
		},
	};
}