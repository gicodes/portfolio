import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { SiExpress, SiMysql, SiVercel, SiNetlify, SiFirebase, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { DiMongodb, DiNodejsSmall } from 'react-icons/di';
import { FaPython, FaReact, FaGithub } from 'react-icons/fa';

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
            flexWrap: 'wrap',
            lineHeight: '1.5',
            textAlign: 'center',
            flexFlow: 'column row',
            justifyContent: 'space-between'
          }}>
          <div className='RonMouse'>
            <DiMongodb style={{ color: 'darkgreen' }} className='is-size-2 pt-4' />
            <p className='is-size-6'>MongoDB</p>
          </div>
          <div className='RonMouse'>
            <SiExpress style={{ color: 'yellow' }} className='is-size-2 pt-4' />
            <p className='is-size-6'>Express</p>
          </div>
          <div className='RonMouse'>
            <FaReact style={{ color: '#87CEFA' }} className='is-size-2 pt-4' />
            <p  className='is-size-6'>React</p>
          </div>
          <div className='RonMouse'>
            <DiNodejsSmall style={{ color: 'limegreen' }} className='is-size-2 pt-4' />
            <p className='is-size-6'>Node.js</p>
          </div>
          <div className='RonMouse'>
            <SiFirebase style={{ color: 'gold' }} className='is-size-2 pt-4' />
            <p className='is-size-6'>Firebase</p>
          </div>
          <div className='RonMouse'>
            <SiVercel style={{ color: '#FAFAD2' }} className='is-size-2 pt-4' />
            <p className='is-size-6'>Vercel</p>
          </div>
          <div className='RonMouse'>
            <SiTypescript style={{ color: 'yellow' }} className='is-size-2 pt-4' />
            <p className='is-size-6'>Typescript</p>
          </div>
          <div className='RonMouse'>
            <SiNextdotjs style={{ color: 'black' }} className='is-size-2 pt-4' />
            <p className='is-size-6'>Next.js</p>
          </div>
          <div className='RonMouse'>
            <FaPython style={{ color: '#9370DB	' }} className='is-size-2 pt-4' />
            <p className='is-size-6'>Python</p>
          </div>
          <div className='RonMouse'>
            <SiNetlify style={{ color: 'powderblue' }} className='is-size-2 pt-4' />
            <p className='is-size-6'>Netlify</p>
          </div>
          <div className='RonMouse'>
            <SiMysql style={{ color: 'darkorange' }} className='is-size-2 pt-4' />
            <p className='is-size-6'>MySQL</p>
          </div>
          <div className='RonMouse'>
            <FaGithub className='is-size-2 pt-4' />
            <p className='is-size-6'>Github</p>
          </div>
        </Grid>
      </div >
    </Grid >
  )
}


export default Tools;