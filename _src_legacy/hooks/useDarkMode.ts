import { useState, useEffect } from 'react';

const THEME_KEY = 'aenjojo-dev-theme';
const PREFERRED_SCHEME = '(prefers-color-scheme: dark)';

type UseDarkModeOutput = [boolean, () => void];

export function useDarkMode(): UseDarkModeOutput {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		if (window) {
			const isDarkPreferred = !(THEME_KEY in localStorage) && window.matchMedia(PREFERRED_SCHEME).matches;

			if (localStorage.getItem(THEME_KEY) === 'dark' || isDarkPreferred) {
				setIsDark(true);
			}
		}
	}, []);

	useEffect(() => {
		if (window) {
			localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');

			isDark
				? document.documentElement.classList.add('dark')
				: document.documentElement.classList.remove('dark');
		}
	}, [isDark]);

	const toggleDark = () => setIsDark(prev => !prev);

	return [isDark, toggleDark];
}