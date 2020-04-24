import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
    {/*выносим в index.js*/}
    let friendsData = [
        {id: 1, name: "Masha"},
        {id: 2,name: "Victor"},
        {id: 3,name: "Nastya"},
        {id: 4,name: "Sergey"}
    ]
   let friendsElement = friendsData.map (friend => ( <Friend name={friend.name} id={friend.id}/>))
    return (
        <div className={s.blockFrients}>
        <h2>FRIENDS</h2>
        <div className={s.friends}>
       {/*<div>
           <img src="https://lh3.googleusercontent.com/proxy/H653ePZdfaVzOvPPQ9bNOjBpuSTzav_BNZjP6wcpJFZZEZTxeSVrJfJGwUxCcJMPuDFrS0rlyv9tmuaIAGCwdUkKnrcSK0s7RdpBDKj55XPTFo5xQwHrSBGz" width="20px"/>
           <a>Masha</a>
           </div>
       <div>
           <a>Victor</a>
           </div>
       <div>Nastya</div>
           <div>Sergey</div>*/}

           {/*<Friend name="Masha"/>*/}
           {friendsElement}

</div>
    </div>
    )
}

export default Friends;