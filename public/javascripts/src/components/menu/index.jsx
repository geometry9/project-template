import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';
import MediaQuery from 'react-responsive';
import { stack as MenuB } from 'react-burger-menu';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Link } from 'react-router-dom';


var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#fff'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const Menu = () => {
  return(
    <div className={style['menu-wrapper']}>
      <MediaQuery maxDeviceWidth={1224}>
        <MenuB styles={styles}>
          <a href="/">HEYHEY</a>
          <a href="/">HEYHEY</a>
          <a href="/">HEYHEY</a>
        </MenuB>
      </MediaQuery>
      <MediaQuery minDeviceWidth={1224} values={{deviceWidth: 1600}}>
        <nav className={style.menu}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/collections">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </MediaQuery>
    </div>
  )
}

export default Menu;
