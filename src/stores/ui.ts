import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface ToastMessage {
  id: string
  message: string
  type: 'success' | 'error' | 'info'
}

const THEME_STORAGE_KEY = 'surgical-ai-theme'
const SIDEBAR_STORAGE_KEY = 'sidebar:collapsed'

export const useUiStore = defineStore('ui', () => {
  const theme = ref<string>(localStorage.getItem(THEME_STORAGE_KEY) || 'pastel')
  const drawerOpen = ref(false)
  const sidebarCollapsed = ref(localStorage.getItem(SIDEBAR_STORAGE_KEY) === '1')
  const toasts = ref<ToastMessage[]>([])

  const setTheme = (value: string) => {
    theme.value = value
    document.documentElement.setAttribute('data-theme', value)
    localStorage.setItem(THEME_STORAGE_KEY, value)
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'pastel' ? 'night' : 'pastel')
  }

  const setSidebarCollapsed = (collapsed: boolean) => {
    sidebarCollapsed.value = collapsed
    localStorage.setItem(SIDEBAR_STORAGE_KEY, collapsed ? '1' : '0')
  }

  const toggleSidebarCollapsed = () => {
    setSidebarCollapsed(!sidebarCollapsed.value)
  }

  const syncSidebarForViewport = () => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(max-width: 1023px)').matches) {
      setSidebarCollapsed(true)
    }
  }

  const addToast = (message: string, type: ToastMessage['type'] = 'info') => {
    const id = Math.random().toString(36).slice(2)
    toasts.value = [...toasts.value, { id, message, type }]
    setTimeout(() => removeToast(id), 3500)
  }

  const removeToast = (id: string) => {
    toasts.value = toasts.value.filter((toast) => toast.id !== id)
  }

  const initTheme = () => {
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  return {
    theme,
    drawerOpen,
    sidebarCollapsed,
    toasts,
    setTheme,
    toggleTheme,
    setSidebarCollapsed,
    toggleSidebarCollapsed,
    syncSidebarForViewport,
    addToast,
    removeToast,
    initTheme
  }
})