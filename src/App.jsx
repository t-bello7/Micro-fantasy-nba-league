import './assets/styles/App.scss'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const App= () => {

  return (
    <main className="App">
      <Navbar />
      <Outlet/>
    </main>
  )
}

export default App
