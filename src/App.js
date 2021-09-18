import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import { TopNavBar } from './util';

export class App extends React.Component{
    render(){
        return (
            <div className="App">
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/about" component={About}/>
                    <Route path="/activities" component={Activities}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </div>
        );
    }
}

export class About extends React.Component{
    render(){
        return (
            <div className="About">
                <TopNavBar/>
            </div>
        )
    }
}
export class Activities extends React.Component{
    render(){
        return (
            <div className="About">
                <TopNavBar/>
            </div>
        )
    }
}
export class Contact extends React.Component{
    render(){
        return (
            <div className="About">
                <TopNavBar/>
            </div>
        )
    }
}

export class Home extends React.Component{
    render(){
        return (
        <div className="Home">
            <TopNavBar/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
        )}
}

export default App;
