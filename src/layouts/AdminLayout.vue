<template>
  <div class="min-h-screen w-full app-shell">
    <div class="flex min-h-screen w-full">
      <main class="content-area order-1">
        <AppNavbar :showCreateEvent="false" class="shrink-0" />
        <section class="page-container">
          <RouterView />
        </section>
      </main>
      <AppSidebar class="order-2" title="پنل مدیریت" :items="adminItems" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import AppNavbar from '../components/AppNavbar.vue'
import AppSidebar from '../components/AppSidebar.vue'
import { useUiStore } from '../stores/ui'
import type { SidebarItem } from '../components/AppSidebar.vue'

const uiStore = useUiStore()
uiStore.initTheme()

const adminItems: SidebarItem[] = [
  { label: 'نمای کلی', to: '/admin/overview', icon: '◻' },
  { label: 'کاربران', to: '/admin/users', icon: '◉' },
  { label: 'گیت‌ها', to: '/admin/gates', icon: '▥' },
  { label: 'انواع ابزار', to: '/admin/object-types', icon: '◌' },
  { label: 'گزارش‌ها', to: '/admin/reports', icon: '◫' },
  { label: 'لاگ ممیزی', to: '/admin/audit', icon: '◴' }
]

onMounted(() => {
  uiStore.syncSidebarForViewport()
})
</script>
