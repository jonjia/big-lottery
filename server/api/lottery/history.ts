export default defineEventHandler(async (event) => {
  const query = {
    ...getQuery(event),
    gameNo: 85,
    provinceId: 0,
    isVerify: 1,
    pageNo: 1,
    pageSize: 15,
  }

  try {
    const res = await $fetch(
      'https://webapi.sporttery.cn/gateway/lottery/getHistoryPageListV1.qry',
      {
        query,
      },
    )
    return res
  }
  catch (error) {
    console.log(error)
  }
})
