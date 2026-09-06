import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: new URL(import.meta.env.BASE_URL, context.site).toString(),
		items: posts.map((post) => ({
			...post.data,
			link: new URL(import.meta.env.BASE_URL + post.id + '/', context.site).toString(),
		})),
	});
}
