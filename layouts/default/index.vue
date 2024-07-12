<template>
  <div class="default-layout">
    <Header
      v-if="headerHeight"
      :contentMaxWidth="contentMaxWidth"
      :title="title"
      :height="headerHeight"
      :padding="padding"
      class="default-layout-header"
    ></Header>
    <div
      class="default-layout-content"
      :class="{
        'default-layout-content--fullscreen': contentMode === 'fullscreen',
        'default-layout-content--flow': contentMode === 'flow',
      }"
      :style="{
        maxWidth: contentMaxWidth || undefined,
        padding: padding || undefined,
        paddingTop: `calc(${padding || '0px'} + ${headerHeight || '0px'})`,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './header.vue'

interface LayoutConfig {
  contentMode: 'fullscreen' | 'flow'
  headerHeight: `${number}rem` | null
  contentMaxWidth: `${number}rem` | null
  padding: `${number}rem` | null
  title: string
}
const { contentMaxWidth, contentMode, padding, title, headerHeight }: LayoutConfig = {
  contentMode: 'fullscreen',
  headerHeight: '3.75rem',
  contentMaxWidth: '62.5rem',
  padding: '1rem',
  title: 'Starter',
}
</script>

<style scoped lang="scss">
.default-layout-header {
  --at-apply: fixed top-0 left-0 z-10 w-full;
}

.default-layout-content {
  --at-apply: mx-auto w-full;
}

.default-layout-content--fullscreen {
  --at-apply: flex flex-col items-center justify-center overflow-hidden;
  height: 100vh;
  height: 100svh;
  height: 100dvh;
}
.default-layout-content--flow {
  min-height: 100vh;
  min-height: 100svh;
  min-height: 100dvh;
}
</style>
