import { useState } from 'react';
import './App.css';
import Newsletter from "./components/Newsletter.js";
import Subscribed from "./components/Subscribed.js";

function App() {

  const [submited, setSubmited] = useState(false)
  const [isValid, setIsValid] = useState()
  const [email, setEmail] = useState('')
    function handleChange(val) {
        setEmail(val);
        setIsValid(ValidateEmail(val));
    }

    function ValidateEmail(mail) 
    {
     if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail))
      {
        return (true)
      }
        return (false)
    }

  function handleClick(e) {
    e.preventDefault();
    setSubmited(!submited)
    if (submited) {
      //send email to a server
    }
  }

  return (
    <div className="App">
      {submited ?
       <Subscribed onClick = {handleClick}  email = {email}/> 
       :
       <Newsletter onClick = {handleClick} onChange = {handleChange} email = {email} isValid = {isValid}/>
      }
    </div>
  );
}

export default App;
