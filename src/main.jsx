import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from  './pages/Home'
import Detail from './pages/Detail'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path=":name" element ={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
