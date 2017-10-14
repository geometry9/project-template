import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';
import MediaQuery from 'react-responsive';
import BurgerMenu from 'react-burger-menu';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Link } from 'react-router-dom';

const MenuSlider = BurgerMenu["slide"];
const items = [
          <li key="1" className="menu-item"><Link to="/">Home</Link></li>,
          <li key="2" className="menu-item"><Link to="/collections">Gallery</Link></li>,
          <li key="3" className="menu-item"><a href="#" className='shop-link'>Shop</a></li>,
          <li key="4" className="menu-item"><Link to="/about">About</Link></li>,
        ]
const mobileMenu = () => {
  <MenuSlider id="slide" pageWrapId="menu-wrapper" outerContainerId="outer-container" left>
    <ul>
      { items }
    </ul>
  </MenuSlider>
}

const Menu = () => {
  return(
    <div id="menu-wrapper" className={style['menu-wrapper']}>
      <MediaQuery maxDeviceWidth={1224}>
        <div id="outer-container">

        </div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={1224} values={{deviceWidth: 1600}}>
        <nav className={style.menu}>
          <ul>
            { items }
          </ul>
        </nav>
      </MediaQuery>
    </div>
  )
}

export default Menu;
