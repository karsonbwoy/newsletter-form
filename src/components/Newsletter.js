import { useState } from 'react'
import './Newsletter.css'
export default function Newsletter() {

    const [isValid, setIsValid] = useState()
    const [email, setEmail] = useState('')
    function handleChange(val) {
        console.log(val);
        setEmail(val);
        setIsValid(ValidateEmail(val));
        console.log(isValid);
    }

    function ValidateEmail(mail) 
    {
     if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail))
      {
        return (true)
      }
        return (false)
    }

    return (
        <div className="container">
            <div className="illustration"></div>
            <div className='newsletter-container'>
                <div className='newsletter'>
                    <h1>Stay Updated!</h1>
                    <p>Join 60,000+  product menagers receiving monthly update on:</p>
                    <ul>
                        <li>Product discovery and building what matters</li>
                        <li>Measuring to ensure updates are a success</li>
                        <li>And much more!</li>
                    </ul>
                </div>
                <div className='form'>
                    <form>
                        <label htmlFor="email-input">Email address</label>
                        <input className={isValid !== false ? '' : 'invalid'} type="text" id="email-input" placeholder="email@company.com" onChange={e => handleChange(e.target.value)} value={email}></input>
                        <button disabled = {true && !isValid} >Subscribe to monthly newsletter</button>
                    </form>
                </div>
            </div>
        </div>
    )
}