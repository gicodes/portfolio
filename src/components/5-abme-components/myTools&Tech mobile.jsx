import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { SiExpress, SiMysql, SiVercel, SiNetlify, SiFirebase } from 'react-icons/si';
import { FaPython, FaReact, FaGithub } from 'react-icons/fa';
import { DiMongodb, DiNodejsSmall, DiJavascript1 } from 'react-icons/di';

const Tools = () => {
  return (
    <Grid container>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Grid item
          style={{
            display: 'flex',
            flexFlow: 'row',
            flexWrap: 'wrap',
            lineHeight: '1.5',
            textAlign: 'center',
            justifyContent: 'space-evenly'
          }}>
          <div className='RonMouse'>
            <DiMongodb style={{ color: 'darkgreen' }} className='is-size-2 pt-4' />
            <p> MongoDB</p>
          </div>
          <div className='RonMouse'>
            <SiExpress style={{ color: 'yellow' }} className='is-size-2 pt-4' />
            <p>Express</p>
          </div>
          <div className='RonMouse'>
            <FaReact style={{ color: '#87CEFA' }} className='is-size-2 pt-4' />
            <p>React</p>
          </div>
          <div className='RonMouse'>
            <DiNodejsSmall style={{ color: 'limegreen' }} className='is-size-2 pt-4' />
            <p>Node.JS</p>
          </div>
          <div className='RonMouse'>
            <SiFirebase style={{ color: 'gold' }} className='is-size-2 pt-4' />
            <p>Firebase</p>
          </div>
          <div className='RonMouse'>
            <SiVercel style={{ color: '#FAFAD2' }} className='is-size-2 pt-4' />
            <p>Vercel</p>
          </div>
          <div className='RonMouse'>
            <DiJavascript1 style={{ color: 'yellow' }} className='is-size-2 pt-4' />
            <p>Javascript</p>
          </div>
          <div className='RonMouse'>
            <SiNetlify style={{ color: 'powderblue' }} className='is-size-2 pt-4' />
            <p>Netlify</p>
          </div>
          <div className='RonMouse'>
            <FaPython style={{ color: '#9370DB	' }} className='is-size-2 pt-4' />
            <p>Python3</p>
          </div>
          <div className='RonMouse'>
            <SiMysql style={{ color: 'darkorange' }} className='is-size-2 pt-4' />
            <p>MySQL</p>
          </div>
          <div className='RonMouse'>
            <FaGithub className='is-size-2 pt-4' />
            <p>Github</p>
          </div>
        </Grid>
      </div >
    </Grid >
  )
}


export default Tools;