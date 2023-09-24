import "./Newsletter.css";

export default function Subscribed({ onClick }) {
    return(
        <div className="container">
          <div className="sussces-icon"></div>
          <h1>Thanks for subscribing!</h1>
          <p>A confirmation email has been sent to your mail. Please open it and click button inside to confirm your subscription.</p>
          <button onClick = {e=>onClick(e)}>Dismiss message</button>  
        </div>
    );
}