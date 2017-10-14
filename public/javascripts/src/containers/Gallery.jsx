import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../components/menu';
import Slider from 'react-slick';
import Arrow from '../components/arrow'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import style from '../../../stylesheets/style.css';

class Gallery extends React.Component {
  render(){
    var settings = {
      dots: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <Arrow key="5" direction="right" />,
    prevArrow: <Arrow key="6" direction="left" />,
    };
    return(
      <ReactCSSTransitionGroup
        transitionName="load"
        transitionAppear={true}
        transitionEnterTimeout={1000}
        transitionAppearTimeout={1000}
        transitionEnter={true}
        transitionLeave={false}
      >
      <div key="3"className={style['gallery-wrapper']}>
        <Menu key="1" />
        <div key="2" className={style.slider}>
          <Slider {...settings}>
            <div>
              <div key="5" className={style['slider-image-wrapper']}>
                <img className="square-image" src="/images/carousel/IMG_1141.JPG" />
              </div>
            </div>
            <div>
              <div key="6" className={style['slider-image-wrapper']}>
                <img src="/images/carousel/IMG_0973.JPG" />
              </div>
            </div>
            <div>
              <div className={style['slider-image-wrapper']}>
                <img src="/images/carousel/IMG_1184-1.JPG" />
              </div>
            </div>
            <div>
              <div className={style['slider-image-wrapper']}>
                <img src="/images/carousel/IMG_1189.JPG" />
              </div>
            </div>
            <div>
              <div key="4" className={style['slider-image-wrapper']}>
                <img src="/images/carousel/IMG_0843.JPG" />
              </div>
            </div>
            <div>
              <div className={style['slider-image-wrapper']}>
                <img src="/images/carousel/IMG_0853.JPG" />
              </div>
            </div>
            <div>
              <div className={style['slider-image-wrapper']}>
                <img src="/images/carousel/IMG_0958.JPG" />
              </div>
            </div>
            <div>
              <div className={style['slider-image-wrapper']}>
                <img src="/images/carousel/IMG_0974.JPG" />
              </div>
            </div>
            <div>
              <div className={style['slider-image-wrapper']}>
                <img src="/images/carousel/IMG_1178.JPG" />
              </div>
            </div>
            <div>
              <div className={style['slider-image-wrapper']}>
                <img src="/images/carousel/IMG_1179.JPG" />
              </div>
            </div>
            <div>
              <div className={style['slider-image-wrapper']}>
                <img src="/images/carousel/IMG_1182.JPG" />
              </div>
            </div>
            <div>
              <div className={style['slider-image-wrapper']}>
                <img src="/images/carousel/IMG_1183.JPG" />
              </div>
            </div>
            <div>
              <div className={style['slider-image-wrapper']}>
                <img src="/images/carousel/IMG_1187.JPG" />
              </div>
            </div>
            <div>
              <div className={style['slider-image-wrapper']}>
                <img src="/images/carousel/IMG_1394.JPG" />
              </div>
            </div>
            <div>
              <div className={style['slider-image-wrapper']}>
                <img src="/images/carousel/IMG_1395.JPG" />
              </div>
            </div>
            <div>
              <div className={style['slider-image-wrapper']}>
                <img src="/images/carousel/IMG_1396.JPG" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </ReactCSSTransitionGroup>
    )
  }
}

export default Gallery;
