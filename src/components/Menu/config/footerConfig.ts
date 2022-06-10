import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'mailto:support@emirateswap.com',
      },
      // {
      //   label: t('Brand'),
      //   href: 'https://docs.pancakeswap.finance/brand',
      // },
      // {
      //   label: t('Blog'),
      //   href: 'https://medium.com/pancakeswap',
      // },
      {
        label: t('Community'),
        href: 'https://T.me/emirateswapofficial',
      },
      // {
      //   label: t('CAKE token'),
      //   href: 'https://docs.pancakeswap.finance/tokenomics/cake',
      // },
      // {
      //   label: '—',
      // },
      // {
      //   label: t('Online Store'),
      //   href: 'https://pancakeswap.creator-spring.com/',
      //   isHighlighted: true,
      // },
      {
        label: t('LitePaper'),
        href: 'http://emirateswap.com/presale/LitePaper.pdf',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'mailto:support@emirateswap.com',
      },
      // {
      //   label: t('Troubleshooting'),
      //   href: 'https://docs.pancakeswap.finance/help/troubleshooting',
      // },
      {
        label: t('Guides'),
        href: 'http://emirateswap.com/presale/LitePaper.pdf',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Emirateswap',
      },
      {
        label: t('Documentation'),
        href: 'http://emirateswap.com/presale/LitePaper.pdf',
      },
      // {
      //   label: t('Bug Bounty'),
      //   href: 'https://docs.pancakeswap.finance/code/bug-bounty',
      // },
      // {
      //   label: t('Audits'),
      //   href: 'https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
      // },
      // {
      //   label: t('Careers'),
      //   href: 'https://docs.pancakeswap.finance/hiring/become-a-chef',
      // },
    ],
  },
]
