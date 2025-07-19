
import s from './Hello.module.css'
import React, {useState} from "react"

const Hello = (props) => {
  const [text, setText] = useState('');

  function message(){
    alert("Hello, " + text);
    setText('');

  };

  return (
    <div className={s.intro}>
      <p className={s.item}>Welcome to our site !!!</p>
      <input onChange={(e)=> setText(e.target.value)} placeholder='Enter your name'  />
      <div><button onClick={message} >OK</button></div>
    </div>
  );
}

export default Hello;