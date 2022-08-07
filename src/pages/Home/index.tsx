import React from 'react'
import Navbar from '../../components/Navbar/index'
import * as S from './styles'
import * as C from '../../components/Navbar/styles'
import { ContainerGlobal, Wrapper } from '../../styles/GlobalStyle'
import HOMESVG from '../../assets/home.svg'
import SatisfiedClient from '../../components/SatisfiedClient'
import { ContainerCard } from '../../components/SatisfiedClient/styles'
import Services from './Services'

const index = () => {
  return (
    <>
      <Navbar />
      <S.Container>
        <ContainerGlobal>
       
            <Wrapper>
              <div>
                <S.Title>
                  A Solução para <br />
                  seu negócio!
                </S.Title>
                <S.Paragraph>
                  More than 2 billion people in over countries use socibook{' '}
                  <br />
                  to stay in touch with friends & family.
                </S.Paragraph>
                <C.Button>Saiba mais!</C.Button>
              </div>
              <div>
                <img src={HOMESVG} alt="" />
              </div>
            </Wrapper>
      
        </ContainerGlobal>
      </S.Container>
      <S.Container paddingTop="secondary">
        <ContainerGlobal color="#fff" background="secondary" >
          <S.Title align="center">
          Search through more than 11 million <br /> 
          social media profiles
          </S.Title>
          <S.Paragraph align="center">
          Heepsy’s search filters help you find exactly what you’re looking for, and <br />
          our influencer reports provide you with the metrics
          </S.Paragraph>
          <ContainerCard>
            <SatisfiedClient />
            <SatisfiedClient />
            <SatisfiedClient />
            <SatisfiedClient />
          </ContainerCard>
        </ContainerGlobal>
      </S.Container>
    </>
  )
}

export default index
