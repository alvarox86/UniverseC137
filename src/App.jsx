import { Route, Routes } from 'react-router-dom'
import MyNavBar from './components/MyNavBar'
import "./App.css"
import HomePage from './pages/HomePage'
import CharacterList from './pages/CharacterList'
import CharacterDetails from './pages/CharacterDetails/CharacterDetails'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import VariantCard from './components/VariantCard/VariantCard'

function App() {

  return (
    <>
      <MyNavBar/>

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/CharacterList/' element={<CharacterList/>} />
        <Route path='/CharacterDetails/:characterId' element={<CharacterDetails/>} />
        {/* <Route path='/VariantDetails/:variantId' element={<VariantDetails/>} /> */}

        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </>
  )
}

export default App
