import './App.css';
import './index.css'

// import { useMediaQuery } from "react-responsive";

import SocialHeader from './components/1-header-components/social-header';
import SquareTerminal from './components/2-terminal-components/fa-square-terminal';
import Summary from './components/3-summary-components/summaryKit';
import Resume from './components/4-resume-components/resume';
import AboutMe from './components/5-abme-components/abMeHandler';
import Xperience from './components/6-xp-components/xperience';
import PrevProject from './components/8-sppro-components/prevPro';
import Footer from './components/9-footer-components/footer';

const DesktApp = () => {

  // const isDesktop = useMediaQuery({
  //   query: "(min-width: 1224px)"
  // });
  // const isTablet = useMediaQuery({
  //   query: "(max-width: 1224px)"
  // });

  // const isMobile = useMediaQuery({
  //   query: "(max-width: 786px)"
  // });

  // const isPortrait = useMediaQuery({
  //   query: "(orientation: portrait)"
  // });

  // const isRetina = useMediaQuery({
  //   query: "(max-resolution: 300dpi)"
  // });

  return (

    // <Wrapper>
    //   {
    //     isDesktop ? <DesktopView /> : <MobileView />
    //   }
    //   {isTablet && <Tablet />}
    //   <p>This is {isPortrait ? 'portrait' : 'landscape'} orientation</p>
    //   {isRetina &&

    <div className='Body'>
      <div>
        <SocialHeader />
      </div>
      <div>
        <SquareTerminal />
      </div>
      <br />
      <div>
        <Summary />
      </div>
      <div>
        <Resume />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Xperience />
      </div>
      <div>
        <PrevProject />
      </div>
      <div>
        <Footer />
      </div>
    </div>

    //   }
    // </Wrapper>

  );
}

export default DesktApp;