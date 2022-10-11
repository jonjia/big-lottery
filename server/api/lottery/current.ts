export default defineEventHandler(async () => {
  try {
    const res = await $fetch(
      'https://webapi.sporttery.cn/gateway/lottery/getDigitalDrawInfoV1.qry',
      {
        query: {
          isVerify: 1,
          param: '85,0',
        },
      },
    )

    return res
  }
  catch (error) {
    console.log(error)
  }
})
