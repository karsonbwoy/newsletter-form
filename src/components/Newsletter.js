import './Newsletter.css'
export default function Newsletter({ onClick, onChange, email, isValid }) {

    console.log(onChange);

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
                        <input className={isValid !== false ? '' : 'invalid'} type="text" id="email-input" placeholder="email@company.com" onChange={e => onChange(e.target.value)} value={email}></input>
                        <button disabled = {true && !isValid} onClick={e => onClick(e)}>Subscribe to monthly newsletter</button>
                    </form>
                </div>
            </div>
        </div>
    )
}