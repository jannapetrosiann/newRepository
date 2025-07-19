import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return (
        <nav className={s.nav}>
            {!user && (
                <div className={s.item}><NavLink to='/register' className={({ isActive }) => isActive ? s.activeLink : s.item}>Register</NavLink></div>
            )}

            {user && (
                <>
                    <div className={s.item}><NavLink to='/hello' className={({ isActive }) => isActive ? s.activeLink : s.item} >Hello</NavLink></div>
                    <div className={s.item}><NavLink to='/list' className={({ isActive }) => isActive ? s.activeLink : s.item} >To Do List</NavLink></div>

                </>
            )}
        </nav>
    );
}

export default Navbar;