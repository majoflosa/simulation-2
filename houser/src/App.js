import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './ducks/store';

import './App.css';

// import Dashboard from './components/Dashboard/Dashboard';
// import Wizard from './components/Wizard/Wizard';
import Header from './components/Header/Header';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <HashRouter>
          <div className="App">
            <Header /> 
            {routes}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
