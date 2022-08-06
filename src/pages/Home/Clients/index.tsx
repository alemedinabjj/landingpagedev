import React from 'react'
import { ContainerGlobal } from '../../../globalStyle'
import { Title } from '../styles'
import { ClientCard } from './styles'
import { Content } from './styles'

const Clients = () => {
  return (
    <ContainerGlobal>
      <Title align="center">
        Nossos Clientes
      </Title>
      <Content>
        <ClientCard>
          <h1>Cliente</h1>
        </ClientCard>
        <ClientCard>
          <h1>Cliente</h1>
        </ClientCard>
        <ClientCard>
          <h1>Cliente</h1>
        </ClientCard>
        <ClientCard>
          <h1>Cliente</h1>
        </ClientCard>
      </Content>
    </ContainerGlobal>
  )
}

export default Clients