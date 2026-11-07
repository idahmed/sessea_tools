const THEME_KEY = 'sessea-tools-theme'

export function loadTheme() {
  try {
    const raw = localStorage.getItem(THEME_KEY)
    if (raw === 'dark' || raw === 'light') return raw
  } catch {
    /* ignore */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function saveTheme(value) {
  try {
    localStorage.setItem(THEME_KEY, value)
  } catch {
    /* private mode or blocked storage */
  }
}
