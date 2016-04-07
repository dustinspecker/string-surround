'use strict'

/**
 * Surround a string with another string
 * @param {String} string - the string to surround
 * @param {String} [surroundingString=''] - the string to surround around string
 * @throws {TypeError} - if string or surroundingString are not strings
 * @returns {String} - string surrounded with surroundingString
 */
module.exports = (string, surroundingString = '') => {
  if (typeof string !== 'string') {
    throw new TypeError('Expected string to be a string')
  }

  if (typeof surroundingString !== 'string') {
    throw new TypeError('Expected surroundingString to be a string')
  }

  return `${surroundingString}${string}${surroundingString}`
}
