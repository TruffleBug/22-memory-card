import { useState, useEffect } from "react";

const cardIds = [
    // {name: 'Dragon Fruit', url: ''},
    // {name: 'Fruit', url: ''},
    // {name: 'Fruit', url: ''},
    1,2,3,4,5,6,7,8,9,10,11,12
];

export default function Gamecards() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https:api/fruit/all')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);




    // const card = cardIds.map(c =>
    //     <section className="gamecard" key={c}>
    //         <section>{c}</section>
    //         <section>text</section>
    //     </section>
    // )

    return (
        // <>{card}</>
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    )
}