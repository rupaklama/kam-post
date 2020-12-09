import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Hot module replacement to load our code faster instead of full browser refresh 
// after making changes in our code. 
const rootElement = document.getElementById('root');

const render = () => {
  ReactDOM.render(<App />, rootElement);
}

// check to see if hot module is available
if (module.hot) {
  // first arg - pass in reference to where our app component is located
  // second arg - render function from above
  module.hot.accept('./App', () => {
    setTimeout(render)
  })
}

// calling our func
render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
