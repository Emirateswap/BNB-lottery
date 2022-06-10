import React from 'react'
import { Button, ModalContainer, Flex, Heading, Modal } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import Link from 'next/link'

const StyledModal = styled(ModalContainer)`
  position: relative;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 100px;
  }
`
const ModalWrapper = styled(Modal)`
  // background-color: #1d1631;  //gainsboro
`

const ModalLogo = styled.div`
  left: 0px;
  text-align: center;
  width: 100%;
`

interface PresaleModalProps {
  onDismiss?: () => void
}

const PresaleModal: React.FC<PresaleModalProps> = ({ onDismiss }) => {

  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <Flex alignItems="center" justifyContent="center">
      <ModalWrapper
        title={t('EMC TOKEN PRESALE')}
        onDismiss={onDismiss}
      >
        <StyledModal minWidth="100px">
          <ModalLogo>
            <img src="https://emirateswap.com/logo.png" alt="EMC Token" height="124px" width="70%" />
          </ModalLogo>
          <br />
          <Flex flexDirection={['column', 'column', 'column', 'column']} alignItems={['center', 'center', 'center', 'center']}>
            <Heading scale="md" color='primary' mb="20px">
              {t('$0.005/token')}
            </Heading>
            <Heading scale='lg' color='secondary' mb='20px'>
              {t('Total Suppy = 750M')}
            </Heading>
          </Flex>
          <Flex alignItems="center" justifyContent="center">
            <Button mt='30px'>
              <Link href='https://emirateswap.com/presale'>
                Buy EMC PRESALE
              </Link>
            </Button>
          </Flex>
        </StyledModal>
      </ModalWrapper>
    </Flex>
  )
}

export default PresaleModal
