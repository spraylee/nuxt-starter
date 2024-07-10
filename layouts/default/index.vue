<template>
  <div class="default-layout">
    <Header :contentMaxWidth="contentMaxWidth" :title="title" :height="headerHeight" :padding="padding"></Header>
    <div
      class="flex items-center justify-center mx-auto flex-col w-full flex-shrink-none"
      :style="{ maxWidth: contentMaxWidth + 'px', padding: padding + 'px' }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './header.vue'

const headerHeight = ref(60)
const padding = ref(16)
const contentMaxWidth = ref(1000)
const title = 'Starter'
</script>

<style scoped lang="scss">
.default-layout {
  --at-apply: grid grid-rows-[auto_1fr];
  min-height: 100vh;
  min-height: 100svh;
  min-height: 100dvh;
}
</style>
