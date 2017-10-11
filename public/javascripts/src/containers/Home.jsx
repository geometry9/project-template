
import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Title from '../components/title';
import Social from '../components/social';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import style from '../../../stylesheets/style.css';

class Home extends React.Component {
  render(){
    return(
      <ReactCSSTransitionGroup
        transitionName="load"
        transitionAppear={true}
        transitionEnterTimeout={500}
        transitionAppearTimeout={500}
        transitionEnter={true}
        transitionLeave={false}
      >
      <div key="1" className={style["homepage-wrapper"]}>
        <Menu key="2"/>
        <div className={style['center-vertically']}>
          <Logo key="3" />
          <Social key="4" />
        </div>
      </div>
    </ReactCSSTransitionGroup>
    )
  }
}

export default Home;
