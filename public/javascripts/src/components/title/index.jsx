import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


const Title = () => {
  return(
    <CSSTransitionGroup
      transitionName="titles"
      transitionAppear={true}
      transitionAppearTimeout={3000}
      transitionEnter={true}
      transitionEnterTimeout={3000}
      transitionLeave={false}
    >
      <div className={style.title}>
          <h1>Gro</h1>
          <h3>Something something plants</h3>
      </div>
    </CSSTransitionGroup>
  )
}

export default Title;
