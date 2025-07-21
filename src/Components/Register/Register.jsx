import s from './Register.module.css'
import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
const Register = () => {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] =useState('');
const [username, setUsername] = useState('');
const [password, setPassword] = useState('')
const [error, setError] = useState('');



function submit(e){
    e.preventDefault()
    const isValid= checkUsername();
    if(!isValid) return;

    const users= localStorage.getItem('users')? JSON.parse(localStorage.getItem('users')): [];
    const newUser={
        firstName: firstName,
        lastName: lastName,
        username: username,
        password:password,
    }

    localStorage.setItem('users', JSON.stringify(users.concat(newUser)));

    setFirstName('');
    setLastName('');
    setUsername('');
    setPassword('');
}

function checkUsername(value){
const users= localStorage.getItem('users')? JSON.parse(localStorage.getItem('users')) : [];
const invalidUsername = users.find(user=> user.username === value);
if(invalidUsername){
    setError('The username is already taken!');
    return false;
}else{
    setError('');
    return true;
}
}

function handleUsername(e){
    setUsername(e.target.value);
    checkUsername(e.target.value);

}




    return <div className={s.reg}>
        
        <div className={s.register}>Register</div><br />
        <form className={s.form}>
            <span className={s.error}>{error}</span>
            <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='First name'></input>
            <input  value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder='Last name'></input>
            <input value ={username} onChange={handleUsername} type='text' placeholder='Username'></input>
            <input value={password}  onChange={(e) => setPassword(e.target.value)} placeholder='Password' type="password"></input><br />
            <button type="submit" onClick={submit}>Submit</button>
            <p>Already registered? <NavLink className={s.sign} to="/signIn">sign in</NavLink> </p>
        </form>
    </div>
}


export default Register;

