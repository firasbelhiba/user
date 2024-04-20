import React, { useState, ChangeEvent, ReactNode } from "react";
import Clock from "../../../components/Clock";
import Footer from "../../../components/footer"; 
import { Link, RouteComponentProps } from "@gatsbyjs/reach-router";
import { createGlobalStyle } from "styled-components";
import {  useNavigate } from 'react-router-dom';
import {Button, ButtonGroup, TimeInput} from "@nextui-org/react";
import {Time, parseAbsoluteToLocal} from "@internationalized/date";




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

const UpgradableNFTNext: React.FC <RouteComponentProps>= ({ path })  => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [active, setActive] = useState('regular');
  const navigate = useNavigate();
  let [date, setDate] = React.useState(parseAbsoluteToLocal("2021-04-07T18:45:22Z"));

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
 
  

  return (
    <div>
  <section className='container'>
        <div className="row">
    <div></div>
          <div className="col-lg-7 offset-lg-1 mb-5">
            <form id="form-create-item" className="form-border" action="#">
              <div className="field-set"> 

                <div className="spacer-single"></div>

                <h5>token ID</h5>
                <input type="text" name="item_title" id="item_title" className="form-control" placeholder="e.g. 'Crypto Funk" />

                <h5>Metadata</h5>
                <input type="text" name="item_title" id="item_title" className="form-control" placeholder="e.g. 'MAS" />

                <div className="spacer-10"></div>

                <div>
                    <div className="w-full max-w-xl flex flex-col items-start gap-4">
  <h5 >Upgrade-Time</h5>
  <input type="text" name="item_title" id="item_title" className="form-control" placeholder="00d:00h:00m:00s" />
      </div>
</div>

                <div className="spacer-10"></div>

                <h5>Maximum level of upgrade</h5>
                <select name="item_price" id="item_price" className="form-control">
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
             </select>

                <div className="spacer-10"></div>

                <input type="button" id="submit" className="btn-main" value="Create your Upgradable Collection"/>
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

export default UpgradableNFTNext;
