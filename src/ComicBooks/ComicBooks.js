import React from 'react';
import { Link } from "react-router-dom";
import './ComicBooks.scss'

function ComicBooks({listOfComics}) {


    

    let comics = ''
    if (listOfComics[0]) {
        comics = listOfComics.map((comic, index) => {
            return(
                <div key={index}>
                                {/* thumbnail is possibly the cover of the comic book */}
                    <Link to={`/comicsummary/${comic.id}`}> <h3>{comic.title}</h3> </Link>
                    
                </div>
            )
        })
    }
// HeroComic routes to the '/ComicBooks' path where the array of comic data (the data is show to be 
// called/used in getAllComics function) will be appearing 
// being the title of the comic and the cover image; the cover image when clicked will route to the 
// /ComicSummary/ path where only the summary of the specific comic clicked on will appear

return (
    <div className='comics'>
        {comics}
    </div>
)

}

export default ComicBooks;
