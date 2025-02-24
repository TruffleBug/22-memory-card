import { useState, useEffect } from 'react'
import './App.css'
import Gamecards from './Gamecards'

export default function App() {
  const [randomNums, setRandomNums] = useState([]);
  const [generatedPokemons, setGeneratedPokemons] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [gameNum, setGamNum] = useState(1);

  const currScore = clickedCards.length;
  if(currScore > highScore) setHighScore(currScore);

  // generate array of 12 numbers
  // let randomNums = [];
  // for(let i = 0; i < 12; i++) {
  //   let randomNum = Math.floor(Math.random() * (151) + 1);
  //   if(!randomNums.includes(randomNum)) {
  //     randomNums.push(randomNum);
  //   };
  // };
  // setRandomNums(randomNums)

  useEffect(() => {
    let newNums = [];
    for(let i = 0; i < 20; i++) {
      let randomNum = Math.floor(Math.random() * (151) + 1);
      if(!newNums.includes(randomNum)) {
        newNums.push(randomNum);
      };
      if(newNums.length == 12) break
    };
    setRandomNums(newNums)
  }, [gameNum])

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
    console.log('generatedPokes', generatedPokemons)
  }, [randomNums])

  return (
    <>
      <h1 className='title'>Memory Game</h1>
      <h2 className='instructions'>Click on each image only once to win the game</h2>
      <section className='score current'>Current Score: {currScore}</section>
      <section className='score high'>High Score: {highScore}</section>
      <section className='gameboard'>
        <Gamecards randomNums={randomNums} generatedPokemons={generatedPokemons} setGeneratedPokemons={setGeneratedPokemons} clickedCards={clickedCards} setClickedCards={setClickedCards} currScore={currScore} gameNum={gameNum} setGameNum={setGamNum} />
      </section>
    </>
  )
}