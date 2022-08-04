import styled from 'styled-components'

export const Card = styled.div`

  padding-inline: 2rem;
  padding-block: .7rem;
  background: var(--tertiary-color);
  max-width: 250px;
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--text-color);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: 28px;
    text-align: center;
    text-transform: uppercase;
  }
  
  span {
    font-size: var(--font-size-base);
    font-weight: 200;
    line-height: 28px;
    color: var(--text-color-opacity);
    text-align: center;
    text-transform: uppercase;
    
  }

`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;