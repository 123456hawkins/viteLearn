import mockJS from 'mockjs'
const userList = mockJS.mock({
  'data|200': [
    {
      name: '@cname', //生成不同中午名
      'id|+1': 1,
      time: '@time',
      date: '@date',
    },
  ],
})
console.log(userList)
module.exports = [
  {
    method: 'post',
    url: '/api/users',
    response: ({ body }) => {
      return {
        code: 200,
        msg: 'success',
        data: userList,
      }
    },
  },
]
