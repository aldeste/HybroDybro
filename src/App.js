/* @flow */
import React, { Component } from 'react';
import Browse from './Browse/Browse';
import Display from './Display/Display';
import Login from './Login/Login';
import GradeUpper from './GradeUpper/';
import './App.css';
import { Router, Route, hashHistory } from 'react-router';

const data = {
  recipes: [
    { id: 1, name: 'Melitzanosalata', from: 1, ease: 'easy', rating: 4 },
    { id: 2, name: 'Parmigiana di melanzane', from: 2, ease: 'medium', rating: 5 },
    { id: 3, name: 'Imam Bayildi', from: 3, ease: 'easy', rating: 5 },
    { id: 4, name: 'Babaganoush', from: 4, ease: 'easy', rating: 5 },
    { id: 5, name: 'Harira', from: 5, ease: 'hard', rating: 5 },
    { id: 6, name: 'Zaalouk', from: 5, ease: 'easy', rating: 5 },
    { id: 7, name: 'Melitzanosalata', from: 1, ease: 'easy', rating: 4 },
    { id: 8, name: 'Parmigiana di melanzane', from: 2, ease: 'medium', rating: 5 },
    { id: 9, name: 'Imam Bayildi', from: 3, ease: 'easy', rating: 5 },
    { id: 10, name: 'Babaganoush', from: 4, ease: 'easy', rating: 5 },
    { id: 11, name: 'Harira', from: 5, ease: 'hard', rating: 5 },
    { id: 12, name: 'Zaalouk', from: 5, ease: 'easy', rating: 5 },
  ],
  countries: {
    '1': { country: 'Greece', iso2: 'gr' },
    '2': { country: 'Italy', iso2: 'it' },
    '3': { country: 'Turkey', iso2: 'tr' },
    '4': { country: 'Lebanon', iso2: 'lb' },
    '5': { country: 'Morocco', iso2: 'ma' },
  },
}

export const BrowseRecipes = () => (
  <Browse list={data}/>
);

export const DisplayRecipe = ({params}) => (
  <Display data={data} {...params}/>
);

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Login} />
        <Route path="recipes" component={BrowseRecipes} />
        <Route path="view/:display" component={DisplayRecipe} />
        <Route path="uppGrade" component={GradeUpper} />
      </Router>
    );
  }
}
export default App;
