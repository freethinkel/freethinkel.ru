import { readFile } from '$lib/helpers/file';
import { process } from '$lib/helpers/markdown';
import type { Article } from '$lib/types';

type GetProps = {
	params: Record<string, string>;
};

export const get = async ({
	params
}: GetProps): Promise<{
	body?: Article;
	status?: number;
}> => {
	try {
		const filePath = `src/articles/${params.slug}.md`;
		const article = await readFile(filePath).then((content) =>
			process(content, `/articles/${params.slug}`)
		);

		return {
			body: article
		};
	} catch (err) {
		return {
			status: 404
		};
	}
};
