<template>
  <div class="min-h-screen bg-slate-100/80">
    <RouterView />
    <Toasts />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Toasts from './components/Toasts.vue'
</script>

