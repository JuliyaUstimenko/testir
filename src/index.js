import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Redux/state';
//import {addPost} from './Redux/state';
import {rerenderEnteriTree} from './render';


//переносим в state.js
{/*let postsData = [
  { id: 1, message: "Hi, how are you?", likesCount: 15 },
  { id: 2, message: "It is great!", likesCount: 20 },
  { id: 3, message: "Yoo!", likesCount: 29 }
];

let dialogsData = [
  { id: 1, name: "Juliya" },
  { id: 2, name: "Katya" },
  { id: 3, name: "Tanya" },
  { id: 4, name: "Luda" }
];

let messagesData = [
  { id: 1, message: "Hi!" },
  { id: 2, message: "Hello!" },
  { id: 3, message: "How are you!" },
  { id: 4, message: "yohoo!" }
];
let friendsData = [
        {id: 1, name: "Masha"},
        {id: 2,name: "Victor"},
        {id: 3,name: "Nastya"},
        {id: 4,name: "Sergey"}
    ]

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);*/}

// переносим в render.js
{/*let rerenderEnteriTree = () =>{
ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}*/}
rerenderEnteriTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
