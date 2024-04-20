import Header from '../../components/menu/header';
import HomePage from './HomePage/homePage';
import React, { ReactNode } from 'react';
import ScrollToTopBtn from '../../components/menu/ScrollToTop';
import { createGlobalStyle } from 'styled-components';
import Createpage from './CreatePage/create';
import Explore from './Gallery/explore';
import Collection from './ItemDetails/itemDetail';
import { Location, LocationProvider, RouteComponentProps, Router } from '@gatsbyjs/reach-router';
import Wallet from './ConnectWallet/wallet';
import ImportCollection from './CreatePage/importCollection';
import UpgradableNFT from './CreatePage/upgradableNFT';
import UpgradableNFTNext from './upgradableNFTF/upgradableNFTNext';


const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

interface ScrollTopProps extends RouteComponentProps{
  children: ReactNode;
  
}
interface PosedRouterProps {
  children: ReactNode;
}

export const ScrollTop : React.FC<ScrollTopProps> = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0,0), [location])
  return children
}

const PosedRouter : React.FC<PosedRouterProps> = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <div key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </div>
      </div>
    )}
  </Location>
);



const MyApp: React.FC = () => {
  return (
    <div className="wrapper" >
      <GlobalStyles />
      <LocationProvider>
        <Header />
        <PosedRouter>
      <ScrollTop path="/">
        <HomePage  path="/"/>    
        <Wallet path="/wallet"/>
        <Createpage path ="/create"/> 
         <Explore path="/explore"/>
         <ImportCollection path="/importCollection"/>
         <UpgradableNFT path="/upgradableNFT" />
         <UpgradableNFTNext path="/UpgradableNFTNext"/>
        {/* <Collection />  */}
        </ScrollTop>
        </PosedRouter>
        <ScrollToTopBtn />
      </LocationProvider>
    </div>
  );
}

export default MyApp;
