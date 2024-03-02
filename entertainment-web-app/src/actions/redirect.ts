'use server'

// Community
import { redirect } from 'next/navigation'

/**
 * @description Create server action for redirects by path
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 * @link https://nextjs.org/docs/app/api-reference/functions/redirect
 *
 * @param {string} path
 * @return {Promise<void>}
 */
export async function redirectByPath(path: string): Promise<void> {
    redirect(path);
}
