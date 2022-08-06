import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  height: fit-content;
  padding-inline: var(--padding-base);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

`;

export const Form = styled.form`

  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding-block: var(--padding-small);

`;




export const Input = styled.input`

  display: flex;
  padding: 10px 50px;
  border: none;
  border-radius: 5px;
  background-color: var(--bg-color);
  border: 1px solid var(--tertiary-color);
  color: #fff;
  font-size: 1.2rem;

`;