<template>
  <ClientOnly>
    <button v-if="isSupported" type="button" @click="toggle" class="icon-btn">
      <div class="tabler:arrows-maximize text-5 opacity-80" v-if="!isFullscreen" />
      <div class="tabler:arrows-minimize text-5 text-orange-400" v-else />
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
import type { MaybeElementRef } from '@vueuse/core'

const { target } = defineProps<{ target?: MaybeElementRef }>()
const { isSupported, isFullscreen, toggle } = useFullscreen(target)
</script>
