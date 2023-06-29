import React from 'react'
import './App.css'
import 'react-router-dom'
import Header from './Мои компоненты/Header'
import Main from './Мои компоненты/Main'
import News from './Мои компоненты/News'
import Sentence from './Мои компоненты/Sentence'
import Messages from './Мои компоненты/Messages'
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
