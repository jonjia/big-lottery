<script setup lang="ts">
const startTerm = ref<string>('22115')

const history: Record<string, any> = reactive({
  list: [],
})

watchEffect(async () => {
  const res = await $fetch<Record<string, any>>('/api/lottery/history', {
    query: {
      startTerm: startTerm.value,
      endTerm: '22115',
    },
  })
  history.list = res.value?.list ?? []
})
</script>

<template>
  <div>
    <div class="search">
      <label for="startTerm">期号:</label>
      <input id="startTerm" v-model.lazy="startTerm" type="number">
      <label for="startTerm">号码:</label>
      <input id="startTerm" v-model="startTerm" type="number">
    </div>

    <table v-if="history.list.length">
      <thead>
        <tr>
          <th>期号</th>
          <th>开奖日期</th>
          <th>前区</th>
          <th>后区</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in history.list" :key="row.lotteryDrawNum">
          <td>{{ row.lotteryDrawNum }}</td>
          <td>
            {{ row.lotteryDrawTime }}
          </td>
          <td :style="{ color: '#499bf4' }">
            {{ row.lotteryDrawResult.slice(0, 14) }}
          </td>
          <td :style="{ color: '#ff9100' }">
            {{ row.lotteryDrawResult.slice(14) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

tr td {
  text-align: center;
}
</style>
