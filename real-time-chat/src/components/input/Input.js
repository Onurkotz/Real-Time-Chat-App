import {useState} from 'react'
import style from "../style.module.css";

function Input() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className={style.textInput} value={message} onChange={(e) => setMessage(e.target.value)} />
      </form>
    </div>
  )
}

export default Input;