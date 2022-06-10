import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Swap'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  {
    label: t('Predict'),
    href: '/prediction',
    icon: 'Trophy',
    items: [
      // {
      //   label: t('Trading Competition'),
      //   href: '/competition',
      // },
      {
        label: t('ETH/USDT'),
        href: 'https://emirateswap.com/prediction',
      },
      {
        label: t('SHIB/USDT'),
        href: 'https://emirateswap.com/shib/prediction',
      },
      {
        label: t('DOGE/USDT'),
        href: 'https://emirateswap.com/doge/prediction',
      },
      {
        label: t('SOLANA/USDT'),
        href: 'https://emirateswap.com/solana/prediction',
      },
      {
        label: t('BNB/USDT'),
        href: 'https://emirateswap.com/bnb/prediction',
      },
    ],
  },
  {
    label: t('Lottery'),
    href: '/lottery',
    icon: 'Sack',
    items: [
      // {
      //   label: t('Trading Competition'),
      //   href: '/competition',
      // },
      {
        label: t('Win BNB'),
        href: '/lottery',
      },
      {
        label: t('Win Cake'),
        href: 'https://emirateswap.com/lottery',
      },
    ],
  },
  {
    label: t('Presale'),
    href: 'https://emirateswap.com/presale',
    icon: 'Gift',
    showItemsOnMobile: false,
    items: [ ],
  },
  // {
  //   label: t('NFT'),
  //   href: `${nftsBaseUrl}`,
  //   icon: 'Nft',
  //   items: [
  //     {
  //       label: t('Overview'),
  //       href: `${nftsBaseUrl}`,
  //     },
  //     {
  //       label: t('Collections'),
  //       href: `${nftsBaseUrl}/collections`,
  //     },
  //     {
  //       label: t('Activity'),
  //       href: `${nftsBaseUrl}/activity`,
  //     },
  //   ],
  // },
  // {
  //   label: '',
  //   href: '/info',
  //   icon: 'More',
  //   hideSubNav: true,
  //   items: [
  //     {
  //       label: t('Info'),
  //       href: '/info',
  //     },
  //     {
  //       label: t('IFO'),
  //       href: '/ifo',
  //     },
  //     {
  //       label: t('Voting'),
  //       href: '/voting',
  //     },
  //     {
  //       type: DropdownMenuItemType.DIVIDER,
  //     },
  //     {
  //       label: t('Leaderboard'),
  //       href: '/teams',
  //     },
  //     {
  //       type: DropdownMenuItemType.DIVIDER,
  //     },
  //     {
  //       label: t('Blog'),
  //       href: 'https://medium.com/pancakeswap',
  //       type: DropdownMenuItemType.EXTERNAL_LINK,
  //     },
  //     {
  //       label: t('Docs'),
  //       href: 'https://docs.pancakeswap.finance',
  //       type: DropdownMenuItemType.EXTERNAL_LINK,
  //     },
  //   ],
  // },
]

export default config
