import { MDXComponents } from 'mdx/types';
import { MainTitle, SectionTitle, SubSectionTitle, GenericTitle } from '#components/Heading';
import { TextLink } from '#components/Link';

export const components = {
	// heading
	h1: ({ children }) => <MainTitle withMargin>{children as string}</MainTitle>,
	h2: ({ children }) => <SectionTitle withMargin>{children as string}</SectionTitle>,
	h3: ({ children }) => <SubSectionTitle withMargin>{children as string}</SubSectionTitle>,
	h4: ({ children }) => <GenericTitle withMargin>{children as string}</GenericTitle>,
	
	// link
	a: ({ href, children }) => <TextLink href={href as string} value={children as string} />,
} as MDXComponents;