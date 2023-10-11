export function setThemeCookie(theme: string) {
  document.cookie = `theme=${theme}; path=/`
}
