import React from 'react'
import styled from 'styled-components'
import { Card } from '@pancakeswap/uikit'

export const BodyWrapper = styled(Card)`
  border-radius: 0px;
  max-width: 436px;
  width: 100%;
  z-index: 1;

  & > div {
    border-radius: 0px;
  }

  // ${({ theme }) => theme.mediaQueries.sm} { 
  //   & > div {
  //     border-radius: 24px;
  //   }
  // }
  
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
