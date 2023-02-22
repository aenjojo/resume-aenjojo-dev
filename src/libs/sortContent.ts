import type { metaDataType as postsMeta } from './posts';
import type { metaDataType as projectsMeta } from './projects';

type ContentType = {
	id: string,
	meta: postsMeta | projectsMeta,
};

export function sortContent(contents: ContentType[]) {
	const sortedContents = contents.sort((a, b) => {
		if (a.meta.date < b.meta.date) {
			return 1;
		}
		if (a.meta.date > b.meta.date) {
			return -1;
		}
		return 0;
	});

	return sortedContents;
}