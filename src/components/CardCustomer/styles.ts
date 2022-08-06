import styled from 'styled-components'

export const ContainerCard = styled.div`

  width: 100%;
  margin: 0 auto;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  
  &::after {
    content: '';
    height: 1px;

    //background iniciando transparente e terminando transparente
    background: linear-gradient(to right, rgba(255, 255, 255, 0), var(--tertiary-color), rgba(255, 255, 255, 0));

    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::before {
    content: '';
    height: 1px;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), var(--tertiary-color), rgba(255, 255, 255, 0));
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

`;

export const Card = styled.div`

  padding-block: 70px;
  padding-inline: 80px;

  position: relative;

  //border card menos no ultimo filho
  border-right: 1px solid var(--tertiary-color);

  &:last-child {
    border-right: none;
  }






`;

export const TitleDescription = styled.h1`

  font-family: "Inter", Roboto;
  font-weight: 200;
  font-size: 16px;
  line-height: 64px;
  color: var(--tertiary-color);
  text-align: center;
  letter-spacing: 0.5px;

`;

export const NumberDescription = styled.p`

  font-family:"Roboto", sans-serif;
  font-weight: bold;
  font-size: var(--font-size-h3);
  line-height: 64px;
  color: var(--tertiary-color);
  text-align: center;
  letter-spacing: 0.5px;


`;