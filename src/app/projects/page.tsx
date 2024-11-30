import { Box, Button, Stack, Card } from '@mui/material';
import ProjectPreview from './project-preview';
import { projects } from './projects';
import { render } from '../render';

const Projects = () => {
  return (
    <Box p={2}>
        <Stack className='text-center text-gray'>
          <h2> Highlighting key projects</h2>
          <p>
            You can find programs, applications and other dev projects I have worked on below.
          </p>
        </Stack>
       

        {projects.map((pr, idx) => 
          <Card 
            key={idx} 
            sx={{ my: 2, p: 2}}
          >
            <Box 
              display={{sm: 'grid', lg: 'flex'}}
              justifyContent={{sm: 'center', lg: 'space-between'}}
            >
              <Stack 
                m={1} p={1}
                width={{sm: '100%', lg: '60%'}}            
              >
                <h3>{pr.title}</h3>
                <p>
                  {render(pr.description).map((line, idx) => (
                    <span key={idx} className="block mt">
                      {line}
                    </span>
                  ))}
                </p>
              </Stack>

              <Box width={{sm: '100%', lg: '40%'}}>
                <ProjectPreview projectLink={pr.link}  />
              </Box>
            </Box>
            
            <Box 
              px={{ xs: 0, sm: 1, lg: 2 }} 
              mt={{ xs: 2, sm: 2, lg: -2}}
            >
              <Button variant='contained'>
                <a href={pr.source}> Visit Codebase</a>
              </Button>
            </Box>
          </Card>
        )}
    </Box>
  )
}

export default Projects
