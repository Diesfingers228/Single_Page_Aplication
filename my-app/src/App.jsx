import React from 'react'
import './App.css'
import 'react-router-dom'
import Header from './MyComponents/Header'
import Main from './MyComponents/Main'
import News from './MyComponents/News'
import Sentence from './MyComponents/Sentence'
import Messages from './MyComponents/Messages'
import { Route, Routes } from 'react-router-dom'

export default function App() {

  return (
    <>
    <Header />

    <Routes>
      <Route exact path='/' element={<Main />}></Route>
      <Route exact path='/news' element={<News />}></Route>
      <Route exact path='/messages' element={<Messages />}></Route>
      <Route exact path='/sentence' element={<Sentence />}></Route>
    </Routes>
    </>
  )
}
