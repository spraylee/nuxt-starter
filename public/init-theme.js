const storage = window.localStorage.getItem('vueuse-color-scheme')
const isDark =
  storage === 'dark' ? true : storage === 'light' ? false : window.matchMedia('(prefers-color-scheme: dark)').matches

if (isDark) {
  document.documentElement.classList.add('dark')
}

setFontSize()

window.addEventListener('resize', () => {
  setFontSize()
})

function setFontSize() {
  const clientWidth = document.documentElement.clientWidth
  if (clientWidth < 800) {
    document.documentElement.style.fontSize = (clientWidth / 800) * 16 + 'px'
  } else {
    document.documentElement.style.fontSize = '16px'
  }
}

function setZoom() {
  const clientWidth = document.documentElement.clientWidth
  if (clientWidth < 800) {
    document.documentElement.style.zoom = (clientWidth / 800) * 100 + '%'
  } else {
    document.documentElement.style.zoom = '100%'
  }
}
