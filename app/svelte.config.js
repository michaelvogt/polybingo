import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ split: false }),

		vite: () => ({
			resolve: {
				alias: {
					'@components': '/src/components'
				}
			},
			server: {
				https: true
			},
			envPrefix: 'CLIENT'
		})
	}
};

export default config;
