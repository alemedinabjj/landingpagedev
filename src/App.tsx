import { useState } from 'react'
import Footer from './global/Footer'
import GlobalStyle from './globalStyles/GlobalStyle'
import Clients from './pages/Home/Clients'
import Customer from './pages/Home/Customer'
import Home from './pages/Home/index'
import Services from './pages/Home/Services'
import NewsLetter from './pages/NewsLetter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalStyle />
      <Home />
      <Customer />
      <Services />
      <Clients />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default App
