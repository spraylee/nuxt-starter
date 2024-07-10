<template>
  <section :class="[id, 'sr-initial-hidden']">
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import type { ScrollRevealObjectOptions } from './types'

const id = useId()
const props = defineProps<{
  options: ScrollRevealObjectOptions
}>()

onMounted(() => window.ScrollReveal().reveal(`.${id}`, props.options))
</script>

<style scoped lang="scss">
html.sr .sr-initial-hidden {
  visibility: hidden;
}
</style>
