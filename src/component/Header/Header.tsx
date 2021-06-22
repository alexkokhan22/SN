import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Header.module.css';
import logo from '../../assets/images/logo.jpg'

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logOut: () => void
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <img src={logo}/>
            <div className={classes.login}>
                {props.isAuth ?
                    <div className={classes.logOut}>{props.login} -
                        <button
                            className={classes.buttonLogOut}
                            onClick={props.logOut}>
                            Log out
                        </button>
                    </div>
                    : <NavLink className={classes.loginNav} to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );

}

export default Header;