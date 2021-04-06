import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Person1 from './img/friends/bonnie_dunbar.jpg';
import Person2 from './img/friends/dave_bowman.jpg';
import Person3 from './img/friends/ellen_ripley.jpg';


let personData = [
  {id: '1', name: 'Бонни Дунбар', photo: Person1},
  {id: '2', name: 'Дейв Боуман', photo: Person2},
  {id: '3', name: 'Эллен Рипли', photo: Person3}
]

let messageData = [
  {id: '1', message: 'Привет'},
  {id: '2', message: 'Как дела?'},
  {id: '3', message: 'Йоу'}
]


ReactDOM.render(
  <React.StrictMode>
    <App personData={personData} messageData={messageData} />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
