'use server'

import { redirect } from 'next/navigation'
import { RedirectType } from 'next/dist/client/components/redirect'

export async function navigate(data: FormData) {
  redirect('/', RedirectType.replace)
}