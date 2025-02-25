import { useState, useRef } from "react";
import NewGameButton from "./NewGameButton";

export default function Gamecards({ 
    generatedPokemons, 
    setGeneratedPokemons, 
    clickedCards, 
    setClickedCards, 
    currScore, 
    gameNum, 
    setGameNum,
    }) {

    const gameoverModal = useRef(null);
    const winModal = useRef(null);

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
            clickedCards.push(name);
            setClickedCards([...clickedCards]);
            if(clickedCards.length == 12) { 
                console.log('You win');
                winModal.current.showModal()
                return;
            };
            // console.log('handleClick generatedPokemons', generatedPokemons);
            setGeneratedPokemons(shufflePokemon(generatedPokemons));
        } else { 
            console.log('Game Over')
            gameoverModal.current.showModal()
        };
        console.log('clickedCards =', clickedCards);
    };
    
    function shufflePokemon(generatedPokemons) {
        const newArray = [...generatedPokemons];
        for(let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        };
        return newArray;
    };
    
    return (
        <>
            {card}
            <dialog className='win modal' ref={winModal}>
                <p>You Win!</p>
                <NewGameButton 
                    winModal={winModal}
                    gameoverModal={gameoverModal}
                    setClickedCards={setClickedCards}
                    gameNum={gameNum}
                    setGameNum={setGameNum}
                />
            </dialog>
            <dialog className='gameover modal' ref={gameoverModal}>
                <p>Game Over</p>
                <p>Score: {currScore}</p>
                <NewGameButton 
                    winModal={winModal}
                    gameoverModal={gameoverModal}
                    setClickedCards={setClickedCards}
                    gameNum={gameNum}
                    setGameNum={setGameNum}
                />
            </dialog>
        </>
    )
}