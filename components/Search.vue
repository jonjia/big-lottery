<script setup lang="ts">
import dayjs from 'dayjs'

const year = dayjs().year()
const { data: current } = await useFetch<Record<string, any>>(
  '/api/lottery/current',
)
const initialTerm = current.value?.value?.dlt?.lotteryDrawNum ?? `${year}001`
const startTerm = ref<string>(initialTerm)

const termAmount = ref(1)

const changeStartTerm = () => {}
const changeTermAmount = () => {}
</script>

<template>
  <div text="l gray4" flex p="x-22" justify-center>
    <div flex flex-col w="80px" justify-center m="r20">
      <span>
        开始期号
      </span>
      <input
        id="startTerm"
        v-model.lazy="startTerm"
        placeholder="请输入开始期号"
        type="text" autocomplete="off"
        p="x-4 y-2" h="30px"
        text="center" bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
        @keydown.enter="changeStartTerm"
      >
    </div>

    <div flex flex-col w="80px" justify-center>
      <span>
        期数
      </span>
      <input
        id="termAmount"
        v-model.lazy="termAmount"
        placeholder="请输入期数"
        type="text" autocomplete="off"
        p="x-4 y-2" h="30px"
        text="center" bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
        @keydown.enter="changeTermAmount"
      >
    </div>
  </div>
</template>
