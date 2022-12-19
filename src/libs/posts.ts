import { readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

export interface metaDataType {
	title: string,
	excerpt: string,
	date: string,
	tags: string[],
}

export interface importType {
	default: any,
	meta: metaDataType,
}

export async function getPosts() {
	const postsDirectory = resolve(process.cwd(), 'src/pages/blog/posts');
	const filenames = await readdir(postsDirectory);

	const postsDataPromises = filenames.map(async filename => {
		return getSinglePost(filename);
	});

	const postsData = await Promise.all(postsDataPromises);

	return postsData;
}

export async function getSinglePost(filename: string) {
	const mdxFile: importType = await import(`./../pages/blog/posts/${filename}`);

	const postId = filename.replace(/.mdx$/, '');
	const postMeta = mdxFile.meta;

	return {
		id: postId,
		meta: postMeta,
	};
}