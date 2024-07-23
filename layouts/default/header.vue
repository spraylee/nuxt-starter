<template>
  <header
    class="flex-none border-b-1px border-solid border-gray-400/20 sticky top-0 bg-light-400 dark:bg-dark-400 box-border z-10"
    :style="headerStyle"
  >
    <div class="h-full flex items-center gap-2 mx-auto" :style="headerInnerStyle">
      <img src="/favicon.ico" class="h-8 h-8" />
      <h1 class="text-xl font-bold">{{ title }}</h1>
      <div class="mr-auto" />
      <FullscreenToggle />
      <ThemeSwitch />
    </div>
  </header>
</template>

<script setup lang="ts">
const { contentMaxWidth, height, padding, title } = defineProps<{
  title: string
  contentMaxWidth?: string | null
  height: string
  padding?: string | null
}>()
const headerStyle = {
  height: height,
}
const headerInnerStyle = {
  maxWidth: contentMaxWidth || '100%',
  paddingLeft: padding || '1rem',
  paddingRight: padding || '1rem',
}
</script>
