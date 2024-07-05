<template>
  <div class="w-full flex flex-col gap-2 h-full">
    <div class="flex flex-wrap gap-2 w-full" v-auto-animate>
      <div class="cell" v-for="(v, i) of list" :key="v" @click="deleteByIndex(i)">
        {{ v }}
      </div>
    </div>
    <button class="cell !w-auto" @click="shuffle">打乱</button>
    <div class="rounded gap-20 mb-8 line load-hidden" v-for="_ of 40">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores dolor impedit. Molestiae aliquid nostrum
      eligendi quasi id officiis consectetur, incidunt illum asperiores soluta maiores facere aut adipisci nihil error.
    </div>
  </div>
</template>

<script setup lang="ts">
const list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

onBeforeMount(() => {
  if (typeof window !== 'undefined') {
    window.ScrollReveal().reveal('.line')
  }
})

const deleteByIndex = (i: number) => {
  list.value.splice(i, 1)
}

const shuffle = () => {
  list.value = list.value.sort(() => Math.random() - 0.5)
}
</script>

<style scoped>
.cell {
  --at-apply: w-30px h-30px bg-gray-400/20 border-1px border-solid border-gray-400/20 grid items-center justify-center
    cursor-pointer select-none;
}
</style>
