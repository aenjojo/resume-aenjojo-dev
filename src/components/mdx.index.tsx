import { MDXComponents } from 'mdx/types';
import { MainTitle, SectionTitle, SubSectionTitle, GenericTitle } from '#components/Heading';
import { TextLink } from '#components/Link';

export const components = {
	// heading
	h1: ({ children }) => <MainTitle>{children as string}</MainTitle>,
	h2: ({ children }) => <SectionTitle>{children as string}</SectionTitle>,
	h3: ({ children }) => <SubSectionTitle>{children as string}</SubSectionTitle>,
	h4: ({ children }) => <GenericTitle>{children as string}</GenericTitle>,
	
	// link
	a: ({ href, children }) => <TextLink href={href as string} value={children as string} />,
} as MDXComponents;