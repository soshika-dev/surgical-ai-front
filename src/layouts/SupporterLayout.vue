<template>
  <div class="min-h-screen w-full app-shell">
    <div class="flex min-h-screen w-full">
      <main class="content-area order-1">
        <AppNavbar class="shrink-0" />
        <section class="page-container">
          <RouterView />
        </section>
      </main>
      <AppSidebar class="order-2" title="پنل پشتیبان" :items="supporterItems" />
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

const supporterItems: SidebarItem[] = [
  { label: 'داشبورد', to: '/supporter/dashboard', icon: '◻' },
  { label: 'عملیات', to: '/supporter/operations', icon: '▦' },
  { label: 'رویدادها', to: '/supporter/events', icon: '◷' },
  { label: 'تطبیق کلین‌روم', to: '/supporter/reconciliation', icon: '◎' },
  { label: 'گیت‌ها', to: '/supporter/gates', icon: '▥' },
  { label: 'حالت کیوسک', to: '/kiosk', icon: '⌁' }
]

onMounted(() => {
  uiStore.syncSidebarForViewport()
})
</script>
