
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../components/menu';
import style from '../../../stylesheets/style.css';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class About extends React.Component {
  render(){
    return(
      <CSSTransitionGroup
        transitionName="load"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
      <div className={style["about-wrapper"]}>
        <Menu key="2"/>
        <div className={style['center-vertically']}>
          <div className={style['section-wrapper']}>
            <div className={style['about-picture']}>
              <img className={style.hillary} src="/images/hillaryC.jpg" />
            </div>

            <p className={style.desc}>
              <b>Hillary Diane Rodham Clinton</b> (/ˈhɪləri daɪˈæn ˈrɒdəm ˈklɪntən/; born October 26, 1947) is an American politician who was the 67th United States Secretary of State from 2009 to 2013, U.S. Senator from New York from 2001 to 2009, First Lady of the United States from 1993 to 2001 and the Democratic Party's nominee for President of the United States in the 2016 election.
            </p>
          </div>
          <div className={style['section-wrapper']}>
            <div className={style['about-picture']}>
              <img className={style.monica} src="/images/monicaL.jpg" />
            </div>
            <p className={style.desc}>
              <b>Monica Samille Lewinsky</b> (born July 23, 1973) is an American activist, television personality, fashion designer, and former White House intern.

              Lewinsky was made famous after President Bill Clinton admitted to having had what he called an "inappropriate relationship" while she worked at the White House in 1995 - 1996. The alleged affair and its repercussions (which included Clinton's impeachment) became known later as the Lewinsky scandal.
            </p>
          </div>
        </div>
      </div>
    </CSSTransitionGroup>
    )
  }
}

export default About;
