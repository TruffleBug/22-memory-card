import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Gamecards from './Gamecards'

export default function App() {


  return (
    <>
      <h1>Memory Game</h1>
      <h2>Click on each image just once to win the game!</h2>
      <section className='counter'>Score: </section>
      <section className='highScore'>High Score: </section>
      <section className='gameboard'>
        <Gamecards />
      </section>
    </>
  )
}