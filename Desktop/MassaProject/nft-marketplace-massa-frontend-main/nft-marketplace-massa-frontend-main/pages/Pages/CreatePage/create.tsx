import React, { useState, ChangeEvent, ReactNode } from "react";
import Clock from "../../../components/Clock";
import Footer from "../../../components/footer"; 
import { Link, RouteComponentProps } from "@gatsbyjs/reach-router";
import { createGlobalStyle } from "styled-components";
import {  useNavigate } from 'react-router-dom';
import {Button, ButtonGroup} from "@nextui-org/react";
import { createCollection } from "../ConnectWallet/connectWallet";




interface FileWithPreview extends File {
  preview: string;
}


interface NavLinkProps extends RouteComponentProps  {
  className?: string;
  children?: ReactNode;
  to: string;
  onClick?: () => void;
  value?:string;
  
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


const UpgradableNFT: React.FC <RouteComponentProps>= ({ path })  => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [active, setActive] = useState('regular');
  const navigate = useNavigate();
  const [inputTitle, setInputTitle] = useState<string>();
  const [inputSymbol, setInputSymbol] = useState<string>();
  const [inputDescription, setInputDescription] = useState<string>();

  // Define handleButtonClick using useNavigate for navigation
  const handleButtonClick = (type: string) => {
    setActive(type); // Update the active state to reflect the button pressed
    // Determine the route based on the button type
    const route = type === 'regular' ? '/create-regular' : '/create-upgradable';
    navigate(route); // Use navigate to change the route programmatically
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray: FileWithPreview[] = Array.from(e.target.files).map(file => ({
        ...file,
        preview: URL.createObjectURL(file)
      }));

      console.log(filesArray);
      setFiles(prev => [...prev, ...filesArray]);
    }
  };
  
    
  
    const handleNavigate = (path: string) => {
      navigate(path);
    }

  return (
    <div>
  <section className='container'>
        <div className="row">
        <div className="section-center">  
           <ButtonGroup className="button-group">
           <button className="btn-link" >
            <NavLink className="btn-main" to= '/create'>Regular NFT</NavLink> </button>
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
                <h5>Upload file</h5>
                <div className="d-create-file">
                  <p id="file_name">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</p>
                  {files.map((file, index) => 
                    <p key={index}>PNG, JPG, GIF, WEBP or MP4. Max 200mb.{file.name}</p>
                  )}
                  <div className='browse'>
                    <input type="button" id="get_file" className="btn-main" value="Browse"/>
                    <input id='upload_file' type="file" multiple onChange={onChange} />
                  </div>
                </div>

                <div className="spacer-single"></div>

                <h5>Title</h5>
                <input type="text" name="item_title" value={inputTitle} className="form-control" placeholder="e.g. 'Crypto Funk"  onChange={(e) => {
                    setInputTitle(e.target.value);
                }
                  } />

                <h5>Symbol</h5>
                <input type="text" name="item_title" value={inputSymbol} className="form-control" placeholder="e.g. 'MAS"
                onChange={(e) => {
                  setInputSymbol(e.target.value);
              }
                } />

                <div className="spacer-10"></div>

                <h5>Description</h5>
                <textarea data-autoresize name="item_desc" value={inputDescription} className="form-control" placeholder="e.g. 'This is very limited item'"
                onChange={(e) => {
                  setInputDescription(e.target.value);
              }
                }></textarea>

                <div className="spacer-10"></div>

                <h5>Price</h5>
                <input type="text" name="item_price" id="item_price" className="form-control" placeholder="enter price for one item (ETH)" />

                <div className="spacer-10"></div>

                <h5>Royalties</h5>
                <input type="text" name="item_royalties" id="item_royalties" className="form-control" placeholder="suggested: 0, 10%, 20%, 30%. Maximum is 70%" />

                <div className="spacer-10"></div>
               
                <Button className="btn-main" onClick={createCollection(false, inputTitle || '',inputSymbol || '',inputDescription || '')}>
                  <h5>create Collection</h5>
                
                  
                 </Button>
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

export default UpgradableNFT;
