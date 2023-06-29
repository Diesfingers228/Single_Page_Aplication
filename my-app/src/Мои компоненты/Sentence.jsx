import React from 'react'

function Sentence() {
  let style = {
    color: 'rgb(168, 168, 168)',
    width: '130vh',
    position: 'relative',
    left: '60vh',
    bottom: '50vh',
  }

  return (
    <h2 style={style}>Предложение — это желание производителя произвести и предложить к продаже на рынке свои товары по конкретным ценам из ряда возможных цен в течение определённого периода времени.</h2>
  )
}

export default Sentence