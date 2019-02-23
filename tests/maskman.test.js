// eslint-disable-next-line camelcase
const { MaskMan, snake_case, camelCase } = require('../index')

const objectCamelCase = {
  testKeyA: 'test',
  testKeyB: 'test',
  testKeyC: {
    testKeyA: 'test',
    testKeyB: 'test',
  },
  testKeyD: [
    {
      testKeyA: 'test',
      testKeyB: 'test',
    },
    {
      testKeyA: 'test',
      testKeyB: 'test',
    },
    {
      testKeyA: 'test',
      testKeyB: 'test',
    },
  ],
}
const objectSnakeCase = {
  test_key_a: 'test',
  test_key_b: 'test',
  test_key_c: {
    test_key_a: 'test',
    test_key_b: 'test',
  },
  test_key_d: [
    {
      test_key_a: 'test',
      test_key_b: 'test',
    },
    {
      test_key_a: 'test',
      test_key_b: 'test',
    },
    {
      test_key_a: 'test',
      test_key_b: 'test',
    },
  ],
}
const arrayOfObjectCamelCase = [objectCamelCase, objectCamelCase, objectCamelCase]
const arrayOfObjectSnakeCase = [objectSnakeCase, objectSnakeCase, objectSnakeCase]

describe('MaskMan', () => {
  it('convert array of object from camelCase to snake_case', () => {
    expect(JSON.stringify(MaskMan.convert(arrayOfObjectCamelCase).to(snake_case)))
      .toBe(JSON.stringify(arrayOfObjectSnakeCase))

    const maskMan = new MaskMan(arrayOfObjectCamelCase)
    expect(JSON.stringify(maskMan.to(snake_case)))
      .toBe(JSON.stringify(arrayOfObjectSnakeCase))
  })

  it('convert array of object from snake_case to camelCase', () => {
    expect(JSON.stringify(MaskMan.convert(arrayOfObjectSnakeCase).to(camelCase)))
      .toBe(JSON.stringify(arrayOfObjectCamelCase))

    const maskMan = new MaskMan(arrayOfObjectSnakeCase)
    expect(JSON.stringify(maskMan.to(camelCase)))
      .toBe(JSON.stringify(arrayOfObjectCamelCase))
  })

  it('convert an object from camelCase to snake_case', () => {
    expect(JSON.stringify(MaskMan.convert(objectCamelCase).to(snake_case)))
      .toBe(JSON.stringify(objectSnakeCase))

    const maskMan = new MaskMan(objectCamelCase)
    expect(JSON.stringify(maskMan.to(snake_case)))
      .toBe(JSON.stringify(objectSnakeCase))
  })

  it('convert an object from snake_case to camelCase', () => {
    expect(JSON.stringify(MaskMan.convert(objectSnakeCase).to(camelCase)))
      .toBe(JSON.stringify(objectCamelCase))

    const maskMan = new MaskMan(objectSnakeCase)
    expect(JSON.stringify(maskMan.to(camelCase)))
      .toBe(JSON.stringify(objectCamelCase))
  })
})
