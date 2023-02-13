import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { SiExpress, SiMysql, SiVercel } from 'react-icons/si';
import { FaPython, FaReact, FaDocker, FaGithub } from 'react-icons/fa';
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
            justifyContent: 'space-between',
          }}>
          <div className='RonMouse'>
            <DiJavascript1 style={{ color: 'yellow' }} className='is-size-2' />
            <p>Javascript</p>
          </div>
          <div className='RonMouse'>
            <DiMongodb style={{ color: 'darkgreen' }} className='is-size-2' />
            <p> MongoDB</p>
          </div>
          <div className='RonMouse'>
            <SiExpress style={{ color: 'yellow' }} className='is-size-2' />
            <p>Express</p>
          </div>
          <div className='RonMouse'>
            <FaReact style={{ color: '#87CEFA' }} className='is-size-2' />
            <p>React</p>
          </div>
          <div className='RonMouse'>
            <DiNodejsSmall style={{ color: 'limegreen' }} className='is-size-2' />
            <p>NodeJS</p>
          </div>
          <div className='RonMouse'>
            <FaDocker style={{ color: '#87CEFA' }} className='is-size-2' />
            <p>Dockerhub</p>
          </div>
          <div className='RonMouse'>
            <SiVercel style={{ color: '#FAFAD2' }} className='is-size-2' />
            <p>Vercel Edge</p>
          </div>
          <div className='RonMouse'>
            <FaPython style={{ color: '#9370DB	' }} className='is-size-2' />
            <p>Python</p>
          </div>
          <div className='RonMouse'>
            <SiMysql style={{ color: 'darkorange' }} className='is-size-2' />
            <p>MySQL</p>
          </div>
          <div className='RonMouse'>
            <FaGithub className='is-size-2' />
            <p>Github</p>
          </div>
        </Grid>
      </div >
    </Grid >
  )
}


export default Tools;