import s from './SignIn.module.css'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'


const SignIn = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");
const navigate = useNavigate();

function checkUser(username, password){
    const users =  localStorage.getItem('users')? JSON.parse(localStorage.getItem('users')) : [];

    const founded = users.find(user=> user.username === username);
    if(!founded){
        setMessage("Invalid username!") ;
        return false;

    }else if(founded.password !== password){
        setMessage("Invalid password!");
        return false;

    }else {
        setMessage('');
        localStorage.setItem('currentUser', JSON.stringify(founded));
        return true;
    }

}

function signIn(){
    const isValid= checkUser(username, password);
    if(!isValid) return;
    setUsername('');
    setPassword('');
    navigate('/list');
    window.location.reload();
}
    
function handleUser(e){
    const newUsername = e.target.value;
    setUsername(newUsername);
    checkUser(newUsername, password);
}

function handlePassword(e){
    const newPassword= e.target.value;
    setPassword(newPassword);
    checkUser(username, newPassword);
}



    return <div className={s.signIn}>
        <p className={s.text}>Sign In</p>
        <span className={s.error}>{message}</span>
        <input  onChange={handleUser} type="text" placeholder="Username"  ></input>
        <input onChange={handlePassword}type="password" placeholder="Password" ></input><br />
        <button onClick={signIn}>Sign In</button><br />
    </div>
}

export default SignIn;
