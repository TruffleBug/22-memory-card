import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Gamecards from './Gamecards'

export default function App() {
  const [shuffledData, setShuffledData] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [highScore, setHighScore] = useState(0);
  // const [data, setData] = useState([]);
  const params = {shuffledData, setShuffledData, clickedCards, setClickedCards};
  const [generatedPokemons, setGeneratedPokemons] = useState([]);

  const currScore = clickedCards.length;
  if(currScore > highScore) setHighScore(currScore);

  // generate array of 12 numbers
  let randomNums = [];
  for(let i = 0; i < 12; i++) {
    let randomNum = Math.floor(Math.random() * (151) + 1);
    if(!randomNums.includes(randomNum)) {
      randomNums.push(randomNum);
    };
  };

  console.log('randomNums', randomNums)

  useEffect(() => {
    const pokemonArray = [];
    randomNums.forEach(async (num) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`) 
      const json = await response.json();
      pokemonArray.push({
        id: num,
        name: json.forms[0].name,
        imgURL: json.sprites.front_default
      })
    })
    setGeneratedPokemons(pokemonArray)
  console.log('generatedPokemons', generatedPokemons)
  }, [])

  return (
    <>
      <h1>Memory Game</h1>
      <h2>Click on each image just once to win the game!</h2>
      <section className='counter'>Score: {currScore}</section>
      <section className='highScore'>High Score: {highScore}</section>
      {/* <section className='highScore'>genpoke: {generatedPokemons}</section> */}
      <section className='gameboard'>
        {/* <Gamecards params={params}/> */}
      </section>
    </>
  )
}