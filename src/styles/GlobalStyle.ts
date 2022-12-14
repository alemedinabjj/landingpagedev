import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

// definir cor do svg

body {
  background: var(--body-color);
}

 * {
  font-size: 16px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  list-style: none;
  text-decoration: none;
 }

  :root {
    --body-color: #0d191e;
    --bg-color: #0d192b;
    --primary-color: #09c184;
    --secondary-color: #07f9a2;
    --secondary-bg-color: #0c5149;
    --tertiary-color: #0a8967;
    --text-color: #fff;
    --black-text-color: #000;
    //texto opacity
    --text-color-opacity: rgba(255, 255, 255, 0.6);

    
    --font-size-base: 1.2rem;
    --font-size-h1: 2.9rem;
    --font-size-h2: 2.2rem;
    --font-size-h3: 2rem;
    --font-size-h4: 1.8rem;
    --font-size-h5: 1.6rem;
    --font-size-h6: 1.4rem;
    --font-size-small: 1.2rem;
    --font-size-tiny: 1rem;
    --font-size-large: 2.4rem;


    //paddings 

    --padding-base: 10rem;
    --padding-small: 1.5rem;
    --padding-top: 1rem;

    //radius

    --border-radius: 0.5rem;
  }

  button, input, textarea {
    cursor: pointer;
    outline: none;
    border: none;
  }



`

type propTypes ={
  background?: string;
  
}

export const ContainerGlobal = styled.div.attrs((props: propTypes) => ({background: props.background}))`

  width: 100%;  
  max-width: 2250px;
  margin: 0 auto;
  color: ${props => props.color};
  background: ${props => props.background === 'secondary' ? 'var(--bg-color)' : 'var(--body-color)'};
  height: fit-content;
  padding-inline: 10rem;
  padding-block: 70px;

`

export const Wrapper = styled.div`
  display: flex;
  
  align-items: center;
  justify-content: space-between;

`


