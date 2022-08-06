import styled from 'styled-components';

export const Container = styled.main`

  display: flex;
  justify-content: center;
  align-items: center;
  


`;


export const Card = styled.div`

  width: 256px;
  height: 295px;
  padding: 24px;
  gap: 10px;
  border-radius: 8px;
  //background tertiary-color com opacidade
  background: var(--bg-color);
  border: 1px solid var(--tertiary-color);

  &.active {
    height: 359px;
    border: none;
    background-color: var(--tertiary-color);
    color: #fff;
    h6 {
      color: #fff;
    }
  }
  
`;


export const Value = styled.h6`

  font-size: var(--font-size-h6);
  line-height: 24px;
  color: var(--tertiary-color);
  text-align: start;
  font-weight: bold;

  span {
    font-size: 12px;
    color: var(--text-color-opacity);
    line-height: 16px;
  }

`;

export const Title = styled.h1`

  font-size: var(--font-size-h4);
  line-height: 64px;
  color: var(--text-black-color);
  font-weight: bold;
  text-align: start;

`;

export const Description = styled.p`

  font-size: var(--font-size-tiny);
  color: var(--text-color-opacity);
  text-align: start;


`;

export const Content = styled.div`

  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  
  div {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding-block: 10px;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: var(--text-color);
    font-size: var(--font-size-tiny);
    line-height: 24px;
    font-weight: bold;
  }

`;