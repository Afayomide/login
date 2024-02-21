import { useState,useEffect } from "react";
import starsgif from "../assets/stars-fall.gif"
import logo from "../assets/starlog.png"
import "./login.css"
import { BsEyeFill } from 'react-icons/bs';
import { BsEyeSlashFill } from 'react-icons/bs';

function Login () {
    const[formType, setFormType] = useState("Work")
    const [password, setPassword] = useState('');
    const [profLine, setProfLine] = useState("line")
    const [clientLine, setClientLine] = useState("none")
    const [scrollPosition, setScrollPosition] = useState(0);
    const [changePassword, setChangePassword] = useState(true);

    function handlePassword() {
        if(changePassword == true){
          setChangePassword(false)
        }
       if(changePassword == false) {
        setChangePassword(true)
       }
    }
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
<div className="pwd-input-icons">    
<input className="pwd-input-field" placeholder="Enter Password" name="password" type={changePassword ? "password" : "text"}/>
    <div className='pwd-icons' onClick={handlePassword}> {changePassword ? <BsEyeFill className='eye'/> : <BsEyeSlashFill className='eye'/>}</div>

</div>

</div>

<a className="link">forgot password?</a>
    <button> Login </button>
    <small>New User? <a className="link" href="/">Sign Up</a></small>
</form>
        </main>
    )
}

export default Login