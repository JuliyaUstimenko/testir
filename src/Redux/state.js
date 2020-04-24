import {rerenderEnteriTree} from '../render';

let state = {
    contentPage: {
      postsData:[
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "It is great!", likesCount: 20 },
        { id: 3, message: "Yoo!", likesCount: 29 }
      ]
    },
    dialogsPage: {
      dialogsData:[
        { id: 1, name: "Juliya" },
        { id: 2, name: "Katya" },
        { id: 3, name: "Tanya" },
        { id: 4, name: "Luda" }
      ],
      messagesData: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "Hello!" },
      { id: 3, message: "How are you!" },
      { id: 4, message: "yohoo!" }
    ]
} 
  
}

export let addPost = (postMessage) => {
  debugger
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  }
  state.contentPage.postsData.push(newPost);
  rerenderEnteriTree(state);
}
export default state;