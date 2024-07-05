const storage = window.localStorage.getItem('vueuse-color-scheme')
const isDark =
  storage === 'dark' ? true : storage === 'light' ? false : window.matchMedia('(prefers-color-scheme: dark)').matches

if (isDark) {
  document.documentElement.classList.add('dark')
}
