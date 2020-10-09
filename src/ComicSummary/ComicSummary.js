import React, { useEffect } from 'react'
import './ComicSummary.scss'

function ComicSummary(props) {

    let comic = props.listOfComics.filter((comic, index) => {
        return comic.id == props.match.params.comic 
    })
    

// useEffect(() => { 
// }, [])

console.log(comic)

if (comic[0]) {
    return(
    <>
        <img src={comic[0].thumbnail} />
        <h1>{comic[0].title}</h1>
        <h3>{comic[0].description}</h3>
        <h2>$ {comic[0].prices[0].price}</h2>
        <h3>Creators:</h3>
        <p>{comic[0].creators.items[0].name}</p>
        <p>{comic[0].creators.items[1].name}</p>
        <p>{comic[0].creators.items[2].name}</p>
    </>
    )
}

    return (
        <div>
            {comic}
        </div>
    )
}

export default ComicSummary