import { defineStore, acceptHMRUpdate } from 'pinia'

export const useSettingStore = defineStore('setting', () => {
  const count = ref(0)

  const setCount = (v: number) => (count.value = v)

  return { count, setCount }
})
