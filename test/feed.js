/* globals before it describe */

'use strict'

var assert = require('assert')
var fs = require('fs')
var path = require('path')
var async = require('async')
var parseString = require('xml2js').parseString

var fbcatalog = require('../')

describe('Catalog feed', function () {
  var feed = fbcatalog.feed()

  before(function () {
    var items = require('./fixtures/items.json')
    feed.addItems(items)
  })

  it('rss xml', function (done) {
    var meta = {
      title: 'Test Store',
      link: 'http://www.example.com',
      description: 'An example item from the feed'
    }

    var xml = feed.toRSS(meta, {
      pretty: true
    })

    async.parallel({
      output: function (cb) {
        parseString(xml, cb)
      },
      goal: function (cb) {
        fs.readFile(path.join(__dirname, '/fixtures/rss.xml'), function (err, data) {
          if (err) {
            return cb(err)
          }
          parseString(data, cb)
        })
      }
    }, function (err, result) {
      assert.equal(err, null)
      assert.notEqual(xml, '')

      assert.equal(JSON.stringify(result.output), JSON.stringify(result.goal))

      done()
    })
  })
})
