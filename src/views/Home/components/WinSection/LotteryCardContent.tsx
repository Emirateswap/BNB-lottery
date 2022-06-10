import React, { useState, useEffect, useMemo } from 'react'
import { Flex, Text, Skeleton, Button, ArrowForwardIcon } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { useTranslation } from 'contexts/Localization'
import { useSlowFresh } from 'hooks/useRefresh'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { usePriceBNBBusd } from 'state/farms/hooks'
import Balance from 'components/Balance'
import styled from 'styled-components'
import { fetchCurrentLotteryIdAndMaxBuy, fetchLottery } from 'state/lottery/helpers'
import BigNumber from 'bignumber.js'
import { getBalanceAmount } from 'utils/formatBalance'

const StyledLink = styled(NextLinkFromReactRouter)`
  width: 100%;
`

const StyledBalance = styled(Balance)`
  background: ${({ theme }) => theme.colors.gradients.gold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const LotteryCardContent = () => {
  const { t } = useTranslation()
  const { observerRef, isIntersecting } = useIntersectionObserver()
  const [loadData, setLoadData] = useState(false)
  const slowRefresh = useSlowFresh()
  const [lotteryId, setLotteryId] = useState<string>(null)
  const [currentLotteryPrize, setCurrentLotteryPrize] = useState<BigNumber>(null)
  const bnbPriceBusdAsString = usePriceBNBBusd().toString()

  const cakePrizesText = t('%cakePrizeInUsd% in CAKE prizes this round', { bnbPrizeInUsd: bnbPriceBusdAsString })
  const [pretext, prizesThisRound] = cakePrizesText.split(bnbPriceBusdAsString)

  const bnbPriceBusd = useMemo(() => {
    return new BigNumber(bnbPriceBusdAsString)
  }, [bnbPriceBusdAsString])

  useEffect(() => {
    if (isIntersecting) {
      setLoadData(true)
    }
  }, [isIntersecting])

  useEffect(() => {
    // get current lottery ID
    const fetchCurrentID = async () => {
      const { currentLotteryId } = await fetchCurrentLotteryIdAndMaxBuy()
      setLotteryId(currentLotteryId)
    }

    if (loadData) {
      fetchCurrentID()
    }
  }, [loadData, setLotteryId])

  useEffect(() => {
    // get public data for current lottery
    const fetchCurrentLotteryPrize = async () => {
      const { amountCollectedInBNB } = await fetchLottery(lotteryId)
      const prizeInBusd = bnbPriceBusd.times(amountCollectedInBNB)
      setCurrentLotteryPrize(prizeInBusd)
    }

    if (lotteryId) {
      fetchCurrentLotteryPrize()
    }
  }, [lotteryId, slowRefresh, setCurrentLotteryPrize, bnbPriceBusd])

  return (
    <>
      <Flex flexDirection="column" mt="48px">
        <Text color="white" bold fontSize="16px">
          {t('Lottery')}
        </Text>
        {/* {pretext && (
          <Text color="white" mt="12px" bold fontSize="16px">
            {pretext}
          </Text>
        )} */}
        {/* {currentLotteryPrize && currentLotteryPrize.gt(0) ? (
          <StyledBalance
            fontSize="40px"
            bold
            prefix="$"
            decimals={0}
            value={getBalanceAmount(currentLotteryPrize).toNumber()}
          />
        ) : (
          <>
            <Skeleton width={200} height={40} my="8px" />
            <div ref={observerRef} />
          </>
        )} */}
        {/* <Text color="white" mb="24px" bold fontSize="16px">
          {prizesThisRound}
        </Text> */}
        <Text color="white" mb="10px">
          {t('In Cake Lottery; Buy tickets using Cake and win Cake if your numbers matches the winning number')}
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <StyledLink to="/lottery" id="homepage-prediction-cta">
          <Button width="100%">
            <Text bold>
              {t('BUY Cake Tickets')}
            </Text>
            <ArrowForwardIcon ml="4px" />
          </Button>
        </StyledLink>
      </Flex>
      <Flex flexDirection="column" mt="15px">
        <Text color="white" mb="10px">
            {t('In Binance Coin(BNB) Lottery; Buy tickets using BNB and win BNB if your numbers matches the winning number')}
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <StyledLink to="https://emirateswap.com/bnblot/lottery" id="homepage-prediction-cta">
          <Button width="100%">
            <Text bold>
              {t('BUY BNB Tickets')}
            </Text>
            <ArrowForwardIcon ml="4px" />
          </Button>
        </StyledLink>
      </Flex>
      <Text color="white" bold fontSize="16px" mt='10px'>
        {t('Note: Emirateswap Coin Lottery will be launched after Presale')}
      </Text>
    </>
  )
}

export default LotteryCardContent
