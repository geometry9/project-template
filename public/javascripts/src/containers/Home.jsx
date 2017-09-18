
import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Title from '../components/title';
import Social from '../components/social';
import style from '../../../stylesheets/style.css';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Home extends React.Component {
  render(){
    return(
      <CSSTransitionGroup
        transitionName="load"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
      <div className={style["homepage-wrapper"]}>
        <Menu key="2"/>
        <div className={style['center-vertically']}>
          <Logo key="3" />
          <Social key="4" />
        </div>
      </div>
    </CSSTransitionGroup>
    )
  }
}

export default Home;
