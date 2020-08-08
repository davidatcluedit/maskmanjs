/* eslint-disable no-extend-native, func-names */
function isArray(obj) {
  if (typeof obj === 'object' && Array.isArray(obj)) return true
  return false
}

function isObject(obj) {
  if (typeof obj === 'object' && !Array.isArray(obj)) return true
  return false
}

function convertObject(data, convertCase) {
  return Object.keys(data).reduce((newObject, key) => {
    const temp = newObject
    temp[convertCase(key)] = isObject(data[key]) ? convertObject(data[key], convertCase) : data[key]
    if (isArray(data[key])) {
      temp[convertCase(key)] = data[key].map(element => convertObject(element, convertCase))
    }
    return temp
  }, {})
}

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf maskman
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 */
function camelCase(string = '') {
  return string.replace(/_\w/g, matches => {
    return matches[1].toUpperCase()
  })
}

/**
 * Converts `string` to [snake case](https://en.wikipedia.org/wiki/snake_case).
 *
 * @static
 * @memberOf maskman
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 */
// eslint-disable-next-line camelcase
function snake_case(string) {
  const upperChars = string.match(/([A-Z])/g)
  if (!upperChars) {
    return string
  }

  let str = string.toString()
  for (let i = 0, n = upperChars.length; i < n; i++) {
    str = str.replace(new RegExp(upperChars[i]), '_' + upperChars[i].toLowerCase())
  }

  if (str.slice(0, 1) === '_') {
    str = str.slice(1)
  }

  return str
}

/**
 * MaskMan
 */
class MaskMan {
  /**
   * Create a MaskMan instance.
   * @param {any} [data=null] array or object you want to convert.
   * @returns {any} converted array or object.
   */
  constructor(data = null) {
    this.data = data
  }

  /**
   * Create a MaskMan instance.
   * @param {any} [data=null] array or object you want to convert.
   * @returns {any} converted array or object.
   */
  static convert(data = null) {
    return new MaskMan(data)
  }

  /**
   * Convert all key in an object by converter.
   * @param {Function} converter callback function convert keys to the case style you want.
   * @returns {any} converted array or object.
   */
  to(converter) {
    if (isObject(this.data)) {
      return convertObject(this.data, converter)
    } if (isArray(this.data)) {
      return this.data.map(element => convertObject(element, converter))
    }
    return this.data
  }
}

const properties = { MaskMan, camelCase, snake_case }
module.exports = properties
