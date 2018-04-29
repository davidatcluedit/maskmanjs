'use strict';

const _ = require('lodash');

String.prototype.toSnakeCase = function () {
  const upperChars = this.match(/([A-Z])/g);
  if (! upperChars) {
      return this;
  }

  let str = this.toString();
  for (var i = 0, n = upperChars.length; i < n; i++) {
    str = str.replace(new RegExp(upperChars[i]), '_' + upperChars[i].toLowerCase());
  }

  if (str.slice(0, 1) === '_') {
    str = str.slice(1);
  }

  return str;
};

String.prototype.toCamelCase = function () {
  return this.replace(/_\w/g, (matches) => {
    return matches[1].toUpperCase();
  });
};

/**
 * @param {Array<Object>|Object} obj
 * @return {Boolean}
 */
const isArray = (obj) => {
  if (typeof obj === 'object' && Array.isArray(obj)) return true;

  return false;
};

/**
 * @param {Array<Object>|Object} obj
 * @return {Boolean}
 */
const isObject = (obj) => {
  if (typeof obj === 'object' && !Array.isArray(obj)) return true;

  return false;
};

/**
 * @param {Object} data
 * @param {Function} convertCase
 * @return {Object}
 */
const convertObject = (data, convertCase) => {
  const newObject = {};
  _.mapKeys(data, (value, key) => {
    newObject[convertCase(key)] = isObject(value) ? convertObject(value, convertCase) : value;
    if (isArray(value)) {
      newObject[convertCase(key)] = _.map(value, (element) => {
        return convertObject(element, convertCase);
      });
    }
  });

  return newObject;
};

/**
 * @param {String} string
 * @return {String}
 */
const camelCase = (string) => {
  return string.toCamelCase();
}

/**
 * @param {String} string
 * @return {String}
 */
const snake_case = (string) => {
  return string.toSnakeCase();
}

/**
 * @class MaskMan
 */
class MaskMan {
  /**
   * @param {Array<Object>|Object} data
   */
  constructor(data = null) {
    this.data = data;
  }

  /**
   * @param {Array<Object>|Object} data
   * @return {MaskMan}
   */
  static convert(data = null) {
    return new MaskMan(data)
  }

  /**
   * @param {Function} converter
   * @return {Array<Object>|Object}
   */
  to(converter) {
    if (isObject(this.data)) {
      return convertObject(this.data, converter);
    } else if (isArray(this.data)) {
      return _.map(this.data, (element) => {
        return convertObject(element, converter);
      });
    }
  }
}

/**
 * @property MaskMan
 * @property camelCase
 * @property snake_case
 */
const properties = { MaskMan, camelCase, snake_case };
module.exports = properties;
