import React from 'react';
import { useState, useEffect } from 'react';
import md5 from 'md5'

function HeroComic() {
    const [listOfComics, setListOfComics] = useState([]);

    const getAllComics = () => {
        let ts = Date.now()
        let hash = md5(ts + process.env.REACT_APP_PRIVATE + process.env.REACT_APP_PUBLIC)
        let characterId = 1009610
            fetch(`http://gateway.marvel.com/v1/public/characters/${characterId}/comics?ts=${ts}apikey=${process.env.REACT_APP_PUBLIC}&hash=${hash}`)
            .then(data => data.json())
            .then(data => {
                setListOfComics(data)
                console.log(data)
            });
    };

    useEffect(() => {
        getAllComics();
    }, []);

    const handleSubmit = (event) => {
        const listOfComics = event.target.name
        setListOfComics(listOfComics)
    }
     
return (
    <div>
        {getAllComics}
        {/* <PokemonCard URL={selectedURL}/> */}
    </div>
)

}

export default HeroComic;
