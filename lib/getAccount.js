const fetch = require('node-fetch')

//fetch account details from Alpaca.markets
const getAccount = async () => {
  try {
    const rsp = await fetch(`${process.env.ALPACA_PAPER_ENDPOINT}/v2/account`, {
      headers: {
        'APCA-API-KEY-ID': process.env.ALPACA_API,
        'APCA-API-SECRET-KEY': process.env.ALPACA_SECRET,
      },
    })
    return rsp.json()
  } catch (error) {
    console.log(error)
  }
}

module.exports = getAccount
