import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let  dialogData = [
    {id: 1, name: 'Egor'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Maks'},
];

let  messageData = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Let\'s go to the circus'},
];

let postsData = [
    {id: 1, message: 'Hi, how are you?', likeCount : 20},
    {id: 2, message: 'It\'s my first post',likeCount : 11},
    {id: 3, message: 'I finished my first task',likeCount : 5},
];

ReactDOM.render(
  <React.StrictMode>
    <App
        dialogData = {dialogData}
        messageData = {messageData}
        postsData = {postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
