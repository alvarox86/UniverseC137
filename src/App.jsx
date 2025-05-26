import { Route, Routes } from 'react-router-dom'
import MyNavBar from './components/MyNavBar'
import "./App.css"
import HomePage from './pages/HomePage'
import CharacterList from './pages/CharacterList'


function App() {

  return (
    <>
      <MyNavBar/>

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/CharacterList' element={<CharacterList/>} />
      </Routes>
    </>
  )
}

export default App
