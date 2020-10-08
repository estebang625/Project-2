import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home/Home'
import './App.css';
import ComicBooks from './ComicBooks/ComicBooks';
import ComicSummary from './ComicSummary/ComicSummary'
import Nav from './Nav/Nav'

function App() {
  const [page, setPage] = useState(null);

  const handleClick = (Page) => {
    setPage(Page);
  };

  return (
    <div>
      <Nav />
      <main>
        <Switch>

        <Route exact path='/' component='/'>
          <Home />
        </Route>

        <Route path='/ComicBooks'>
          <ComicBooks />
        </Route>

        <Route
        path='/ComicSummary/'
          render={(routerProps) =>
          <ComicSummary 
          handleClick={handleClick} {...routerProps}
          page={page}
          /> }
        />
        
        </Switch>
      </main>
    </div>
  );
}

export default App;

