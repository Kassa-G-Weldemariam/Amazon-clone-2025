import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import CarouselEffect from './components/carousel/CarouselEffect'
import Category from './components/category/Category'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <CarouselEffect />
      <Category />
    </>
  );
}

export default App
