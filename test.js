var assert = require('assert')
var data = require('./')

var LANGUAGE_CODES = [
  'de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'ru', 'zh'
]

data.forEach(function (record, index) {
  try {
    assert(record.hasOwnProperty('A'))
    assert(record.hasOwnProperty('B'))
    assert(record.hasOwnProperty('C'))
    assert(record.hasOwnProperty('D'))
    // Some publications lack ISSN.
    assert(record.hasOwnProperty('F'))
    assert(Array.isArray(record.F))
    record.F.forEach(function (language) {
      assert(
        LANGUAGE_CODES.includes(language)
      )
    })
    assert(record.hasOwnProperty('G'))
    if (record.I) {
      assert(Array.isArray(record.I))
    }
  } catch (error) {
    console.error(index)
    console.error(record)
    throw error
  }
})
