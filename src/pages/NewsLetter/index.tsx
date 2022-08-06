import React from 'react'
import { Button } from '../../components/Navbar/styles'
import { ContainerGlobal } from '../../globalStyle'
import { Title } from '../Home/styles'
import { Container, Form, Input } from './styles'

const NewsLetter = () => {
  return (
    <ContainerGlobal background="secondary" >
      <Container>
        <Title align="center">Assine nossa NewsLetter</Title>
        <Form>
          <Input type="text" placeholder="Seu nome" />
          <Input type="email" placeholder="Seu email" />
          <Button>Assinar</Button>
        </Form>
      </Container>
    </ContainerGlobal>
  )
}

export default NewsLetter
