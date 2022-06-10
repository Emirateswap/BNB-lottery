import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'EmirateSwap',
  description:
    'Emirateswap - The first Defi Platform on The Binance Smart Chain to Support lottery Games on Cake and BNB with Prediction Plays on Ethereum, Solana, BNB, Dogecoin and Shiba. Inspired by PancakeSwap',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('EmirateSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('EmirateSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('EmirateSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('EmirateSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('EmirateSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('EmirateSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('EmirateSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('EmirateSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('EmirateSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('EmirateSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('EmirateSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('EmirateSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('EmirateSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('EmirateSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('EmirateSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('EmirateSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('EmirateSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('EmirateSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('EmirateSwap Info & Analytics')}`,
        description: 'View statistics for EmirateSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('EmirateSwap Info & Analytics')}`,
        description: 'View statistics for EmirateSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('EmirateSwap Info & Analytics')}`,
        description: 'View statistics for EmirateSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('EmirateSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('EmirateSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('EmirateSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('EmirateSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('EmirateSwap')}`,
      }
    default:
      return null
  }
}
