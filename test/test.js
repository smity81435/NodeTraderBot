require('dotenv').config()
const assert = require('assert')
const expect = require('expect.js')
const getDownTendingStock = require('../lib/getDownTrendingStock')
const getBars = require('../lib/getBars')
const getAccount = require('../lib/getAccount')
const { buyMarket, sellStop, sellLimit } = require('../lib/order')
const oneMinute = 60000

describe('Stock Value', () => {
  describe('#getDownTrendingStock()', () => {
    it('should return a stock value', () => {
      const stock = getDownTendingStock()
      expect(stock).to.contain('ANGI')
    })
  })
})

describe('Get Account Value', () => {
  describe('#getAccount()', () => {
    it('should return an object with the account', async () => {
      const account = await getAccount()
      expect(account).to.be.an('object')
      console.log(account)
    })
  })
})

describe('Get Bars', () => {
  describe('#getBars()', () => {
    it('should return two bars', async () => {
      const now = new Date('2020-10-08T15:00:00.000Z')
      const start = new Date(now - 2 * oneMinute).toISOString()
      const end = new Date(now - oneMinute).toISOString()
      const bars = await getBars({ symbol: 'ANGI', start, end })
      expect(bars).to.be.an('object')
      console.log(bars)
    })
  })
})

//TODO Write tests for orders
