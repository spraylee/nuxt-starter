<template>
  <header
    class="flex-none border-b-1px border-solid border-gray-400/20 sticky top-0 bg-light-400 dark:bg-dark-400 box-border z-10"
    :style="headerStyle"
  >
    <div class="h-full flex items-center gap-2 mx-auto" :style="headerInnerStyle">
      <img src="/favicon.ico" class="h-30px h-30px" />
      <h1 class="text-xl font-bold">{{ title }}</h1>
      <div class="mr-auto" />
      <ThemeSwitch />
    </div>
  </header>
</template>

<script setup lang="ts">
const { contentMaxWidth, height, padding, title } = defineProps<{
  title: string
  contentMaxWidth?: number | string
  height?: number | string
  padding?: number | string
}>()
const headerStyle = {
  height: height + 'px',
}
const headerInnerStyle = {
  maxWidth: typeof contentMaxWidth === 'number' ? contentMaxWidth + 'px' : contentMaxWidth || '100%',
  paddingLeft: typeof padding === 'number' ? padding + 'px' : padding || '0px',
  paddingRight: typeof padding === 'number' ? padding + 'px' : padding || '0px',
}
</script>
