import { getFileName, readDir, readFile } from '$lib/helpers/file';
import { metadata } from '$lib/helpers/markdown';
import type { ArticleMetadata } from '$lib/types';

export const get = async (): Promise<{
	body: ArticleMetadata[];
}> => {
	const dirPath = 'src/articles/';
	const files = await readDir(dirPath);

	const metadatas = await Promise.all(
		files.map((file) =>
			readFile(dirPath + file).then((content) =>
				metadata(content, `/articles/${getFileName(file)}`)
			)
		)
	);

	return {
		body: metadatas
	};
};
