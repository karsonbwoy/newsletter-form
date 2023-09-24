import { useState } from 'react';
import './App.css';
import Newsletter from "./components/Newsletter.js";
import Subscribed from "./components/Subscribed.js";

function App() {

  const [submited, setSubmited] = useState(false)

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
       <Subscribed onClick={handleClick}/> 
       :
       <Newsletter onClick = {handleClick}/>
      }
    </div>
  );
}

export default App;
