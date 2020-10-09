import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home/Home'
import './App.scss';
import ComicBooks from './ComicBooks/ComicBooks';
import ComicSummary from './ComicSummary/ComicSummary';
import md5 from 'md5'
import Nav from './Nav/Nav'

function App() {
  const [page, setPage] = useState(null);
  const [listOfComics, setListOfComics] = useState([]);

  const getAllComics = (comics) => {
// get all heroes
  //from id's get comics (ANOTHER API CALL)
      //make another call to get images description and etc.
  let ts = Date.now()
  let hash = md5(ts + process.env.REACT_APP_PRIVATE + process.env.REACT_APP_PUBLIC)
  let characterId = 1009610
      fetch(`https://gateway.marvel.com/v1/public/characters/${characterId}/comics?ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC}&hash=${hash}&limit=50`)
      .then(data => data.json())
      .then(data => 
          {
          setListOfComics(data.data.results)
          })
      console.log(page)
  };

  useEffect(() => {
    getAllComics();
}, []);
  //Now as for the state being used i tried to do the same thing that was done
  // done in the bitcoin lab I am not entirely sure what the page, and setPage
  // is supposed to do i thought it was tied in with the const handleclick to where 
  // the handeclick is tied into the link when being clicked it is pathed to the 
  // /ComicSummary/ page containing the necessary information of the specifc comic chosen

  function handleClick(Page) {
    setPage(Page);
  }

  return (
    <div className='pages'>
      
      <header>
      <h2>Spider-Man Comic Book Encyclopedia</h2>
      </header>

      <Nav />
      
      <main>
        <Switch>

        <Route exact path='/' >
          <Home />
        </Route>

        <Route path='/comicbooks'>
          <ComicBooks listOfComics={listOfComics}/>
        </Route>

        <Route
        path='/comicsummary/:comic'
          render={(routerProps) =>
          (<ComicSummary 
          handleClick={handleClick} {...routerProps}
          listOfComics={listOfComics}
          />) }
        />
        
        </Switch>
      </main>

      <footer>
        <img src='https://www.pngkit.com/png/full/2-25377_spider-man-logo-png-transparent-logo-spiderman.png' />
      </footer>
    </div>
  );
}

export default App;

//all in all my goal is to have the image and title of every comicbook render in the '/ComicBooks' path 
// and have the specific details shown in comic summary  for the chosen comic book in the /ComicSummary/ ath