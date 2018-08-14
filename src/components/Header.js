import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => (

    <header>
        <ul>
            <li>
                <Link to='/'>Главная</Link>
            </li>
            <li>
                <Link to='/profile'>Профиль</Link>
            </li>
            <li>
                <Link to='/news'>Новости</Link>
            </li>
            <li>
                <Link to='/auth'>{localStorage.getItem('isAuth') === 'true' ? 'dasd' : 'werwerwr'}</Link>
            </li>
        </ul>
    </header>
);

export default Header;