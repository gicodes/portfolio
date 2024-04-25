import './App.css';

import SocialHeader from './components/1-header-components/social-header';
import SquareTerminal from './components/2-terminal-components/fa-square-terminal';
import Summary from './components/3-summary-components/summaryKit';
import Resume from './components/4-resume-components/resume';
// import AboutMe from './components/5-abme-components/abMeHandler';
import Xperience from './components/6-xp-components/xperience';
import PrevProject from './components/8-sppro-components/prevPro';
import Footer from './components/9-footer-components/footer';


const DesktApp = () => {
  return (
    <div className='Body'>
      <div>
        <SocialHeader />
        <SquareTerminal />
        <Summary />
        <Resume />
        {/* <AboutMe /> */}
        <PrevProject />
        <Xperience />
        <Footer />
      </div>
    </div>
  );
}


export default DesktApp;