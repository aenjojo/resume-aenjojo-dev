import { MDXComponents } from 'mdx/types';
import { MainTitle, SectionTitle, SubSectionTitle, GenericTitle } from '#components/Heading';
import { TextLink } from '#components/Link';

export const components = {
	// heading
	h1: ({ children }) => <MainTitle>{children as string}</MainTitle>,
	h2: ({ children }) => <SectionTitle>{children as string}</SectionTitle>,
	h3: ({ children }) => <SubSectionTitle>{children as string}</SubSectionTitle>,
	h4: ({ children }) => <GenericTitle>{children as string}</GenericTitle>,
	
	// text
	p: ({ children }) => <p className='mt-1 mb-2'>{children}</p>,
	a: ({ href, children }) => <TextLink href={href as string} value={children as string} />,

	// list
	ol: ({ children }) => <ol className='list-decimal list-outside py-2'>{children}</ol>,
	ul: ({ children }) => <ul className='list-disc list-outside py-2'>{children}</ul>,
	li: ({ children }) => <li className='ml-6 pl-4'>{children}</li>,

	// code
	code: ({ children, className }) => <code className={`p-1 font-mono rounded bg-base-300 bg-opacity-30 only:bg-transparent only:p-0 ${className}`}>{children}</code>,
	pre: ({ children }) => <pre className='my-2 py-2 pr-2 pl-4 bg-base-300 bg-opacity-30 border-l-8 border-l-primary-500 rounded-lg overflow-x-auto'>{children}</pre>,
} as MDXComponents;