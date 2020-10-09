import React, { useEffect } from 'react'
import './ComicSummary.scss'

function ComicSummary(props) {

    let comic = props.listOfComics.filter((comic, index) => {
        return comic.id == props.match.params.comic 
    })
    

// useEffect(() => { 
// }, [])

console.log(comic)

// this is where i pull the data needed for the /ComicSummary/ path 
// that being said it should contain the image, description, creators and pricing (if available)
// for the chosen comic

    return (
        <div>
            <h1>
            {/* {comic.title} */}
            </h1>
        </div>
    )
}

export default ComicSummary