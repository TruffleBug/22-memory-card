import { useState, useEffect } from "react";

const cardIds = [
    // {name: 'Dragon Fruit', url: ''},
    // {name: 'Fruit', url: ''},
    // {name: 'Fruit', url: ''},
    1,2,3,4,5,6,7,8,9,10,11,12
];

export default function Gamecards({ params }) {
    if (!params) console.log('test')
    const shuffledData = params.shuffledData;
    const setShuffledData = params.setShuffledData;
    const clickedCards = params.clickedCards;
    const setClickedCards = params.setClickedCards;
    const [data, setData] = useState([]);
    

    // shuffles cardIds array
    useEffect(() => {
        const shuffleArray = (array) => {
            const newArray = [...array];
            for(let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        };
        setShuffledData(shuffleArray(cardIds));
    }, [clickedCards, setShuffledData])

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/12')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));

        console.log('data' , data.message)
    }, []);

    const card = shuffledData.map(c =>
        <section className="gamecard" key={c} onClick={() => handleClick(c)}>
            <section><h1>{c}</h1></section>
            <section>text</section>
            <img src={data.message[0]}/>
        </section>
    )

    function handleClick(c) {
        if (!clickedCards.includes(c)) {
            clickedCards.push(c)
            setClickedCards([...clickedCards])
        } else {
            handleGameOver()
        }
        console.log('clickedCards =', clickedCards)
    }

    function handleGameOver() {
        console.log('game over')
        alert(`Game Over`)
        setClickedCards([]);
    }

    return (
        <>
            {card}
        </>


        // <div>
        //     {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        // </div>
    )
}