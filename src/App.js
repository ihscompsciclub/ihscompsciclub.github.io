import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Home } from './home'
import { About } from './about'
import { Activities } from './activities';
import { Contact } from './contact';
import { Faqs } from './faqs';

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/faqs" component={Faqs} />
                    <Route path="/about" component={About} />
                    <Route path="/activities" component={Activities} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        );
    }
}

export default App;