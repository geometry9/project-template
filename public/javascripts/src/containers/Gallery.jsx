import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../components/menu';
import Slider from 'react-slick';
import Arrow from '../components/arrow'
import NavigateNext from 'react-icons/lib/md/navigate-next';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import style from '../../../stylesheets/style.css';

class Gallery extends React.Component {
  render(){
    var settings = {
      dots: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <Arrow direction="right" />,
      prevArrow: <Arrow direction="left" />,
    };
    return(
      <ReactCSSTransitionGroup
        transitionName="load"
        transitionAppear={true}
        transitionEnterTimeout={500}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
      <div key="1"className={style['homepage-wrapper']}>
        <Menu key="2" />
        <div key="3" className={style.slider}>
          <Slider {...settings}>
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
                <img src="/images/carousel/IMG_0981.JPG" />
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
                <img src="/images/carousel/IMG_1184.JPG" />
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
