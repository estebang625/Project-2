import React, {useState} from 'react';
import { Link, Route, Switch } from "react-router-dom";
import Home from './Home/Home'
import './App.css';
import ComicBooks from './ComicBooks/ComicBooks';


function App() {
  const [page, setPage] = useState(null);

  const handleClick = (Page) => {
    setPage(Page);
  };

  return (
    <div>
      <nav className='navi'>
        <Link to='/'>
          Welcome Home!
        </Link>
        {/* <h3>The-Spectacular-Spidey-Encycopedia</h3> */}
        <Link to='/ComicBooks'>Spidey Comics!</Link>
      </nav>
      <main>
        <Switch>
          
        <Route exact path='/' component='/'>
          <Home />
        </Route>

        <Route path='/ComicBooks' component={ComicBooks}>
        </Route>

        </Switch>
      </main>
    </div>
  );
}

export default App;

