import { useState, useEffect } from 'react'
import './App.css'
import Gamecards from './Gamecards'
import { Rings } from 'react-loader-spinner';

export default function App() {
  const [randomNums, setRandomNums] = useState([]);
  const [generatedPokemons, setGeneratedPokemons] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [gameNum, setGamNum] = useState(1);

  const currScore = clickedCards.length;
  if(currScore > highScore) setHighScore(currScore);

  let isLoading = false;
  if(generatedPokemons.length !== 12) {
    isLoading = true;
  };

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
    const wrapperFunction = async () => {
      const pokemonArray = [];
      for (let i=0; i < randomNums.length; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNums[i]}`) 
        const json = await response.json();
        pokemonArray.push({
          id: randomNums[i],
          name: json.forms[0].name,
          imgURL: json.sprites.front_default
        })
      };
      setGeneratedPokemons(pokemonArray);
    };
    wrapperFunction();
  }, [randomNums])  

  if(isLoading === true) {
    return (
      <Rings
        visible={true}
        height="180"
        width="180"
        color="#ffd700"
        ariaLabel="rings-loading"
        wrapperClass="loadingIcon"
      />
    )
  } else {
      return (
        <>
        <h1 className='title'>Memory Game</h1>
        <h2 className='instructions'>Click on each image only once to win the game</h2>
        <section className='score current'>Current Score: {currScore}</section>
        <section className='score high'>High Score: {highScore}</section>
        <section className='gameboard'>
          <Gamecards 
            generatedPokemons={generatedPokemons} 
            setGeneratedPokemons={setGeneratedPokemons} 
            clickedCards={clickedCards} 
            setClickedCards={setClickedCards} 
            currScore={currScore} 
            gameNum={gameNum} 
            setGameNum={setGamNum} 
          />
        </section>
      </>
    )
  }
}