import React from 'react';
import cls from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={cls.friend}>
        <div>
           <img src="https://lh3.googleusercontent.com/proxy/H653ePZdfaVzOvPPQ9bNOjBpuSTzav_BNZjP6wcpJFZZEZTxeSVrJfJGwUxCcJMPuDFrS0rlyv9tmuaIAGCwdUkKnrcSK0s7RdpBDKj55XPTFo5xQwHrSBGz" width="20px"/>
           <a>{props.name}</a>
           </div>
       {/*<div>
       <img src="https://lh3.googleusercontent.com/proxy/H653ePZdfaVzOvPPQ9bNOjBpuSTzav_BNZjP6wcpJFZZEZTxeSVrJfJGwUxCcJMPuDFrS0rlyv9tmuaIAGCwdUkKnrcSK0s7RdpBDKj55XPTFo5xQwHrSBGz" width="20px"/>
           <a>Victor</a>
           </div>
       <div>
       <img src="https://lh3.googleusercontent.com/proxy/H653ePZdfaVzOvPPQ9bNOjBpuSTzav_BNZjP6wcpJFZZEZTxeSVrJfJGwUxCcJMPuDFrS0rlyv9tmuaIAGCwdUkKnrcSK0s7RdpBDKj55XPTFo5xQwHrSBGz" width="20px"/>
       <a>Nastya</a>
       </div>
           <div>
           <img src="https://lh3.googleusercontent.com/proxy/H653ePZdfaVzOvPPQ9bNOjBpuSTzav_BNZjP6wcpJFZZEZTxeSVrJfJGwUxCcJMPuDFrS0rlyv9tmuaIAGCwdUkKnrcSK0s7RdpBDKj55XPTFo5xQwHrSBGz" width="20px"/>
               <a>Sergey</a>
           </div>*/}

</div>
    )
}

export default Friend;