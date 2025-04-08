import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { Content } from './components/Content/Content'
import { Navbar } from './components/NavBar/Navbar'
import { BottomPlayer } from './components/BottomPlayer/BottomPlayer'
import { Home } from './components/Content/Home'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { SearchResult } from './components/Content/SearchResult'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { setUserLoginTrue } from './app/Slices/userCheckLogin'
import { Profile } from "./components/Profile/Profile"

function App() {

  const bottomPlayer = useSelector(state => state.bottomPlayerSlice.value)

  const checkLogin = useSelector(state => state.checkLogin.value)

  const dispatch = useDispatch();

  const checkToken = async () => {
    const resp = await axios.post('http://localhost:3000/checkToken', {}, { withCredentials: true });
    const status = resp.data.user

    console.log(status);

    if (status === "isUser") {
      dispatch(setUserLoginTrue(true))
    }
  }

  useEffect(() => {
    checkToken()
  }, [])

  const navigate = useNavigate();

  return (
    <>
      <div className='container'>
        <header className='box' id="header">
          <Navbar />
        </header>
        <div className='box' id="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<SearchResult />} />
            {/* <Route path='/profile'>
              {
                checkLogin ?
                  <Route path='/' element={<Profile />} />
                  :
                  navigate('/')
              }
            </Route> */}
            {
              checkLogin ?
                <Route path='/profile' element={<Profile />} />
                :
                <Route path='/profile' element={<Home />} />

            }
          </Routes>
        </div>
        {
          bottomPlayer ?
            <footer className='box' id="bottomplayer">
              <BottomPlayer />
            </footer>
            :
            <></>
        }
      </div>
    </>
  )
}

export default App
