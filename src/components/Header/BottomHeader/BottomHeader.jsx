import React from 'react';
import logo from '../../../assets/img/logo.png'
import styles from '../BottomHeader/BottomHeader.module.scss'
import Search from './Search/Search';

import { NavLink } from "react-router-dom";

const BottomHeader = () => {
  return (
    <div className={styles.main}>
        <div className={styles.image}>
            <img src={logo}/>
        </div>
        <div className={styles.menu}>
            <ul>
                <li>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li> <NavLink to='/about'>About</NavLink></li>
                <li> <NavLink to='/courses'>Courses</NavLink></li>
                <li> <NavLink to='/blog'>Blog</NavLink></li>
                <li> <NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
        <div className={styles.search}>
          <Search />
        </div>
    </div>
  )
}

export default BottomHeader;