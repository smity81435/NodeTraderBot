# NodeTraderBot

## Summary
This bot is a boilderplate to make NodeJS bots for stock trading. It is built with the Alpaca Markets API, but can easily be modified to take whichever api you wanted to use.

## Environment
Obviously built in Node.js, _ya egg._
- Node 12

### Dependencies
- Node Fetch for API calls
- DotEnv for environment variable storage
- Mocha for testing.
- Expect.js for testing.

## Functions

### getDownTrendingStock()
- Returns the stock symbol of a stock that is trending downward in order to start looking for a Bullish Engulfing Pattern. _string_
- TODO: Implement a search pattern 

### getAccount()
- Returns the account information prior to trade to get the account balance. _JSON_

### getBars({Symbol, Start Date, End Date})
- Checks for a bullish engulfing pattern _JSON_
- Returns the object with requested bars

### buyMarket({Symbol, Qty})
- Places a market order
- Returns the order object if successful _JSON_ (with array inside)

### sellStop({Symbol, Price, Qty}) 
- Places a stoploss order (normally after the buy order)
- Returns the order object _JSON_

### sellLimit({Symbol, Price, Qty}) 
- Places a limit order 
- Returns the order object _JSON_

Still lots to do...


