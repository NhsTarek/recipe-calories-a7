
import './App.css'
import Banner from './Components/Banner/Banner'
import Cook from './Components/Cook/Cook'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'
import Section from './Components/Section/Section'

function App() {


  return (
    <>
      <main className='max-w-7xl mx-auto'>
        <Header></Header>
        <Banner></Banner>
        <Section></Section>
        <div className='md:flex'>
          <Recipes></Recipes>
          <Cook></Cook>
        </div>
      </main>
    </>
  )
}

export default App
