import React, { useState, ChangeEvent, ReactNode } from "react";
import Clock from "../../../components/Clock";
import Footer from "../../../components/footer"; 
import { Link, RouteComponentProps } from "@gatsbyjs/reach-router";
import { createGlobalStyle } from "styled-components";
import {   useNavigate } from 'react-router-dom';
import {Button, ButtonGroup} from "@nextui-org/react";




interface FileWithPreview extends File {
  preview: string;
}

interface NavLinkProps extends RouteComponentProps  {
    className?: string;
    children?: ReactNode;
    to: string;
    onClick?: () => void;
    
  }
  
  // Convert NavLink functional component to TypeScript
  const NavLink: React.FC<NavLinkProps> = ({ to, children, className, onClick }) => (
    <Link 
      to={to}
      getProps={({ isCurrent }) => ({
        className: isCurrent ? 'active' : 'non-active',
      })}
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );



const ImportCollection: React.FC  <RouteComponentProps>= ({ path })  =>  {
    const navigate = useNavigate();
 
  return (
    <div>



      <section className='container'>
        <div className="row">
        <div className="section-center">  
           <ButtonGroup className="button-group">
           <button className="btn-link" >
            <NavLink className="btn-main"  to= '/create'>Regular NFT</NavLink> </button>
           <button className="btn-link"> 
           <NavLink className="btn-main" to='/upgradableNFT'>Upgradable NFT</NavLink> </button>
           <button className="btn-link">
            <NavLink className="btn-main" to='/importCollection'>Import your collection </NavLink></button>
           </ButtonGroup>
    </div> 
    <div></div>
          <div className="col-lg-7 offset-lg-1 mb-5">
            <form id="form-create-item" className="form-border" action="#">
              <div className="field-set">
                
               

                <div className="spacer-single"></div>

                <h5>Address</h5>
                <input type="text" name="item_title" id="item_title" className="form-control" placeholder="e.g. '@" />       

                <div className="spacer-10"></div>

                <input type="button" id="submit" className="btn-main" value="Import"/>
              </div>
            </form>
          </div>

          <div className="col-lg-3 col-sm-6 col-xs-12">
            <h5>Preview item</h5>
            <div className="nft__item m-0">
              <div className="de_countdown">
                <Clock deadline="December, 30, 2021" />
              </div>
              <div className="author_list_pp">
                <span>                                    
                  <img className="lazy" src="./img/author/author-1.jpg" alt=""/>
                  <i className="fa fa-check"></i>
                </span>
              </div>
              <div className="nft__item_wrap">
                <span>
                  <img src="./img/collections/coll-item-3.jpg" id="get_file_2" className="lazy nft__item_preview" alt=""/>
                </span>
              </div>
              <div className="nft__item_info">
                <span >
                  <h4>Pinky Ocean</h4>
                </span>
                <div className="nft__item_price">
                  0.08 ETH<span>1/20</span>
                </div>
                <div className="nft__item_action">
                  <span>Place a bid</span>
                </div>
                <div className="nft__item_like">
                  <i className="fa fa-heart"></i><span>50</span>
                </div>                            
              </div> 
            </div>
          </div>                                         
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ImportCollection;
