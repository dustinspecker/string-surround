'use strict'
import test from 'ava'

import stringSurround from '../lib/'

test('it should throw TypeError when string is not a string type', t => {
  t.throws(stringSurround, TypeError)
  t.throws(stringSurround, /Expected string to be a string/)
})

test('it should throw TypeError when surroundingString is not a string type', t => {
  const surroundingStringTest = () => stringSurround('hello', 2)

  t.throws(surroundingStringTest, TypeError)
  t.throws(surroundingStringTest, /Expected surroundingString to be a string/)
})

test('it should return string when surroundingString is not passed', t => {
  t.is(stringSurround('hello'), 'hello')
})

test('it should surround string with surroundingString', t => {
  t.is(stringSurround('hello', '123'), '123hello123')
  t.is(stringSurround('', 'ABC'), 'ABCABC')
})
