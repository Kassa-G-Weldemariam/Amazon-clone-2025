import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import CarouselEffect from './components/carousel/CarouselEffect'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <CarouselEffect />
    </>
  );
}

export default App
