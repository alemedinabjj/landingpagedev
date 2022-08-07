import React from 'react'
import { Container, Card, Title, Description, Content } from './styles'
import { Value } from './styles'
import { useState, useEffect } from 'react'
import { ContainerGlobal } from '../../../styles/GlobalStyle'


const Services = () => {
  return (
    <ContainerGlobal>
      <Container>
        <Card>
          <Value>
            R$: 250,00 <span>/mês</span>
          </Value>
          <Title>Plano Expert</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Description>
          <Content>
            <div>
              <img src="../src/assets/check.svg" alt="" />
              Recursos Start
            </div>
          </Content>
          <Content>
            <div>
              <img src="../src/assets/check.svg" alt="" />
              Recursos Start
            </div>
          </Content>
          <Content>
            <div>
              <img src="../src/assets/check.svg" alt="" />
              Recursos Start
            </div>
          </Content>
        </Card>
        <Card className="active">
          <Value>
            R$: 250,00 <span>/mês</span>
          </Value>
          <Title>Plano Expert</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Description>
          <Content>
            <div>
              <img src="../src/assets/check.svg" alt="" />
              Recursos Start
            </div>
          </Content>
          <Content>
            <div>
              <img src="../src/assets/check.svg" alt="" />
              Recursos Start
            </div>
          </Content>
          <Content>
            <div>
              <img src="../src/assets/check.svg" alt="" />
              Recursos Start
            </div>
          </Content>
        </Card>
        <Card>
          <Value>
            R$: 250,00 <span>/mês</span>
          </Value>
          <Title>Plano Expert</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Description>
          <Content>
            <div>
              <img src="../src/assets/check.svg" alt="" />
              Recursos Start
            </div>
          </Content>
          <Content>
            <div>
              <img src="../src/assets/check.svg" alt="" />
              Recursos Start
            </div>
          </Content>
          <Content>
            <div>
              <img src="../src/assets/check.svg" alt="" />
              Recursos Start
            </div>
          </Content>
        </Card>
      </Container>
    </ContainerGlobal>
  )
}

export default Services
