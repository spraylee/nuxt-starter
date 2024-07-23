<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-wrap gap-2 w-full" v-auto-animate>
      <div class="cell" v-for="(v, i) of list" :key="v" @click="deleteByIndex(i)">
        {{ v }}
      </div>
    </div>
    <button class="cell !w-auto" @click="shuffle">打乱</button>
    <button class="cell !w-auto" @click="setting.setCount(setting.count + 10)">count: {{ setting.count }}</button>
    <div class="rounded gap-20 mb-8" v-for="_ of 3">
      <ScrollRevealSection
        :options="{
          reset: true,
          delay: 100,
          duration: 800,
          distance: '2rem',
          origin: 'bottom',
        }"
        >标题</ScrollRevealSection
      >
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores dolor impedit. Molestiae aliquid
        nostrum eligendi quasi id officiis consectetur, incidunt illum asperiores soluta maiores facere aut adipisci
        nihil error.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])

const deleteByIndex = (i: number) => {
  list.value.splice(i, 1)
}

const shuffle = () => {
  list.value = list.value.sort(() => Math.random() - 0.5)
}

const setting = useSettingStore()
</script>

<style scoped>
.cell {
  --at-apply: w-8 h-8 bg-gray-400/20 border-1px border-solid border-gray-400/20 flex items-center justify-center
    cursor-pointer select-none;
}
</style>
