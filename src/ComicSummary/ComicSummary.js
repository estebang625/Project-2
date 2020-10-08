import React from 'react'
import md5 from 'md5'
// import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function ComicSummary() {
    const [comicSummary, setComicSummary] = useState([]);

const getComicSummary = (comicSum) => {
    let ts = Date.now()
    let hash = md5(ts + process.env.REACT_APP_PRIVATE + process.env.REACT_APP_PUBLIC)
    let characterId = 1009610
        fetch(`http://gateway.marvel.com/v1/public/characters/${characterId}/comics?ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC}&hash=${hash}&limit=50`)
        .then(data => data.json())
        .then(data => 
            {console.log(data.data)
            setComicSummary(data.data.description)
            })
        
    };

    useEffect(() => {
        getComicSummary();
    }, []);

    // const comicSummary 

    let comicSum = ''
    if (comicSummary) {
        comicSum = comicSummary.map(comic => {
            return(
                <div>
                    <h1>{comic.description}</h1>
                </div>
            )
        })
    }

    return (
        <div className='comics'>
            {comicSum} 
        </div>
    )
    
}

export default ComicSummary