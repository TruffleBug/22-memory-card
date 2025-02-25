import { useState, useEffect } from "react";

export default function Gamecards({ randomNums, generatedPokemons, setGeneratedPokemons, clickedCards, setClickedCards, currScore, gameNum, setGameNum}) {

    console.log('generatedPokemons gamecards', generatedPokemons)
    const card = generatedPokemons.map(p => {
        return (
            <section className="gamecard" key={p.name} onClick={() => handleClick(p.name)}>
                <img src={p.imgURL} alt={p.name} />
                <h3 className="name">{String(p.name).charAt(0).toUpperCase()+String(p.name).slice(1)}</h3>
            </section>
        ) 
    });

    function handleClick(name) {
        if (!clickedCards.includes(name)) {
            clickedCards.push(name)
            setClickedCards([...clickedCards])
            console.log('handleClick generatedPokemons', generatedPokemons)
            setGeneratedPokemons(shufflePokemon(generatedPokemons))
        } else {
            handleGameOver()
        }
        console.log('clickedCards =', clickedCards)
    };
    
    function shufflePokemon(generatedPokemons) {
        const newArray = [...generatedPokemons];
        for(let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        };
        return newArray;
    };
    
    function handleGameOver() {
        console.log('game over')
        alert(`Game Over \nScore: ${currScore}`)
        setClickedCards([]);
        setGameNum(gameNum += 1)
    };

    return (
        <>
            {card}
        </>
    )
}