<template>
  <div class="space-y-3">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 class="text-2xl font-semibold">{{ title }}</h1>
        <p v-if="subtitle" class="text-sm opacity-70">{{ subtitle }}</p>
      </div>
      <div v-if="$slots.actions" class="flex flex-wrap items-center gap-2">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  title: string
  subtitle?: string
}>()
</script>
