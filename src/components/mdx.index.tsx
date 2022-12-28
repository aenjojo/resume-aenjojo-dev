import { MDXComponents } from 'mdx/types';
import { MainTitle, SectionTitle, SubSectionTitle, GenericTitle } from '#components/Heading';
import { TextLink } from '#components/Link';
import { Image } from '#components/Image';

export const components = {
	// heading
	h1: ({ children }) => (
		<MainTitle withId withMargin>
			{children as string}
		</MainTitle>
	),
	h2: ({ children }) => (
		<SectionTitle withId withMargin>
			{children as string}
		</SectionTitle>
	),
	h3: ({ children }) => (
		<SubSectionTitle withId withMargin>
			{children as string}
		</SubSectionTitle>
	),
	h4: ({ children }) => (
		<GenericTitle withId withMargin>
			{children as string}
		</GenericTitle>
	),
	
	// link
	a: ({ href, children }) => (
		<TextLink
			href={href as string}
			value={children as string}
		/>
	),

	img: ({ src, alt }) => (
		<Image
			src={src as string}
			alt={alt as string}
		/>
	),
} as MDXComponents;