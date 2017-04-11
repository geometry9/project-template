
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../components/Menu';
import Slider from 'react-slick';

import NavigateNext from 'react-icons/lib/md/navigate-next';


import style from '../../../stylesheets/style.css';

class Gallery extends React.Component {
  render(){
    var settings = {
      dots: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <i className="ion-chevron-right" />,
      prevArrow: <i className="ion-chevron-right" />,
    };
    return(
      <div className={style['homepage-wrapper']}>
        <Menu />
        <div className={style.slider}>
          <Slider {...settings}>
            <div><img src="http://placehold.it/1200x800" /></div>
            <div><img src="http://placehold.it/1200x800" /></div>
            <div><img src="http://placehold.it/1200x800" /></div>
            <div><img src="http://placehold.it/1200x800" /></div>
            <div><img src="http://placehold.it/1200x800" /></div>
            <div><img src="http://placehold.it/1200x800" /></div>
          </Slider>
        </div>
      </div>
    )
  }
}

export default Gallery;
