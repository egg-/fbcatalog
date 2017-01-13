# fbcatalog

[![version](https://img.shields.io/npm/v/fbcatalog.svg)](https://www.npmjs.com/package/fbcatalog) [![download](https://img.shields.io/npm/dm/fbcatalog.svg)](https://www.npmjs.com/package/fbcatalog)
[![status status](https://travis-ci.org/egg-/fbcatalog.svg?branch=master)](https://travis-ci.org/egg-/fbcatalog)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

fbcatalog is a helper that creates a [facebook catalog](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads/product-catalog#setup-product-feed) based on Node.js.


## Installation

```sh
$ npm install fbcatalog
```

## Usage

```javascript
var fbcatalog = require('fbcatalog')
var feed = fbcatalog.feed()

var meta = {
  title: 'Test Store',
  link: 'http://www.example.com',
  description: 'An example item from the feed'
}
var items = require('./fixtures/items.json')

feed.addItems(items)

var xml = feed.toRSS(meta, {
  pretty: true
})

console.log(xml)
```

## Fields

https://developers.facebook.com/docs/marketing-api/dynamic-product-ads/product-catalog#required-fields


## Sample

```json
[
	{
		"id": "DB_1",
		"title": "Dog Bowl In Blue",
		"applink": {
			"ios_url": "example-ios://electronic/db_1",
			"ios_app_store_id": "123",
			"ios_app_name": "Electronic Example iOS",
			"android_url": "example-android://electronic/db_1",
			"android_package": "com.electronic.example",
			"android_app_name": "Electronic Example Android",
			"windows_phone_url": "example-windows://electronic/db_1",
			"windows_phone_app_id": "64ec0d1b-5b3b-4c77-a86b-5e12d465edc0",
			"windows_phone_app_name": "Electronic Example Windows"
		},
		"description": "Solid plastic Dog Bowl in marine blue color",
		"google_product_category": "Animals > Pet Supplies",
		"product_type": "Bowls & Dining > Food & Water Bowls",
		"link": "http://www.example.com/bowls/db-1.html",
		"image_link": "http://images.example.com/DB_1.png",
		"condition": "new",
		"availability": "in stock",
		"price": "9.99 GBP",
		"brand": "Example",
		"item_group_id": "DB_GROUP_1",
		"shipping": {
			"country": "UK",
			"service": "Standard",
			"price": "9.95 GBP"
		},
		"custom_label_0": "Made in Waterford, IE"
	},
	{
		"id": "DB_2",
		"title": "Dog Bowl In Yellow",
		"applink": {
			"ios_url": "example-ios://electronic/db_2",
			"ios_app_store_id": "123",
			"ios_app_name": "Electronic Example iOS",
			"android_url": "example-android://electronic/db_2",
			"android_package": "com.electronic.example",
			"android_app_name": "Electronic Example Android",
			"windows_phone_url": "example-windows://electronic/db_2",
			"windows_phone_app_id": "64ec0d1b-5b3b-4c77-a86b-5e12d465edc0",
			"windows_phone_app_name": "Electronic Example Windows"
		},
		"description": "Solid plastic Dog Bowl in yellow color",
		"google_product_category": "Animals > Pet Supplies",
		"product_type": "Bowls & Dining > Food & Water Bowls",
		"link": "http://www.example.com/bowls/db-2.html",
		"image_link": "http://images.example.com/DB_2.png",
		"condition": "new",
		"availability": "in stock",
		"price": "9.99 GBP",
		"brand": "Example",
		"item_group_id": "DB_GROUP_1",
		"shipping": {
			"country": "UK",
			"service": "Standard",
			"price": "9.95 GBP"
		},
		"custom_label_0": "Made in Waterford, IE"
	}
]

```

### Output
```xml
<?xml version="1.0"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Test Store</title>
    <link>http://www.example.com</link>
    <description>An example item from the feed</description>
    <item>
      <g:id>DB_1</g:id>
      <g:title>Dog Bowl In Blue</g:title>
      <applink property="ios_url" content="example-ios://electronic/db_1"/>
      <applink property="ios_app_store_id" content="123"/>
      <applink property="ios_app_name" content="Electronic Example iOS"/>
      <applink property="android_url" content="example-android://electronic/db_1"/>
      <applink property="android_package" content="com.electronic.example"/>
      <applink property="android_app_name" content="Electronic Example Android"/>
      <applink property="windows_phone_url" content="example-windows://electronic/db_1"/>
      <applink property="windows_phone_app_id" content="64ec0d1b-5b3b-4c77-a86b-5e12d465edc0"/>
      <applink property="windows_phone_app_name" content="Electronic Example Windows"/>
      <g:description>Solid plastic Dog Bowl in marine blue color</g:description>
      <g:google_product_category>Animals &gt; Pet Supplies</g:google_product_category>
      <g:product_type>Bowls &amp; Dining &gt; Food &amp; Water Bowls</g:product_type>
      <g:link>http://www.example.com/bowls/db-1.html</g:link>
      <g:image_link>http://images.example.com/DB_1.png</g:image_link>
      <g:condition>new</g:condition>
      <g:availability>in stock</g:availability>
      <g:price>9.99 GBP</g:price>
      <g:brand>Example</g:brand>
      <g:item_group_id>DB_GROUP_1</g:item_group_id>
      <g:shipping>
        <g:country>UK</g:country>
        <g:service>Standard</g:service>
        <g:price>9.95 GBP</g:price>
      </g:shipping>
      <g:custom_label_0>Made in Waterford, IE</g:custom_label_0>
    </item>
    <item>
      <g:id>DB_2</g:id>
      <g:title>Dog Bowl In Yellow</g:title>
      <applink property="ios_url" content="example-ios://electronic/db_2"/>
      <applink property="ios_app_store_id" content="123"/>
      <applink property="ios_app_name" content="Electronic Example iOS"/>
      <applink property="android_url" content="example-android://electronic/db_2"/>
      <applink property="android_package" content="com.electronic.example"/>
      <applink property="android_app_name" content="Electronic Example Android"/>
      <applink property="windows_phone_url" content="example-windows://electronic/db_2"/>
      <applink property="windows_phone_app_id" content="64ec0d1b-5b3b-4c77-a86b-5e12d465edc0"/>
      <applink property="windows_phone_app_name" content="Electronic Example Windows"/>
      <g:description>Solid plastic Dog Bowl in yellow color</g:description>
      <g:google_product_category>Animals &gt; Pet Supplies</g:google_product_category>
      <g:product_type>Bowls &amp; Dining &gt; Food &amp; Water Bowls</g:product_type>
      <g:link>http://www.example.com/bowls/db-2.html</g:link>
      <g:image_link>http://images.example.com/DB_2.png</g:image_link>
      <g:condition>new</g:condition>
      <g:availability>in stock</g:availability>
      <g:price>9.99 GBP</g:price>
      <g:brand>Example</g:brand>
      <g:item_group_id>DB_GROUP_1</g:item_group_id>
      <g:shipping>
        <g:country>UK</g:country>
        <g:service>Standard</g:service>
        <g:price>9.95 GBP</g:price>
      </g:shipping>
      <g:custom_label_0>Made in Waterford, IE</g:custom_label_0>
    </item>
  </channel>
</rss>
```

## Test

Test with mocha

```bash
$ grunt
```

like watch

```bash
$ grunt watch
```

## Contributing

Bug reports and pull requests are welcome on Github at [https://github.com/egg-/fbcatalog](https://github.com/egg-/fbcatalog)

1. Fork it
1. Create your feature branch.
1. Commit your changes.
1. Push to the branch.
1. Create a new Pull Request.

## Release History

See the [CHANGELOG.md](CHANGELOG.md)

## License

fbcatalog is licensed under the [MIT license](https://github.com/egg-/fbcatalog/blob/master/LICENSE).
