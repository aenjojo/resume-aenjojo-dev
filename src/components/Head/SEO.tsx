import Head from 'next/head';
import { sites } from '#constants/sites';

export interface SEOPropsType {
	title: string,
	description: string,
	keywords: string[],
	pathUrl: string,
	thumbnail?: string,
	isArticle?: boolean,
}

export function SEO({ title, description, keywords, pathUrl, thumbnail, isArticle }: SEOPropsType) {
	const { siteName, siteUrl, siteThumbnail } = sites;

	const pageUrl = `${siteUrl}${pathUrl}`;
	const pageImage = thumbnail ? thumbnail : siteThumbnail;

	return (
		<Head>
			<title>{`${title} | ${siteName}`}</title>

			<meta charSet='UTF-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<meta name='theme-color' content='#0020FF' />
			
			<meta name='author' content='Josua Fernando' />
			<meta name='description' content={description} />
			<meta name='keywords' content={keywords.join(',').toLowerCase()} />

			<meta property='og:type' content={isArticle ? 'article' : 'website'} />
			<meta property='og:title' content={title} />
			<meta property='og:url' content={pageUrl} />
			<meta property='og:image' content={pageImage} />
			<meta property='og:description' content={description} />
			<meta property='og:site_name' content={'Aen Jojo\'s Personal Website'} />

			<meta property='twitter:card' content={thumbnail ? 'summary_large_image' : 'summary'} />
			<meta property='twitter:title' content={title} />
			<meta property='twitter:description' content={description} />
			<meta property='twitter:url' content={pageUrl} />
			<meta property='twitter:image' content={pageImage} />

			<link rel='icon' type='image/png' href='/favicon.png' />
			<link rel='canonical' href={pageUrl} />
			{/* not used because page below 500 pages and all pages are linked internally */}
			{/* <link rel='manifest' href='/manifest.json' crossOrigin='use-credentials' /> */}
		</Head>
	);
}