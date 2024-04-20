import React, { ReactNode, useEffect, useState } from "react";
import { Breakpoint, BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import { Link, RouteComponentProps, } from '@gatsbyjs/reach-router';
import useOnclickOutside from "react-cool-onclickoutside";
import Explore from "../../pages/Pages/Gallery/explore";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import formatAddress from "../../utils/formatAddress";



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
// Define breakpoints using setDefaultBreakpoints
setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);

// Define NavLinkProps interface
interface NavLinkProps extends RouteComponentProps {
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

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenu1, setOpenMenu1] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
  const [openMenu3, setOpenMenu3] = useState(false);

  const isConnected = useSelector((state: any) => state.wallet.isConnected);
  const walletAddress = useSelector((state: any) => state.wallet.address);

  const displayAddress = walletAddress ? formatAddress(walletAddress) : '';


  const handleBtnClick = (): void => {
    setOpenMenu(!openMenu);
  };

  const handleBtnClick1 = (): void => {
    setOpenMenu1(!openMenu1);
  };
  const handleBtnClick2 = (): void => {
    setOpenMenu2(!openMenu2);
  };
  const handleBtnClick3 = (): void => {
    setOpenMenu3(!openMenu3);
  };
  const closeMenu = (): void => {
    setOpenMenu(false);
  };
  const closeMenu1 = (): void => {
    setOpenMenu1(false);
  };
  const closeMenu2 = (): void => {
    setOpenMenu2(false);
  };
  const closeMenu3 = (): void => {
    setOpenMenu3(false);
  };


  const ref = useOnclickOutside(() => {
    closeMenu();
  });

  const ref1 = useOnclickOutside(() => {
    closeMenu1();
  });
  const ref2 = useOnclickOutside(() => {
    closeMenu2();
  });
  const ref3 = useOnclickOutside(() => {
    closeMenu3();
  });


  const [showmenu, btn_icon] = useState(false);

  useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header?.offsetTop || 0;
    const scrollCallBack = () => {
      btn_icon(false);
      if (window.pageYOffset > sticky) {
        header?.classList.add("sticky");
        totop?.classList.add("show");
      } else {
        header?.classList.remove("sticky");
        totop?.classList.remove("show");
      }
      if (window.pageYOffset > sticky) {
        closeMenu();
      }
    };
    window.addEventListener("scroll", scrollCallBack);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <div>
      <GlobalStyles />
      <header id="myHeader" className='navbar white' style={{ backgroundImage: `url(${'./img/background.jpg'})` }} >
        <div className='container'>
          <div className='row w-100-nav'>
            <div className='logo px-0'>
              <div className='navbar-title navbar-item'>
                <NavLink to="/">
                 
                 
                  <img
                    src="./img/logoch.png"
                    className="img-fluid d-none"
                    alt="#"
                  />
                </NavLink>
              </div>
            </div>

            <div className='search'>
              <input id="quick_search" className="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
            </div>

            <BreakpointProvider>
              <Breakpoint l down>
                {showmenu &&
                  <div className='menu'>
                    <div className='navbar-item'>
                      <div ref={ref}>
                        <div className="dropdown-custom dropdown-toggle btn"
                          onClick={handleBtnClick}
                        >
                          Home
                        </div>
                        {openMenu && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu}>
                              <NavLink to="/" onClick={() => btn_icon(!showmenu)}>Homepage</NavLink>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='navbar-item'>
                      <div ref={ref1}>
                        <div className="dropdown-custom dropdown-toggle btn"
                          onClick={handleBtnClick1}
                        >
                          Explore
                        </div>
                        {openMenu1 && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu1}>
                              <NavLink to="/colection" onClick={() => btn_icon(!showmenu)}>Collection</NavLink>
                              <NavLink to="/ItemDetail" onClick={() => btn_icon(!showmenu)}>Items Details</NavLink>
                              <NavLink to="/Auction" onClick={() => btn_icon(!showmenu)}>Live Auction</NavLink>
                              <NavLink to="/helpcenter" onClick={() => btn_icon(!showmenu)}>Help Center</NavLink>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='navbar-item'>
                      <div ref={ref2}>
                        <div className="dropdown-custom dropdown-toggle btn"
                          onClick={handleBtnClick2}
                        >
                          Pages
                        </div>
                        {openMenu2 && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu2}>
                              <NavLink to="/Author" onClick={() => btn_icon(!showmenu)}>Author</NavLink>
                              <NavLink to="/wallet" onClick={() => btn_icon(!showmenu)}>Wallet</NavLink>
                              <NavLink to="/create" onClick={() => btn_icon(!showmenu)}>Create</NavLink>
                              <NavLink to="/contact" onClick={() => btn_icon(!showmenu)}>Contact Us</NavLink>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/activity" onClick={() => btn_icon(!showmenu)}>
                        Activity
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <div ref={ref3}>
                        <div className="dropdown-custom dropdown-toggle btn"
                          onClick={handleBtnClick3}
                        >
                          Element
                        </div>
                        {openMenu3 && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu3}>
                              <NavLink to="/elegantIcons" onClick={() => btn_icon(!showmenu)}>Elegant Icon</NavLink>
                              <NavLink to="/etlineIcons" onClick={() => btn_icon(!showmenu)}>Etline Icon</NavLink>
                              <NavLink to="/fontAwesomeIcons" onClick={() => btn_icon(!showmenu)}>Font Awesome Icon</NavLink>
                              <NavLink to="/accordion" onClick={() => btn_icon(!showmenu)}>Accordion</NavLink>
                              <NavLink to="/alerts" onClick={() => btn_icon(!showmenu)}>Alerts</NavLink>
                              <NavLink to="/price" onClick={() => btn_icon(!showmenu)}>Pricing Table</NavLink>
                              <NavLink to="/progressbar" onClick={() => btn_icon(!showmenu)}>Progress bar</NavLink>
                              <NavLink to="/tabs" onClick={() => btn_icon(!showmenu)}>Tabs</NavLink>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                }
              </Breakpoint>

              <Breakpoint xl>
                <div className='menu'>
                  <div className='navbar-item'>
                    <div ref={ref}>
                      <div className="dropdown-custom dropdown-toggle btn"
                        onMouseEnter={handleBtnClick} onMouseLeave={closeMenu}>
                        Home
                        <span className='lines'></span>
                        {openMenu && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu}>
                              <NavLink to="/">Homepage</NavLink>
                            </div>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                  <div className='navbar-item'>
                    <div ref={ref1}>
                      <div className="dropdown-custom dropdown-toggle btn"
                        onMouseEnter={handleBtnClick1} onMouseLeave={closeMenu1}>
                        Explore
                        <span className='lines'></span>
                        {openMenu1 && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu1}>

                              <NavLink to="/colection">Collection</NavLink>
                              <NavLink to="/ItemDetail">Items Details</NavLink>
                              <NavLink to="/Auction">Live Auction</NavLink>
                              <NavLink to="/helpcenter">Help Center</NavLink>
                            </div>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                  <div className='navbar-item'>
                    <div ref={ref2}>
                      <div className="dropdown-custom dropdown-toggle btn"
                        onMouseEnter={handleBtnClick2} onMouseLeave={closeMenu2}>
                        Pages
                        <span className='lines'></span>
                        {openMenu2 && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu2}>
                              <NavLink to="/Author">Author</NavLink>
                              <NavLink to="/wallet">Wallet</NavLink>
                              <NavLink to="/create">Create</NavLink>
                              <NavLink to="/news">News</NavLink>
                              <NavLink to="/explore">Gallery</NavLink>
                              <NavLink to="/contact">Contact Us</NavLink>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='navbar-item'>
                    <NavLink to="/activity">
                      Activity
                      <span className='lines'></span>
                    </NavLink>
                  </div>

                </div>
              </Breakpoint>
            </BreakpointProvider>

            <div className='mainside'>
              {isConnected ? (
                <h4 style={{ color: 'rgb(110, 233, 61)' }}>
                  {displayAddress}
                </h4>
              ) : (
                <NavLink to="/wallet" className="btn-main">
                  Connect Wallet
                </NavLink>
              )}
            </div>

          </div>

          <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
            <div className="menu-line white"></div>
            <div className="menu-line1 white"></div>
            <div className="menu-line2 white"></div>
          </button>

        </div>
      </header>
    </div>
  );
};

export default Header;
