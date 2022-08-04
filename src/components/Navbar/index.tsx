import React from 'react'
import { ContentLink, Li, Logo, Navbar, Ul, A, Button } from './styles'
import { useState } from 'react'

const navbar = () => {
  
  return (
    <Navbar>
    <ContentLink>
    <Logo>
        <span>Monkey</span> Dev<span>.</span>
    </Logo>
    <Ul>
      <Li>
        <A href="">Início</A>
        <A href="">Quem somos</A>
        <A href="">Serviços</A>
        <A href="">Contato</A>
      </Li>
    </Ul>
    </ContentLink>

    <Button>
      Contatar
    </Button>


    </Navbar>
  )
}

export default navbar