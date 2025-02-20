import type { AppProps } from 'next/app';
import { Spline_Sans, Spline_Sans_Mono } from 'next/font/google';
import { MDXProvider } from '@mdx-js/react';
import { components } from '#components/mdx.index';
import '#styles/globals.css';

const splineSans = Spline_Sans({
	subsets: ['latin', 'latin-ext'],
	variable: '--font-spl-sans',
	display: 'swap',
});

const splineMono = Spline_Sans_Mono({
	subsets: ['latin', 'latin-ext'],
	variable: '--font-spl-mono',
	display: 'swap',
});

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={`${splineSans.variable} ${splineMono.variable} font-sans`}>
			<MDXProvider components={components}>
				<Component {...pageProps} />
			</MDXProvider>
		</main>
	);
};