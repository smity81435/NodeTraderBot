require('dotenv').config()
const getDownTrendingStock = require('./lib/getDownTrendingStock')
const getBars = require('./lib/getBars')
const getAccount = require('./lib/getAccount')
const { buyMarket, sellStop, sellLimit } = require('./lib/order')

const init = async () => {
  const oneMinute = 60000
  // recognize pattern
  //find downtrending stock
  const symbol = await getDownTrendingStock()
  //check every minute
  const checkAndOrder = async () => {
    const now = new Date()
    //start "2020-10-08T15:00:00.000Z"
    const start = new Date(now - 2 * oneMinute).toISOString()

    const end = new Date(now - oneMinute).toISOString()
    console.log('Checking Bars', end, start)

    const bars = await getBars({ symbol, start, end })

    console.log(bars)
    const bar1 = bars[symbol][0]
    const bar2 = bars[symbol][1]
    // if
    // bar1 closes  < bar1 opens - downtrending
    // bar2 closes > bar2 opening - uptrending
    // bar2 closes > bar1 opens - higher than last sale
    // bar2 opens < bar1 close
    // bar2 volume > bar1 volume
    //peppers

    if (
      bar1 &&
      bar2 &&
      bar1.c < bar1.o &&
      bar2.c > bar2.o &&
      bar2.c > bar1.o &&
      bar2.o < bar1.c &&
      bar2.v > bar1.v
    ) {
      //get account an check buying power & willing to spend
      const account = await getAccount()
      const willingtoSpend = account.buying_power * 0.1
      console.log('willing to spend', willingtoSpend)

      // find how many shares  you can buy
      const qty = Math.floor(willingtoSpend / bar2.c)
      console.log('how many shares:', qty)

      //buy this stock - return order json
      const purchase = await buyMarket({ symbol, qty })

      //set stop at bar1 low
      sellStop({ symbol, price: bar1.l, qty })

      //set 100% limit sell at 2:1 profit ratio i.e. either loose $100 or make $200
      const profitTarget = (purchase.price - bar1.c) * 2 + purchase.price
      sellLimit({ symbol, price: profitTarget, qty })
    }
  }
  checkAndOrder()
  setInterval(checkAndOrder, oneMinute)
}

init()
