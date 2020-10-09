# NodeTraderBot

## Summary
This bot is a boilderplate to make NodeJS bots for stock trading. It is built with the Alpaca Markets API, but can easily be modified to take whichever api you wanted to use.

## Environment
Obviously built in Node.js, ya egg.
- Node 12

### Dependencies
- Node Fetch for API calls
- DotEnv for environment variable storage
- Expect.js for testing.

## Functions

### getDownTrendingStock()
- Returns the stock symbol of a stock that is trending downward in order to start looking for a Bullish Engulfing Pattern. STRING
- TODO: Implement a search pattern

### getAccount()
- Returns the account information prior to trade to get the account balance. JSON

### getBars() - Symbol, Start Date, End Date
- Checks for a bullish engulfing pattern JSON
- Returns the object with requested bars

### buyMarket() - Symbol, Qty
- Places a market order
- Returns the order object if successful

### sellStop() - Symbol, Price, Qty
- Places a stoploss order (normally after the buy order)
- Returns the order object

### sellLimit() - Symbol, Price, Qty
- Places a limit order 
- Returns the order object

Still lots to do...
