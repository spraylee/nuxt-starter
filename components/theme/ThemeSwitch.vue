<template>
  <div>
    <button
      type="button"
      @click="isDark = !isDark"
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

const isDark = useDark()
</script>
