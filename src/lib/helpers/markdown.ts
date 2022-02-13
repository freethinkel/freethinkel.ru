import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import yaml from 'yaml';
import type { Article, ArticleMetadata } from '$lib/types';

const parser = unified().use(remarkParse).use(remarkGfm).use(remarkFrontmatter, ['yaml']);

const runner = unified()
	.use(remarkRehype)
	.use(rehypeHighlight, {
		ignoreMissing: true
	})
	.use(rehypeStringify);

export const process = async (markdown: string, url: string): Promise<Article> => {
	const tree = parser.parse(markdown);
	let metadata: ArticleMetadata = null;

	if (tree.children.length > 0 && tree.children[0].type == 'yaml') {
		metadata = yaml.parse(tree.children[0].value);
		tree.children = tree.children.slice(1, tree.children.length);
		metadata.date = new Date(metadata.date);
		metadata.url = url;
	}

	const content = runner.stringify(await runner.run(tree));

	return {
		metadata,
		content
	};
};

export const metadata = async (markdown: string, url: string): Promise<ArticleMetadata> => {
	const tree = parser.parse(markdown);
	let metadata: ArticleMetadata = null;

	if (tree.children.length > 0 && tree.children[0].type == 'yaml') {
		metadata = yaml.parse(tree.children[0].value);
		tree.children = tree.children.slice(1, tree.children.length);
		metadata.date = new Date(metadata.date);
		metadata.url = url;
	}

	return metadata;
};
