import React from 'react'
import CardCustomer from '../../../components/CardCustomer'
import { ContainerGlobal } from '../../../styles/GlobalStyle'
import * as S from '../styles'
import { useState, useEffect } from 'react'

const Customer = () => {


  return (
    <ContainerGlobal>
      <S.Title align="center">
        1000 + Customer
      </S.Title>
      <S.Paragraph align="center">
      Analyze any Business or Creator account—including your competitors—to find the imagery, <br />
       visuals, and captions that drive audience engagement. Get social calendars planned faster <br />
        and spend less time testing content strategies.
      </S.Paragraph>
      <CardCustomer />
    </ContainerGlobal>
  )
}

export default Customer