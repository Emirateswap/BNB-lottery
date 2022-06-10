import TradingViewChart from 'components/TradingView'
import React from 'react'

const TRADING_VIEW_COMPONENT_ID = 'tradingview_b239c'

const TradingView = () => {
  // return <TradingViewChart id={TRADING_VIEW_COMPONENT_ID} symbol="BINANCE:BNBUSDT" />
  return <TradingViewChart id={TRADING_VIEW_COMPONENT_ID} symbol="BINANCE:ETHUSDT" />
  // return <TradingViewChart id={TRADING_VIEW_COMPONENT_ID} symbol="BINANCE:SHIBUSDT" />
  // return <TradingViewChart id={TRADING_VIEW_COMPONENT_ID} symbol="BINANCE:DOGEUSDT" />
  // return <TradingViewChart id={TRADING_VIEW_COMPONENT_ID} symbol="BINANCE:SOLUSDT" />
}

export default TradingView
