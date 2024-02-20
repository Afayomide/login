import { useState,useEffect } from "react";
import starsgif from "../assets/stars-fall.gif"
import logo from "../assets/starlog.png"
import "./login.css"

function Login () {
    const[formType, setFormType] = useState("Work")
    const [profLine, setProfLine] = useState("line")
    const [clientLine, setClientLine] = useState("none")
    const [scrollPosition, setScrollPosition] = useState(0);
function clienTypeChanger() {
       setFormType("") 
       setClientLine("line")
       setProfLine("off")
}
function profTypeChanger() {
    setFormType("Work")
    setProfLine("line")
    setClientLine("off")
}

    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return(
        <main className="login-container">
<div className="starsgif" style={{ backgroundPositionY: -scrollPosition * 0.5 + 'px' }}/>
{/* <img src={logo}  className="logo" alt="logo"/> */}
<section className="welcome">
   <h3>You Are A Star,</h3>
<h3>Welcome</h3> 
</section>

<form>
<div className="form-type">
<p className={`${clientLine}`} onClick={clienTypeChanger}>Client</p>
<p className={`${profLine}`} onClick={profTypeChanger}>Professional</p>
</div>

<div className="input-container">
<label for="email">{`${formType} Email:`}</label><br/>
       <input  placeholder={`Enter ${formType} Email`} type="email" name="email" />
 
</div>

<div className="input-container">
<label for="password">Password:</label><br/>
    <input placeholder="Enter Password" name="password" type="password"/>
</div>
<a className="link">forgot password?</a>
    <button> Login </button>
    <small>New User? <a className="link" href="/">Sign Up</a></small>
</form>
        </main>
    )
}

export default Login