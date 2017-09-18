
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.css';
import Facebook from './facebook';
import Etsy from './etsy';
import Instagram from './instagram';

const Social = (props) => {
  return(
    <nav className={styles.social}>
      <ul>
        <li>
          <a target="_blank" href="https://www.facebook.com/moniquemichelejewelry/">
            <Facebook />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.instagram.com/moniquemichelejewelry/">
            <Instagram />
          </a>
        </li><li>
          <a href="/">
            <Etsy />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Social;
