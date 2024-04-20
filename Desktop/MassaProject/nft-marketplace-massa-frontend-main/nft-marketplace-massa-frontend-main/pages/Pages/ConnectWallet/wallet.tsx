import React from 'react';
import ConnectWallet from "./connectWallet";
import Footer from '../../../components/footer';
import ScrollToTop from '../../../components/menu/ScrollToTop';
import { RouteComponentProps } from '@gatsbyjs/reach-router';

const Wallet: React.FC <RouteComponentProps> = ({ path })  => (
  <div>
    <ScrollToTop/>
    <div  className="row justify-content-center">
    <div className="col-lg-&à">
    <section className='container' >
      <ConnectWallet />
    </section>
    </div>
    </div>
    <Footer />
  </div>
);

export default Wallet;
