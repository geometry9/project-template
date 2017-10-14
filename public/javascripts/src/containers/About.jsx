
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../components/menu';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import style from '../../../stylesheets/style.css';

class About extends React.Component {
  render(){
    return(
      <ReactCSSTransitionGroup
        transitionName="load"
        transitionAppear={true}
        transitionEnterTimeout={500}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
      <div key="1" className={style["about-wrapper"]}>
        <Menu key="2"/>
        <div className={style['center-vertically']}>

          <div className={style['section-wrapper']}>
            <div className={style['about-picture']}>
              <img className={style.hillary} src="/images/mon_nic.jpg" />
            </div>
            <div className={style.desc}>
              <h1 className={style['title']}>About Us</h1>
              <p className={style['desc-paragraph']}>A tradition of design, beauty and creativity is breaking barriers in the art and fashion world as mother and daughter Monique and Nicole have teamed up to breathe new life into the industry. Monique, jewelry designer with more than 35 years experience has joined forces with Nicole, a young, vibrant Millennial who brings freshness and simplicity to this year’s latest collection. Both mother and daughter carry on the lineage of the much revered Santos, who’s traditional jewelry adorned past generations. Monique and Nicole have created an exciting generation brand of jewelry which expresses love, luxury and more importantly, purpose. The duo's creative energy can best be admired in this latest collection where art meets fashion with the use of organic texture and meticulously handcrafted designs. The Black Pullet, inspired by their passion for the rare and unusual mixed in with the magical lore of the hen that lays the golden eggs brings together their creative strengths. Monique inherited and uncovered a treasure trove of precious gems, like rubies, emeralds, diamonds and precious metals to create her collections, tribute to her father which recognizes all the gifts and wonders nature has bestowed up us all. Monique is a Fashion Institute of Technology graduate of Jewelry Design. Nicole is an alumni from Daytona State College Culinary arts school. Both have shared their wealth of knowledge teaching jewelry design in their San Juan studio in Puerto Rico. It is inside this studio each of the pieces where individually created. After hurricane Maria devastated the island they have relocated to Brooklyn, New York where they make and sell their pieces with a percentage of their profits going to fellow survivors of the devastating hurricane. The Purchase of every piece of Monique Michele's collection will help survivors recover from the devastation so wide spread, many have called conditions on the island "apocalyptic". By purchasing their jewelry you will not only enjoy a beautiful piece of a very meaningful collection, but it will also be a reminder that you helped hurricane victims recover. Customs orders and wholesale inquiries can be made by contacting directly via email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ReactCSSTransitionGroup>
    )
  }
}

export default About;
