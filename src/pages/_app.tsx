import type { AppProps } from 'next/app';
import { Outfit } from '@next/font/google';
import '#styles/globals.css';

const outfit = Outfit({
	subsets: ['latin'],
	variable: '--font-outfit',
});

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={`${outfit.variable} font-sans`}>
			<Component {...pageProps} />
		</main>
	);
};