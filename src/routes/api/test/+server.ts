/** @type {import('./$types').RequestHandler} */
export function GET({ url }: { url: string }): Response {
    const tagVersion: string = process.env['CIRCLE_WORKFLOW_ID'];
    return new Response(`Application is on tag version: ${tagVersion}`);
}