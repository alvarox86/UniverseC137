import { Route, Routes } from 'react-router-dom'
import MyNavBar from './components/MyNavBar'
import "./App.css"
import HomePage from './pages/HomePage'
import CharacterList from './pages/CharacterList'
import CharacterDetails from './pages/CharacterDetails/CharacterDetails'

function App() {

  return (
    <>
      <MyNavBar/>

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/CharacterList' element={<CharacterList/>} />
        <Route path='/CharacterDetails/:characterId' element={<CharacterDetails/>} />
      </Routes>
    </>
  )
}

export default App
