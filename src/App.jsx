import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Gamecards from './Gamecards'

export default function App() {
  const [shuffledData, setShuffledData] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const params = {shuffledData, setShuffledData, clickedCards, setClickedCards};
  const [highScore, setHighScore] = useState(0);

  const currScore = clickedCards.length;
  if(currScore > highScore) setHighScore(currScore);

  return (
    <>
      <h1>Memory Game</h1>
      <h2>Click on each image just once to win the game!</h2>
      <section className='counter'>Score: {currScore}</section>
      <section className='highScore'>High Score: {highScore}</section>
      <section className='gameboard'>
        <Gamecards params={params}/>
      </section>
    </>
  )
}