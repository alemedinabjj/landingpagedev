import React, { useEffect } from 'react'
import { ContentLink, Li, Logo, Navbar, Ul, A, Button } from './styles'
import { useState } from 'react'

const navbar = () => {
  //animar o menu no scroll
  const [isOpen, setIsOpen] = useState(false)
 

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    })
  },[])
  

  return (
    <Navbar className={isOpen ? 'open' : ''} >
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