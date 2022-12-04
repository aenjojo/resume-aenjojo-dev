import { MDXComponents } from 'mdx/types';
import { MainTitle, SectionTitle, SubSectionTitle, GenericTitle, type GenericTitlePropsType } from '#components/Heading';

export const components = {
	h1: ({ children }: GenericTitlePropsType) => <MainTitle>{children}</MainTitle>,
	h2: ({ children }: GenericTitlePropsType) => <SectionTitle>{children}</SectionTitle>,
	h3: ({ children }: GenericTitlePropsType) => <SubSectionTitle>{children}</SubSectionTitle>,
	h4: ({ children }: GenericTitlePropsType) => <GenericTitle>{children}</GenericTitle>,
} as MDXComponents;