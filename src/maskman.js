/* eslint-disable no-extend-native, func-names */

'use strict'

String.prototype.toSnakeCase = function() {
  const upperChars = this.match(/([A-Z])/g)
  if (!upperChars) {
    return this
  }

  let str = this.toString()
  for (let i = 0, n = upperChars.length; i < n; i++) {
    str = str.replace(new RegExp(upperChars[i]), '_' + upperChars[i].toLowerCase())
  }

  if (str.slice(0, 1) === '_') {
    str = str.slice(1)
  }

  return str
}

String.prototype.toCamelCase = function() {
  return this.replace(/_\w/g, matches => {
    return matches[1].toUpperCase()
  })
}

const isArray = obj => {
  if (typeof obj === 'object' && Array.isArray(obj)) return true
  return false
}

const isObject = obj => {
  if (typeof obj === 'object' && !Array.isArray(obj)) return true
  return false
}

const convertObject = (data, convertCase) => {
  return Object.keys(data).reduce((newObject, key) => {
    const temp = newObject
    temp[convertCase(key)] = isObject(data[key]) ? convertObject(data[key], convertCase) : data[key]
    if (isArray(data[key])) {
      temp[convertCase(key)] = data[key].map(element => convertObject(element, convertCase))
    }
    return temp
  }, {})
}

const camelCase = string => {
  return string.toCamelCase()
}

// eslint-disable-next-line camelcase
const snake_case = string => {
  return string.toSnakeCase()
}

class MaskMan {
  constructor(data = null) {
    this.data = data
  }

  static convert(data = null) {
    return new MaskMan(data)
  }

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
