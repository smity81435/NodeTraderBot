const fetch = require('node-fetch')

const getBars = async ({ symbol, start, end }) => {
  try {
    const rsp = await fetch(
      `https://data.alpaca.markets/v1/bars/minute?symbols=${symbol}&start=${start}&end=${end}`,
      {
        headers: {
          'APCA-API-KEY-ID': process.env.ALPACA_API,
          'APCA-API-SECRET-KEY': process.env.ALPACA_SECRET,
        },
      }
    )
    return rsp.json()
  } catch (e) {
    console.log(e)
  }
}

module.exports = getBars
