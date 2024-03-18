
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Cook from './Components/Cook/Cook';
import Recipes from './Components/Recipes/Recipes'
import Section from './Components/Section/Section'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [cock, setCock] = useState([]);
  const [newcock, setNewCock] = useState([]);
  const handleCock = (recipe) => {
    const isExist = cock.find((item) => item.recipe_id === recipe.recipe_id);
    if (!isExist) {
        setCock([...cock, recipe]);
    } else {
        toast("This recipe is already in your list.");
    }
};
  
  const handlePrepare = (id) =>{
    const filteredCock = cock.filter((item) => item.recipe_id != id);
    const removedRecipe = cock.find((item) => item.recipe_id === id);
    setCock(filteredCock);
    setNewCock([...newcock, removedRecipe]);

   
    
    
  };




  return (
    <>
      <main className='max-w-7xl mx-auto'>
        <Header></Header>
        <Banner></Banner>
        <Section></Section>
        <div className='md:flex gap-4'>
          <Recipes handleCock={handleCock} cock={cock}></Recipes>
          <ToastContainer></ToastContainer>
          <Cook cock={cock} handlePrepare={handlePrepare} newcock={newcock}></Cook>
        </div>
      </main>
    </>
  )
}

export default App
