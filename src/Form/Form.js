import React from 'react';
import { useState, useEffect } from 'react';
import md5 from 'md5'

function Form(props) {
    const [listOfHeroes, setListOfHeroes] = useState([]);
    
        const getAllHeroes = () => {
            let ts = Date.now()
            let hash = md5(ts + process.env.REACT_APP_PRIVATE + process.env.REACT_APP_PUBLIC)
            let name = 'Spider-Man'
                fetch(`http://gateway.marvel.com/v1/public/characters?name=${name}&apikey=${process.env.REACT_APP_PUBLIC}&hash=${hash}`)
                .then(data => data.json())
                .then(data => {
                    setListOfHeroes(data)
                    console.log(data)
                });
        };
    
        useEffect(() => {
            getAllHeroes();
        }, []);
    

    const handleSubmit = (event) => {
        event.preventdefault();
        props.handleSubmit(listOfHeroes)
        setListOfHeroes('')
    }

    const handleChange = (event) => {
        console.log('hc click')
        const listOfHeroes = event.target.name;
        setListOfHeroes(listOfHeroes)
    }
     
return (
    <form onSubmit={handleSubmit}>
        <input 
            placeholder='Enter Hero'
            id='listOfHeroes'
            type='text'
            value={listOfHeroes}
            onChange={handleChange}
        />
        <button>Submit</button>
        {/* {getAllComics} */}
    </form>
)
    
    }
    
    
export default Form