import styled from 'styled-components'

export const Navbar = styled.nav`

  width: 100%;
  position: fixed;
  padding-inline: var(--padding-base);
  background: var(--bg-color);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: .3s ease;
  z-index: 12;

  &.open {
    height:70px;
  }

  
`

export const Logo = styled.h1`

  font-size: 2rem;
  line-height: 34px;
  color: var(--text-color);
  font-weight: 200;

  span {
    font-size: 2rem;
    color: var(--secondary-color);
    font-style: italic;
  }

`

export const ContentLink = styled.div`

  display: flex;
  align-items: center;
  gap: 6rem;
`

export const Ul = styled.ul`

  display: flex;
  align-items: center;
  gap: 1.3rem;

`

export const Li = styled.li`

  display: flex;
  gap: 1.4rem;
  align-items: center;

`

export const A = styled.a`
  font-size: var(--font-size-small);
  color: var(--text-color);
  position: relative;
  

  &::after {
    content: '';
    position: absolute;
    height: 2px;
    background: var(--secondary-color);
    width: 0%;
    bottom:0;
    left: 0;
    transition: .3s;
  }


  &:hover::after {
    width: 100%;
  }


`



export const Button = styled.button`
  background: var(--primary-color);
  padding-block: .8rem;
  padding-inline: 2.2rem;
  border-radius: 1rem;
  color: var(--text-color);
  transition: .3s ease;

  &:hover {
    filter: brightness(.9);
  }


`;

