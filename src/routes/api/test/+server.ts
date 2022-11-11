/** @type {import('./$types').RequestHandler} */
export function GET({ url }: { url: string }): Response {
    const tagVersion: string = __CIRCLE_CI_VERSION__;
    return new Response(`Application is on tag version: ${tagVersion}`);
}