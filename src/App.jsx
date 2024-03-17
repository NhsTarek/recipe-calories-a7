
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Cook from './Components/Cook/Cook'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'
import Section from './Components/Section/Section'


function App() {
  const [cock, setCock] = useState([]);
  const handleCock = recipe =>{
    const newCock = [...cock, recipe];
    setCock(newCock);
  }


  return (
    <>
      <main className='max-w-7xl mx-auto'>
        <Header></Header>
        <Banner></Banner>
        <Section></Section>
        <div className='md:flex gap-4'>
          <Recipes handleCock={handleCock}></Recipes>
          <Cook cock={cock}></Cook>
        </div>
      </main>
    </>
  )
}

export default App
