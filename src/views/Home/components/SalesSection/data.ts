import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Swap any token on EmirateSwap using the Binance smart chain by connecting your wallet',
  bodyText: '',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Swap Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/bnblot/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
      { src: 'BTC', alt: 'BTC token' },
      { src: 'CAKE', alt: 'CAKE token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn Great income with Cryptocurrencies',
  bodyText: 'EmirateSwap creates an easier way for cryptocurrencies to work for you',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/products/yield-farming',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/bnblot/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
      { src: 'folder', alt: 'Folder with cake token' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'Emirateswap Coin, BNB and CAKE are the fulcrum of Emirateswap Platform.',
  bodyText:
    '',
  reverse: false,
  primaryButton: {
    to: 'https://www.binance.com/en/trade/CAKE_USDT',
    text: 'Buy CAKE',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/tokenomics/cake',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/bnblot/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
      { src: 'BTC', alt: 'BTC token' },
      { src: 'CAKE', alt: 'CAKE token' },
    ],
  },
}
