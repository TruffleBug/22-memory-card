import { useState } from "react";
import GameoverModal from "./GameoverModal";
import WinModal from "./WinModal";

export default function Gamecards({ 
    generatedPokemons, 
    setGeneratedPokemons, 
    clickedCards, 
    setClickedCards, 
    currScore, 
    gameNum, 
    setGameNum,
    }) {

    const [showGameoverModal, setShowGameoverModal] = useState(false);
    const [showWinModal, setShowWinModal] = useState(false);


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
                setShowWinModal(true);
                return;
            };
            // console.log('handleClick generatedPokemons', generatedPokemons);
            setGeneratedPokemons(shufflePokemon(generatedPokemons));
        } else { 
            console.log('Game Over')
            setShowGameoverModal(true)
        }
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
            <WinModal
                showWinModal={showWinModal}
                setShowWinModal={setShowWinModal}
                setShowGameoverModal={setShowGameoverModal}
                currScore={currScore}
                setClickedCards={setClickedCards}
                gameNum={gameNum}
                setGameNum={setGameNum}
            />
            <GameoverModal 
                showGameoverModal={showGameoverModal} 
                setShowGameoverModal={setShowGameoverModal}
                currScore={currScore}
                setClickedCards={setClickedCards}
                gameNum={gameNum}
                setGameNum={setGameNum}
                setShowWinModal={setShowWinModal}
            />
        </>
    )
}