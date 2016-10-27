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
})
