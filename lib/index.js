'use strict'

var builder = require('xmlbuilder')

var addItem = function (target, name, value) {
  if (name === 'applink') {
    Object.keys(value).forEach(function (property) {
      var attr = {
        property: property,
        content: value[property]
      }
      target.ele(name, attr)
    })
  } else if (typeof value === 'string') {
    target.ele('g:' + name, value)
  } else {
    var child = target.ele('g:' + name)
    Object.keys(value).forEach(function (property) {
      addItem(child, property, value[property])
    })
  }
}

/**
 * constructor
 * @method Feed
 */
function Feed (items) {
  this.items = []
  items && this.addItems(items)
}

Feed.prototype.addItems = function (items) {
  if (items instanceof Array === false) {
    items = [items]
  }

  this.items = this.items.concat(items)
}

/**
 * convert rss xml string
 * @method toRSS
 * @param  {object} meta
 * @param  {string} meta.title
 * @param  {string} meta.link
 * @param  {string} meta.description
 * @param  {object} opts https://github.com/oozcitak/xmlbuilder-js/wiki#traversing-the-document-tree
 * @return {string}
 */
Feed.prototype.toRSS = function (meta, opts) {
  var items = this.items
  var xml = builder.create('rss')

  xml.att('xmlns:g', 'http://base.google.com/ns/1.0')
  xml.att('version', '2.0')

  // add channel
  var channel = xml.ele('channel')

  // set meta
  meta = meta || {}
  meta.title && channel.ele('title', meta.title)
  meta.link && channel.ele('link', meta.link)
  meta.description && channel.ele('description', meta.description)

  // set items
  for (var i = 0, len = items.length; i < len; i++) {
    var item = channel.ele('item')
    Object.keys(items[i]).forEach(function (name) {
      addItem(item, name, items[i][name])
    })
  }

  return xml.end(opts)
}

module.exports = {
  feed: function (items) {
    return new Feed(items)
  }
}
