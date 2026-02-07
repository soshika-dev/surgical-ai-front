<template>
  <div class="glass-surface navbar px-4 md:px-5">
    <div class="flex-1">
      <div class="text-base md:text-lg font-semibold">مرکز کنترل رهگیری</div>
    </div>
    <div class="flex items-center gap-2 md:gap-3">
      <button class="btn btn-ghost btn-sm" @click="uiStore.toggleSidebarCollapsed()">
        {{ uiStore.sidebarCollapsed ? 'نمایش منو' : 'جمع‌کردن منو' }}
      </button>
      <div class="hidden md:flex items-center gap-2">
        <RouterLink to="/kiosk" class="btn btn-primary btn-sm">ثبت رویداد جدید</RouterLink>
        <RouterLink to="/kiosk" class="btn btn-ghost btn-sm">حالت کیوسک</RouterLink>
      </div>
      <button class="btn btn-ghost btn-sm" @click="uiStore.toggleTheme()">
        {{ uiStore.theme === 'light' ? 'حالت تیره' : 'حالت روشن' }}
      </button>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-sm md:btn-md">
          {{ authStore.currentUser?.name || 'کاربر' }}
        </div>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li class="text-sm px-2 py-1">نقش: {{ authStore.currentUser?.role === 'ADMIN' ? 'مدیر' : 'حامی' }}</li>
          <li><button @click="handleLogout">خروج</button></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth'
import { useUiStore } from '../stores/ui'
import { RouterLink, useRouter } from 'vue-router'

const authStore = useAuthStore()
const uiStore = useUiStore()
const router = useRouter()

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>
