import { MainLayout } from '#layouts/MainLayout';

export default function AboutMePage() {
	return (
		<MainLayout
			seo={{
				title: 'About Me',
				description: 'My personal information',
				keywords: ['aenjojo', 'josua fernando', 'about me'],
				pathUrl: '/resume/about-me',
			}}
		>
			<>Long info about me, include my journey to be a software engineer</>
		</MainLayout>
	);
};