import styled from 'styled-components';


export const ContentResources = styled.div`

  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 3fr;
`;


export const ContentResourcesItem = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-block: var(--padding-small);
  gap: 1.5rem;

  h5 {
    font-size: var(--font-size-h5);
    color: var(--text-color);
    line-height: 1.2;

  }
  a{
    font-size: var(--font-size-tiny);
    color: var(--text-color-opacity);
    line-height: 1.2;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  `;

  export const Subscribe = styled.div`

  div{
    display: flex;
    align-items:flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 2rem;
  }
  

  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: var(--padding-small);
  gap: 1.5rem;
  h5 {
    font-size: var(--font-size-h5);
    color: var(--text-color);
    line-height: 1.2;
  }

  p{
    font-size: var(--font-size-tiny);
    color: var(--text-color-opacity);
    line-height: 1.2;

  }

  input {
    display: inline;
    padding-inline: var(--padding-small);
    border: 1px solid var(--text-color-opacity);
    border-radius: var(--border-radius);
    font-size: var(--font-size-small);
    color: var(--text-color);
    line-height: 1.2;
    height: fit-content;
    background: transparent;

  }
  button {
    display: inline;
    padding-inline: var(--padding-small);
    border-radius: var(--border-radius);
    font-size: var(--font-size-small);
    color: var(--text-color);
    line-height: 1.2;
    height: fit-content;
    background: var(--tertiary-color);
    transform: translateX(-113px);

  }
  
  `;