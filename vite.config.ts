import { sveltekit } from '@sveltejs/kit/vite';
import { loadEnv } from 'vite';
import type { UserConfig } from 'vite';

const env = loadEnv('', process.cwd(), '');

const config: UserConfig = {
	plugins: [sveltekit()],
	define: {
		__CIRCLE_CI_VERSION__: env.CIRCLE_WORKFLOW_ID
	}
};

export default config;
