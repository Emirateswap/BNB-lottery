import React from 'react'
import { Flex} from '@pancakeswap/uikit'
import Image from 'next/image'

const PredictionCardImage = () => {

  return (
    <>
      <Flex flexDirection="column">
        <Image src="/bnblot/images/pred_card.png" width='220px' height='276px' alt='pred_card' />
      </Flex>
    </>
  )
}

export default PredictionCardImage
