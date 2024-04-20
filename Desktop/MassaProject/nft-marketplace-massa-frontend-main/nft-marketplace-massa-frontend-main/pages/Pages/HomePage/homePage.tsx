import React, { ReactNode } from 'react';
import SliderCarousel from '../../../components/SliderCarouselsingle';
import FeatureBox from '../../../components/FeatureBox';
import CarouselCollection from '../../../components/CarouselCollection';
import ColumnNew from '../../../components/ColumnNew';
import AuthorList from '../../../components/authorList';
import Footer from '../../../components/footer';
import { createGlobalStyle } from 'styled-components';
import Reveal from 'react-awesome-reveal';
import { keyframes, Keyframes } from "@emotion/react";
import { RouteComponentProps } from '@gatsbyjs/reach-router';
import Particle from '../../../components/particle';
import SliderMainParticle from '../../../components/SliderMainParticle';


const GlobalStyles = createGlobalStyle`
header#myHeader .logo .d-block{
  display: none !important;
}
header#myHeader .logo .d-none{
  display: block !important;
}
.navbar .mainside a{
  background: #5b3bfb;
  &:hover{
    box-shadow: 2px 2px 20px 0px #5b3bfb;
  }
}
.item-dropdown{
  .dropdown{
    a{
      &:hover{
        background: #5b3bfb;
      }
    }
  }
}
.btn-main{
  background: #5b3bfb;
  &:hover{
    box-shadow: 2px 2px 20px 0px #5b3bfb;
  }
}
p.lead{
  color: #a2a2a2;
}
.navbar .navbar-item .lines{
  border-bottom: 2px solid #5b3bfb;
}
.jumbotron.no-bg{
  height: 100vh;
  overflow: hidden;
  background-repeat: repeat;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
}
#tsparticles{
  top: 0;
}
.text-uppercase.color{
  color: #5b3bfb;
}
.de_count h3 {
  font-size: 36px;
  margin-bottom: 0px;
}
.de_count h5{
  font-size: 14px;
  font-weight: 500;
}
h2 {
  font-size: 30px;
}
.box-url{
  text-align: center;
  h4{
    font-size: 16px;
  }
}
.de_countdown{
  border: solid 2px #5b3bfb;
}
.author_list_pp, .author_list_pp i, 
.nft_coll_pp i, .feature-box.style-3 i, 
footer.footer-light #form_subscribe #btn-subscribe i, 
#scroll-to-top div{
  background: #5b3bfb;
}
footer.footer-light .subfooter .social-icons span i{
  background: #403f83;
}
.author_list_pp:hover img{
  box-shadow: 0px 0px 0px 2px #5b3bfb;
}
.nft__item_action span{
  color: #5b3bfb;
}
.feature-box.style-3 i.wm{
  color: rgba(131,100,226, .1);
}
@media only screen and (max-width: 1199px) {
  .navbar{
    
  }
  .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
    background: #fff;
  }
  .item-dropdown .dropdown a{
    color: #fff !important;
  }
}
`;


interface RevealProps {
    children?: ReactNode;
    className?: string;
    keyframes: Keyframes;
    delay?: number;
    duration?: number;
    triggerOnce?: boolean;
  }
  
  const RevealWrapper: React.FC<RevealProps> = ({ children, ...props }) => (
    <div {...props}>{children}</div>
  );

const HomePage: React.FC <RouteComponentProps> = ({ path })  =>{

  return(
  <div>
  <GlobalStyles />
    <div style={{ backgroundColor:'#282c34'}}>
       <section className="jumbotron no-bg"  >
       <Particle/>
       <SliderMainParticle/>
       
      </section>
    
   

    <section className='container' >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2 className='style-2'>New Items</h2>
          </div>
        </div>
        <ColumnNew/>
      </div>
    </section>

    <section className='container no-top'>
      <div className='row'>
        <div className='col-lg-12'>
          <h2 className='style-2'>Hot Collections</h2>
        </div>
        <div className='container no-top'>
          <div className='row'>
            <div className='col-lg-12 px-0'>
              <CarouselCollection/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='container no-top'>
      <div className='row'>
        <div className='col-lg-12'>
          <h2 className='style-2'>Top Seller</h2>
        </div>
        <div className='col-lg-12'>
          <AuthorList/>
        </div>
      </div>
    </section>

    <section className='container no-top'>
      <div className='row'>
        <div className='col-lg-12'>
          <h2 className='style-2'>Create and sell</h2>
        </div>
      </div>
      <div className='container px-0'>
        <FeatureBox/>
      </div>
    </section>

    <Footer />
  </div>
  </div>
  );
};

export default HomePage;
