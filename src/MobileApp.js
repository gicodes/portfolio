import './App.css';

import SocialHeader from './components/1-header-components/social-header mobile';
import SquareTerminal from './components/2-terminal-components/fa-square-terminal';
import Summary from './components/3-summary-components/summaryKit mobile';
import Resume from './components/4-resume-components/resume mobile';
// import AboutMe from './components/5-abme-components/abMeHandler mobile';
import Xperience from './components/6-xp-components/xperience mobile';
import PrevProject from './components/8-sppro-components/prevPro mobile';
import Footer from './components/9-footer-components/footer mobile';


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