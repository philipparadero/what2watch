import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import TopRated from './components/pages/TopRated'
import Reviews from './components/pages/Reviews'
import Upcoming from './components/pages/Upcoming'
import MyPicks from './components/pages/MyPicks';
import SearchResult from './components/pages/SearchResult';
import React, {useState,useEffect}from 'react'


const App = () => {

  const [searchTerm, setSearchTerm] = useState('')

  const onFormSubmit = (term) => {
    setSearchTerm(term)
  
  }
  console.log(searchTerm)
  return (
    <>
      <Router>
        <Navbar onFormSubmit={onFormSubmit}/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/toprated'  component={TopRated}/>
          <Route path='/upcoming'  component={Upcoming}/>
          <Route path='/reviews'  component={Reviews}/>
          <Route path='/mypicks'  component={MyPicks}/>
          <Route path='/searchresults'  component={SearchResult} term={searchTerm}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
