import { CIRCLE_WORKFLOW_ID } from '$env/static/private';

/** @type {import('./$types').RequestHandler} */
export function GET({ url }: { url: string }): Response {
	const tagVersion: string = CIRCLE_WORKFLOW_ID;
	if (false) {
		console.log('hello');
	}
	return new Response(`Application is on tag version: ${tagVersion}`);
}
