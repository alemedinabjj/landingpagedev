import styled from 'styled-components'


type propTypes = {
  paddingTop?: string,
  align: string;
}

export const Container = styled.main.attrs((props: propTypes) => ({paddingTop: props.paddingTop}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding-top: ${props => props.paddingTop === 'secondary' ? '0' : '5rem'};

`;

export const Content = styled.section`

  padding-top: 70px;
  display: flex;

`


export const Title = styled.h1.attrs((props: propTypes) => ({align: props.align}))`

  font-size: var(--font-size-h1);
  line-height: 64px;
  color: var(--tertiary-color);
  text-align: ${props => props.align};

`

export const Paragraph = styled.p.attrs((props: propTypes) => ({align: props.align}))`
  padding-top: 18px;
  font-size: var(--font-size-small);
  font-weight: 400;
  line-height: 28px;
  color: var(--text-color-opacity);
  padding-bottom: 43px;
  text-align: ${props => props.align};
`