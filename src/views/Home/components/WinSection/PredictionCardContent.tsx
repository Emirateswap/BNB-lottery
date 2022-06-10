import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Flex, Text, Skeleton, Button, ArrowForwardIcon, Heading } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { useTranslation } from 'contexts/Localization'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import { useSlowFresh } from 'hooks/useRefresh'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { getTotalWon } from 'state/predictions/helpers'
import { useBNBBusdPrice } from 'hooks/useBUSDPrice'
import { multiplyPriceByAmount } from 'utils/prices'
import Link from 'next/link';

const StyledLink = styled(NextLinkFromReactRouter)`
  width: 100%;
`
const DropdownWraper = styled('div')`
  position: relative;
  display: inline-block;
  width: 100%;
`
const DropdownContent = styled('div')<{ hover: boolean;}>`
  width: 100%;
  display: block;
  position: absolute;
  z-index: 1;
  background-color: #27262c;
  border: 1px solid #383241;
  border-radius: 16px;
  padding-bottom: 8px;
  padding-top: 8px;
  pointer-events: auto;
  visibility: visible;
  z-index: 1001;
  ${({hover}) => (hover ? `display: block;` : `display: none`)}
`
const DropdownLink = styled('div')`
  align: center;
  -webkit-box-align: center;
  align-items: center;
  border: 0;
  background: transparent;
  color: #B8ADD2;
  cursor: pointer;
  font-weight: 400;
  display: flex;
  font-size: 16px;
  height: 48px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  outline: 0;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  :hover {
    background-color: #353457;
  }
`

const PredictionCardContent = () => {
  const { t } = useTranslation()
  const slowRefresh = useSlowFresh()
  const { observerRef, isIntersecting } = useIntersectionObserver()
  const [loadData, setLoadData] = useState(false)
  const bnbBusdPrice = useBNBBusdPrice()
  const [bnbWon, setBnbWon] = useState(0)
  const bnbWonInUsd = multiplyPriceByAmount(bnbBusdPrice, bnbWon)

  const localisedBnbUsdString = formatLocalisedCompactNumber(bnbWonInUsd)
  const bnbWonText = t('$%bnbWonInUsd% in BNB won so far', { bnbWonInUsd: localisedBnbUsdString })
  const [pretext, wonSoFar] = bnbWonText.split(localisedBnbUsdString)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    if (isIntersecting) {
      setLoadData(true)
    }
  }, [isIntersecting])

  useEffect(() => {
    const fetchMarketData = async () => {
      const totalWon = await getTotalWon()
      setBnbWon(totalWon)
    }

    if (loadData) {
      fetchMarketData()
    }
  }, [slowRefresh, loadData])

  return (
    <>
      <Flex flexDirection="column" mt="48px">
        <Text color="#280D5F" bold fontSize="16px">
          {t('Prediction')}
        </Text>
        {/* {bnbWonInUsd ? (
          <Heading color="#280D5F" my="8px" scale="xl" bold>
            {pretext}
            {localisedBnbUsdString}
          </Heading>
        ) : (
          <>
            <Skeleton width={230} height={40} my="8px" />
            <div ref={observerRef} />
          </>
        )}
        <Text color="#280D5F" mb="24px" bold fontSize="16px">
          {wonSoFar}
        </Text> */}
        <Text color="#280D5F" mb="40px">
          {t('Will The following Rise or fall in 5 minutes; ETHEREUM, SOLANA, DOGECOIN, SHIBA INU and BINANCE COIN . its easy just predict and win every 5 minutes!')}
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <DropdownWraper onMouseLeave={() => setHover(false)}>
          <Button width="100%" onMouseOver={() => setHover(true)}>
            <Text bold>
              {t('Play')}
            </Text>
          </Button>
          <DropdownContent hover={hover}>
              <DropdownLink>
                <StyledLink to="https://emirateswap.com/prediction" id="homepage-prediction-cta">
                    <Text color="">
                      {t('ETH/USDT')}
                    </Text>
                </StyledLink>
              </DropdownLink>
              <DropdownLink>
                <StyledLink to="https://emirateswap.com/bnblot/prediction" id="homepage-prediction-cta">
                    <Text color="">
                      {t('SHIB/USDT')}
                    </Text>
                </StyledLink>
              </DropdownLink>
              <DropdownLink>
                <StyledLink to="https://emirateswap.com/doge/prediction" id="homepage-prediction-cta">
                    <Text color="">
                      {t('DOGE/USDT')}
                    </Text>
                </StyledLink>
              </DropdownLink>
              <DropdownLink>
                <StyledLink to="https://emirateswap.com/solana/prediction" id="homepage-prediction-cta">
                    <Text color="">
                      {t('SOLANA/USDT')}
                    </Text>
                </StyledLink>
              </DropdownLink>
              <DropdownLink>
                <StyledLink to="https://emirateswap.com/bnb/prediction" id="homepage-prediction-cta">
                    <Text color="">
                      {t('BNB/USDT')}
                    </Text>
                </StyledLink>
              </DropdownLink>
          </DropdownContent>
        </DropdownWraper>
      </Flex>
    </>
  )
}

export default PredictionCardContent
