import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Role, User } from '../types'
import { authLogin } from '../services/api'

const STORAGE_KEY = 'surgical-ai-auth'

const safeDecodeJwt = (token: string): Record<string, unknown> | null => {
  try {
    const [, payload] = token.split('.')
    if (!payload) return null
    return JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')))
  } catch {
    return null
  }
}

export const resolveUserRole = (user: Partial<User> | null): Role => {
  if (user?.role === 'ADMIN' || user?.role === 'SUPPORTER') {
    return user.role
  }
  // Assumption: if backend does not provide user.role, try JWT claim role/userRole; otherwise fallback to SUPPORTER.
  const token = localStorage.getItem('token') || localStorage.getItem('auth-token')
  const payload = token ? safeDecodeJwt(token) : null
  const roleFromToken = payload?.role || payload?.userRole
  return roleFromToken === 'ADMIN' ? 'ADMIN' : 'SUPPORTER'
}

export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref<User | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => Boolean(currentUser.value))
  const role = computed<Role>(() => resolveUserRole(currentUser.value))
  const isAdmin = computed(() => role.value === 'ADMIN')

  const loadFromStorage = () => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      currentUser.value = JSON.parse(raw) as User
    }
  }

  const login = async (username: string, password: string) => {
    loading.value = true
    error.value = null
    try {
      const user = await authLogin(username, password)
      currentUser.value = user
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
      return user
    } catch (err) {
      error.value = (err as Error).message
      throw err
    } finally {
      loading.value = false
    }
  }

  const logout = () => {
    currentUser.value = null
    localStorage.removeItem(STORAGE_KEY)
  }

  return { currentUser, loading, error, isAuthenticated, role, isAdmin, login, logout, loadFromStorage }
})
