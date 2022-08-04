import { useState } from 'react'
import GlobalStyle from './globalStyle'
import Home from './pages/Home/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalStyle />
      <Home />
    </>
  )
}

export default App
