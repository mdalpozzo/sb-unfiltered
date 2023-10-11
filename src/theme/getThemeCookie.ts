import { cookies } from 'next/headers'

// https://github.com/pacocoursey/next-themes/issues/169#issuecomment-1733952011
export function getThemeCookie() {
  const cookieStore = cookies()
  const themeCookie = cookieStore.get('theme')
  return themeCookie?.value
}
