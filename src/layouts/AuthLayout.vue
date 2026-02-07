<template>
  <div class="min-h-screen flex items-center justify-center app-shell p-6">
    <div class="w-full max-w-md glass-surface rounded-2xl p-1">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
