import { SiExpress, SiMysql, SiVercel, SiNetlify, SiFirebase, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { FaPython, FaReact, FaGithub } from 'react-icons/fa';
import { DiMongodb, DiNodejsSmall } from 'react-icons/di';


const Tools = () => {
  return (
    <div style={{
      marginTop: '2.2em'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{
          display: 'flex',
          flexFlow: 'row',
          textAlign: 'center',
          justifyContent: 'space-between',
        }}>
          <div className='RonMouse'>
            <DiMongodb style={{ color: 'darkgreen' }} className='is-size-1' />
            <p> MongoDB</p>
          </div>
          <div className='RonMouse'>
            <SiExpress style={{ color: 'yellow' }} className='is-size-1' />
            <p>Express</p>
          </div>
          <div className='RonMouse'>
            <FaReact style={{ color: '#87CEFA' }} className='is-size-1' />
            <p>React</p>
          </div>
          <div className='RonMouse'>
            <DiNodejsSmall style={{ color: 'limegreen' }} className='is-size-1' />
            <p>Node.js</p>
          </div>
          <div className='RonMouse'>
            <SiTypescript style={{ color: 'yellow' }} className='is-size-1' />
            <p>Typescript</p>
          </div>
          <div className='RonMouse'>
            <SiNextdotjs style={{ color: 'black' }} className='is-size-1' />
            <p>Next.js</p>
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexFlow: 'row',
        textAlign: 'center',
        paddingTop: '2.2em',
        justifyContent: 'space-between',
      }}>
        <div className='RonMouse'>
          <SiFirebase style={{ color: '#FFD700' }} className='is-size-1' />
          <p>Firebase</p>
        </div>
        <div className='RonMouse'>
          <SiVercel style={{ color: '#FAFAD2' }} className='is-size-1' />
          <p>Vercel</p>
        </div>
        <div className='RonMouse'>
          <FaPython style={{ color: '#9370DB	' }} className='is-size-1' />
          <p>Python</p>
        </div>
        <div className='RonMouse'>
          <SiMysql style={{ color: 'darkorange' }} className='is-size-1' />
          <p>MySQL</p>
        </div>
        <div className='RonMouse'>
          <SiNetlify style={{ color: 'powderblue' }} className='is-size-1' />
          <p>Netlify</p>
        </div>
        <div className='RonMouse'>
          <FaGithub className='is-size-1' />
          <p>Github</p>
        </div>
      </div>
    </div>
  )
}


export default Tools;