import React, { useState } from "react"
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateSurvey from "./Components/CreateSurvey"
import Published from "./Components/Published"
import Menu from "./Components/Menu"


function App() {
  const [squestion, setSquestion] = useState([]);
  return (
    <>
    <div className="col-md-10 offset-md-1 col-12 text-center">
    
    <Router>
    <Link to="/">
              <img className="col-md-6" src={logo} alt="Logo"/>
    </Link>
      <Switch>
            <Route path="/" component={Menu} exact/>
            <Route path="/create"  component={CreateSurvey} exact>
              <CreateSurvey s question={squestion}/>
            </Route>
            <Route path="/published" component={Published} exact/>
      </Switch>
    </Router>
    </div>
    </>
  );
}

export default App;
