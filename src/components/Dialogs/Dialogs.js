import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AddMessages from "./AddMessages/AddMessages";

//import { NavLink } from "react-router-dom";

const Dialogs = props => {
  //массивы выносим в index.js
  {/*let dialogsData = [
    { id: 1, name: "Juliya" },
    { id: 2, name: "Katya" },
    { id: 3, name: "Tanya" },
    { id: 4, name: "Luda" }
  ];*/}
  {
    /*создаем новый массив*/
  }
  let dialogsElements = props.state.dialogsData.map(dialog => (
    <Dialog name={dialog.name} id={dialog.id} />
  ));

  {/*let messagesData = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "Hello!" },
    { id: 3, message: "How are you!" },
    { id: 4, message: "yohoo!" }
  ];*/}

  let messagesElements = props.state.messagesData.map(message => (
    <Message message={message.message} />
  ));

  let newMessageElement = React.cteateRef;

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text)
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <img src="https://img0.liveinternet.ru/images/attach/c/5/85/178/85178162_avatarka.jpg" width="50px"/>
        {/*<div className={s.dialog + ' ' + s.active}>
        <NavLink to='/dialogs/1'>Juliya</NavLink>
    </div> заменяем на */}

        {/*<Dialog name="Juliya" id='1'/>*/}

        {/*<Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
            <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
            <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
<Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>*/}

        {dialogsElements}
        
      </div>
      <div className={s.messages}>
        {messagesElements}
        {/*<Message message={messagesData[0].message}/>
             <Message message={messagesData[1].message}/>
<Message message={messagesData[2].message}/>*/}
      </div>
      <AddMessages />
    </div>
  );
};

export default Dialogs;
