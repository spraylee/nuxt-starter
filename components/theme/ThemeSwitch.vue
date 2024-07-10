<template>
  <div>
    <button
      type="button"
      @click="toggleTheme"
      role="theme-switch"
      class="w-30px h-30px rounded flex items-center justify-center hover:bg-gray-300/20 transition-colors bg-transparent border-1px border-solid border-gray-400/20"
    >
      <ClientOnly>
        <div class="tabler:moon text-20px text-gray-600" v-if="!isDark" />
        <div class="tabler:sun text-20px text-yellow-400" v-else />
      </ClientOnly>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark({ valueLight: 'light' })

const toggleTheme = (event: MouseEvent) => {
  if (!document.startViewTransition) return (isDark.value = !isDark.value)

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

  const transition = document.startViewTransition?.(() => {
    isDark.value = !isDark.value
  })

  transition?.ready.then(() => {
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
    document.documentElement.animate(
      { clipPath: !isDark.value ? [...clipPath].reverse() : clipPath },
      {
        duration: 500,
        easing: 'ease-in',
        pseudoElement: !isDark.value ? '::view-transition-old(root)' : '::view-transition-new(root)',
      }
    )
  })
}
</script>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

/* 进入dark模式时，黑色从点击位置展开。进入light模式时，原黑色背景从全屏向点击位置收缩。 */
.dark::view-transition-old(root) {
  z-index: 1;
}
.dark::view-transition-new(root) {
  z-index: 999;
}

::view-transition-old(root) {
  z-index: 999;
}
::view-transition-new(root) {
  z-index: 1;
}
</style>
