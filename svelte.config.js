import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		defaults: {
			style: 'postcss'
		},
		postcss: true
	}),
	kit: {
		adapter: adapter({ precompress: true }),
		target: '#svelte'
	}
};

export default config;
