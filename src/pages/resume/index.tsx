import { MainTitle, SectionTitle } from '#components/Heading';
import { TimelineContainer } from '#components/Timeline';
import { Breadcrumb } from '#components/Navigation';
import { MainLayout } from '#layouts/MainLayout';
import { EducationsList } from '#features/EducationsList';
import { SkillsList } from '#features/SkillsList';

export default function ResumePage() {
	const title = 'Resume';
	const breadcrumbPaths = [{
		href: '/',
		text: 'Home',
	}];

	return (
		<MainLayout
			seo={{
				title: title,
				description: 'Josua Fernando\'s resume page contains Josua Fernando\'s experiences, educations, and skills information',
				keywords: ['aenjojo', 'josua fernando', 'resume page', 'work experiences'],
				pathUrl: '/resume',
			}}
		>
			<section className='mb-4'>
				<Breadcrumb
					paths={breadcrumbPaths}
					current={title}
				/>
			</section>

			<MainTitle>My Resume</MainTitle>

			<section className='mt-4 py-2'>
				<SectionTitle>About Me</SectionTitle>
				<article className='main-content'>
					<p>
						I am Josua Fernando Simanjuntak, a fresh graduate from STIKOM Tunas Bangsa with bachelor&apos;s degree.
						Skilled in developing websites with a strong background in web design, user experience, and responsive web development.
						Passionate to create a high-quality website that focused on good accessibility and performance.
					</p>
				</article>
			</section>

			<section className='mt-4 py-2'>
				<SectionTitle>Educations</SectionTitle>
				<p>These are educations I ever take to learn programming, includes course and college, both formal and informal:</p>
				<TimelineContainer>
					<EducationsList />
				</TimelineContainer>
			</section>

			<section className='mt-4 py-2'>
				<SectionTitle>Skills</SectionTitle>
				<div className='grid grid-cols-4 md:grid-cols-8 gap-4'>
					<SkillsList />
				</div>
			</section>
		</MainLayout>
	);
}