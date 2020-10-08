import React from 'react';
import { useState, useEffect } from 'react';
import md5 from 'md5'
import { Link } from "react-router-dom";
function HeroComic() {
    const [listOfComics, setListOfComics] = useState([]);

    const getAllComics = (comics) => {
// get all heroes
    //from id's get comics (ANOTHER API CALL)
        //make another call to get images description and etc.
    let ts = Date.now()
    let hash = md5(ts + process.env.REACT_APP_PRIVATE + process.env.REACT_APP_PUBLIC)
    let characterId = 1009610
        fetch(`http://gateway.marvel.com/v1/public/characters/${characterId}/comics?ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC}&hash=${hash}&limit=50`)
        .then(data => data.json())
        .then(data => 
            {console.log(data.data)
            setListOfComics(data.data.results)
            })
        
    };


    useEffect(() => {
        getAllComics();
    }, []);

    let comics = ''
    if (listOfComics[0]) {
        comics = listOfComics.map(comic => {
            return(
                <div>
                                {/* thumbnail is possibly the cover of the comic book */}
                    <Link to={'/ComicSummary/' + comic.title}> {comic.title} </Link>{" "}
                    {/* <h3>{comic.title}</h3> */}
                </div>
            )
        })
    }


return (
    <div className='comics'>
        {comics}
    </div>
)

}

export default HeroComic;
