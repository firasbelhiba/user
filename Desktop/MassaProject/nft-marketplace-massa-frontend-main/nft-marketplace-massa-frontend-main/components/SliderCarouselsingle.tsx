import React, { Component, ReactNode } from "react";
import Slider, { Settings } from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface CustomSlideProps {
  index: number;
  className: string;
  children: ReactNode; 
}

class CustomSlide extends Component<CustomSlideProps> {
  render() {
    const { index, className, children } = this.props;
    return (
      <div className={className}>{children}</div> 
    );
  }
}

export default class Responsive extends Component {
  render() {
    var settings: Settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      adaptiveHeight: false, // Corrected type to boolean
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };

    return (
        <div className='nft-big'>
          <Slider {...settings}>
            <CustomSlide className='itm' index={1}>
              <div className="nft_pic">                            
                  <span>
                      <span className="nft_pic_info">
                          <span className="nft_pic_title">live Arts</span>
                          <span className="nft_pic_by">Nicholas Daniels</span>
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/carousel/cr-6.jpg" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={2}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                          <span className="nft_pic_title">Red Ocean</span>
                          <span className="nft_pic_by">Monica Lucas</span>
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/carousel/crs-4.jpg" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={3}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                          <span className="nft_pic_title">Hot Lava</span>
                          <span className="nft_pic_by">Nicholas Daniels</span>
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/carousel/crs-3.jpg" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={4}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                          <span className="nft_pic_title">Loop Donut</span>
                          <span className="nft_pic_by">Lori Hart</span>
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/carousel/crs-5.jpg" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={5}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                          <span className="nft_pic_title">I Believe I Can Fly</span>
                          <span className="nft_pic_by">Fred Ryan</span>
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/items/anim-8.webp" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

          </Slider>
        </div>
    );
  }
}
