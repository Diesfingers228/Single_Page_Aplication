import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Header() {
    let style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        fontSize: '4vh',
        padding: '0',
        margin: '0',
    }

    let navStyle = {
         height: '60vh',
        }

  return (
    <>
    <header style={navStyle}>
        <nav>
            <ul style={style} className='list' type='none'>
                <li><Link to='/' color='white'>Личный кабинет</Link></li>
                <li><Link to='/news'>Новости</Link></li>
                <li><Link to='/messages'>Сообщения</Link></li>
                <li><Link to='/sentence'>Предложения</Link></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header