'use strict'

require('jasmine')

var urlConstruct = require('../index.js')

describe('should extract url params', function () {
  it('should format singular urls correctly', function () {
    var res = urlConstruct('/orders/:id', {id: '20388'})
    expect(res).toBe('/orders/20388')
  })

  it('should extract multi param urls correctly', function () {
    var res = urlConstruct('/orders/:id/destory/:token', {id: '20388', token: '123'})
    expect(res).toBe('/orders/20388/destory/123')
  })

  it('should extract multi variales and query params', function () {
    var res = urlConstruct('/orders/:id/destory/:token?cache=:cache', {id: '20388', token: '123', cache: false})
    expect(res).toBe('/orders/20388/destory/123?cache=false')
  })

  it('should extract multi query params', function () {
    var res = urlConstruct('/orders?id=:id&cache=:cache', {id: '20388', cache: false})
    expect(res).toBe('/orders?id=20388&cache=false')
  })

  it('should work with only dynamic values', function () {
    var res = urlConstruct('/:order?id=:id&cache=:cache', {id: '20388', cache: false, order: 'jack'})
    expect(res).toBe('/jack?id=20388&cache=false')
  })
})
