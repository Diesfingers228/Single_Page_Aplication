import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <>
    <header className='header'>
        <nav>
            <ul className='list'>
                <li><Link to='/' color='white'>Личный кабинет</Link></li>
                <li><Link to='/news'>Новости</Link></li>
                <li><Link to='/messages'>Сообщение</Link></li>
                <li><Link to='/sentence'>Предложение</Link></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header