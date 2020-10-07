import React from 'react';
// import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import HeroComic from './Main/HeroComic';
import Form from './Form/Form';

function App() {
  return (
    <div>
      <Form />
      <HeroComic />
    </div>
  );
}

export default App;

