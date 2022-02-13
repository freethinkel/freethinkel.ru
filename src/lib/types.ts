export type ArticleMetadata = {
	title: string;
	date: Date;
	tags: string[];
	preview: string;
	url: string;
};

export type Article = {
	metadata: ArticleMetadata;
	content: string;
};
