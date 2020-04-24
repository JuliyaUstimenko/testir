import React from 'react';
import s from './AddMessages.module.css';

const AddMessages = () => {
    let newMessageElement = React.createRef();

    let addMessage = () => {
      let text = newMessageElement.current.value;
      alert(text)
    }
    return(
        <div className={s.messages}>
<div>
    <textarea ref={newMessageElement}></textarea>
  </div>
  <div>
    <button onClick={addMessage}>Send</button>
  </div>
  </div>
    )
}

export default AddMessages;