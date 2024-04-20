import React, { ReactNode } from 'react';
import { keyframes, Keyframes } from '@emotion/react';

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

const fadeInUp: Keyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FeatureBox: React.FC = () => (
  <div className='row'>
    <div className="col-lg-4 col-md-6 mb-3">
      <div className="feature-box f-boxed style-3">
        <RevealWrapper className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
          <i className="bg-color-2 i-boxed icon_wallet"></i>
        </RevealWrapper>
        <div className="text">
          <RevealWrapper className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
            <h4 className="">Set up your wallet</h4>
          </RevealWrapper>
          <RevealWrapper className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
            <p className="">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
          </RevealWrapper>
        </div>
        <i className="wm icon_wallet"></i>
      </div>
    </div>

    <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-box f-boxed style-3">
                <RevealWrapper className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                  <i className=" bg-color-2 i-boxed icon_cloud-upload_alt"></i>
                </RevealWrapper>
                  <div className="text">
                    <RevealWrapper className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                      <h4 className="">Add your NFT's</h4>
                    </RevealWrapper>
                    <RevealWrapper className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                      <p className="">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                    </RevealWrapper>
                  </div>
                  <i className="wm icon_cloud-upload_alt"></i>
              </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-box f-boxed style-3">
                <RevealWrapper className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                  <i className=" bg-color-2 i-boxed icon_tags_alt"></i>
                </RevealWrapper>
                  <div className="text">
                    <RevealWrapper className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                      <h4 className="">Sell your NFT's</h4>
                    </RevealWrapper>
                    <RevealWrapper className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                      <p className="">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                    </RevealWrapper>
                  </div>
                  <i className="wm icon_tags_alt"></i>
              </div>
          </div>
  </div>
);

export default FeatureBox;
