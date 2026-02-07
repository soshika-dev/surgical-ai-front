<template>
  <aside
    class="glass-surface sidebar-shell min-h-full border-l border-white/25 p-3 md:p-4"
    :class="uiStore.sidebarCollapsed ? 'w-20' : 'w-[280px]'"
    :aria-label="title"
  >
    <div class="mb-5 flex items-center justify-between gap-2">
      <div class="sidebar-title" :class="uiStore.sidebarCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'">
        <div class="truncate text-base font-semibold">{{ title }}</div>
        <div class="truncate text-xs opacity-65">نسخه نمایشی</div>
      </div>
      <button class="btn btn-ghost btn-sm btn-square" @click="uiStore.toggleSidebarCollapsed()">
        <span class="text-lg leading-none">{{ uiStore.sidebarCollapsed ? '⟨' : '⟩' }}</span>
      </button>
    </div>

    <ul class="menu rounded-box gap-1 p-0">
      <li v-for="item in items" :key="item.to">
        <RouterLink :to="item.to" active-class="active" class="sidebar-link" :title="item.label">
          <span aria-hidden="true" class="sidebar-icon">{{ item.icon }}</span>
          <span class="sidebar-label" :class="uiStore.sidebarCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'">
            {{ item.label }}
          </span>
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useUiStore } from '../stores/ui'

export interface SidebarItem {
  label: string
  to: string
  icon: string
}

defineProps<{
  title: string
  items: SidebarItem[]
}>()

const uiStore = useUiStore()
</script>
