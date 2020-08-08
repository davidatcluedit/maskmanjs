/* eslint-disable func-names */
const axios = require('axios').default
// eslint-disable-next-line camelcase
const { MaskMan, snake_case } = require('../index')

it('convert an object from camelCase to snake_case', async () => {
  const objectSnakeCase = {
    user_id: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  }
  const instance = axios.create()
  instance.interceptors.response.use(
    function(response) {
      response.data = MaskMan.convert(response.data).to(snake_case)
      return response
    },
    // eslint-disable-next-line no-unused-vars
    function(error) {
      // eslint-disable-next-line no-undef
      return Promise.reject(error)
    }
  )
  const { data } = await instance.get('https://jsonplaceholder.typicode.com/todos/1')
  expect(JSON.stringify(data))
    .toBe(JSON.stringify(objectSnakeCase))
})