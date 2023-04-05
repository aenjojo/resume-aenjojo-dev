export function calculateReadTime(content: string) {
	if (!content) {
		return 0;
	}

	const wpm = 250;
	const words = content.trim().split(/\w+/g).length;
	const readTime = Math.ceil(words / wpm);

	return readTime;
}