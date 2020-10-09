const fetch = require('node-fetch')
const headers = {
  'APCA-API-KEY-ID': process.env.ALPACA_API,
  'APCA-API-SECRET-KEY': process.env.ALPACA_SECRET,
}

//Market Buy
const buyMarket = async ({ symbol, qty }) => {
  try {
    console.log(`Buying ${qty} of ${symbol}`)
    const rsp = await fetch(`${process.env.ALPACA_PAPER_ENDPOINT}/v2/orders`, {
      method: 'post',
      body: {
        symbol: symbol,
        qty: qty,
        side: 'buy',
        type: 'market',
        time_in_force: 'day',
      },
      headers: headers,
    })
    return rsp.json()
  } catch (error) {
    console.log(error)
  }
}

//Stoploss Sell
const sellStop = async ({ symbol, price, qty }) => {
  try {
    console.log(`Selling ${qty} of ${symbol}`)
    const rsp = await fetch(`${process.env.ALPACA_PAPER_ENDPOINT}/v2/orders`, {
      method: 'post',
      body: {
        symbol: symbol,
        qty: qty,
        side: 'sell',
        type: 'stop',
        time_in_force: 'day',
        stop_price: price,
      },
      headers: headers,
    })
    return rsp.json()
  } catch (error) {
    console.log(error)
  }
}

//Limit Sell
const sellLimit = async ({ symbol, price, qty }) => {
  try {
    console.log(`Selling ${qty} of ${symbol}`)
    const rsp = await fetch(`${process.env.ALPACA_PAPER_ENDPOINT}/v2/orders`, {
      method: 'post',
      body: {
        symbol: symbol,
        qty: qty,
        side: 'sell',
        type: 'limit',
        time_in_force: 'day',
        limit_price: price,
      },
      headers: headers,
    })
    return rsp.json()
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  buyMarket,
  sellStop,
  sellLimit,
}
