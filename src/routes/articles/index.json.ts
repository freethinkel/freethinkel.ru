import { readDir, readFile } from '$lib/helpers/file';
import { process } from '$lib/helpers/markdown';
import type { Article } from '$lib/types';

export const get = async (): Promise<{
	body: Article[];
}> => {
	const dirPath = 'src/articles/';
	const files = await readDir(dirPath).catch(() => [] as string[]);
	const articles = await Promise.all(
		files.map((file) => readFile(dirPath + file).then((content) => process(content, file)))
	);

	return {
		body: articles
	};
};
