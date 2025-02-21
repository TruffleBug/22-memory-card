import { useState, useEffect } from "react";

const cardIds = [
    // {name: 'Dragon Fruit', url: ''},
    // {name: 'Fruit', url: ''},
    // {name: 'Fruit', url: ''},
    1,2,3,4,5,6,7,8,9,10,11,12
];

export default function Gamecards({ params }) {
    const shuffledData = params.shuffledData;
    const setShuffledData = params.setShuffledData;
    const clickedCards = params.clickedCards;
    const setClickedCards = params.setClickedCards;
    const data = params.data;

    // shuffles data array
    useEffect(() => {
        const shuffleArray = (array) => {
            const newArray = [...array];
            for(let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            };
            return newArray;
        };
        setShuffledData(shuffleArray(data));
    }, [setShuffledData, data]);
    
    // ----------------------------------------------------------
    console.log('shuffledData', shuffledData)

    const card = shuffledData.map(c => {
        return (
            <section className="gamecard" key={c.name} onClick={() => handleClick(c.name)}>
                <img src={c.url.sprites[front_default]} alt={c.name} />
                <h1>{c.name}</h1>
            </section>
        ) 
    });

    function handleClick(name) {
        if (!clickedCards.includes(name)) {
            clickedCards.push(name)
            setClickedCards([...clickedCards])
        } else {
            handleGameOver()
        }
        console.log('clickedCards =', clickedCards)
    };

    function handleGameOver() {
        console.log('game over')
        alert(`Game Over`)
        setClickedCards([]);
    };

    return (
        <>
            {card}
        </>


        // <div>
        //     {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        // </div>
    )
}