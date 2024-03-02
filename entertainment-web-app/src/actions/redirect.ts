'use server'

import { redirect } from 'next/navigation'

export async function redirectByPath(path: string) {
    redirect(path);
}
