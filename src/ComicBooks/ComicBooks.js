import React from 'react';
import { Link } from "react-router-dom";
import './ComicBooks.scss'

function ComicBooks({listOfComics}) {

    let comics = ''
    if (listOfComics[0]) {
        comics = listOfComics.map((comic, index) => {
            return(
                <div key={index}>
                    <Link to={`/comicsummary/${comic.id}`}> <h3>{comic.title}</h3> </Link>
                </div>
            )
        })
    }

return (
    <h3 className='comics'>
        {comics}
    </h3>
)

}

export default ComicBooks;
