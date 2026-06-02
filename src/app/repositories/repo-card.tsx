import { Box, Button, Stack, Card, Chip, Typography } from "@mui/material";
import { AltRoute, Visibility, StarSharp } from "@mui/icons-material";
import ProjectPreview from "./project-preview";
import { useEffect, useState } from "react";
import { render } from "../render";
import { RepoProps } from "./page";

export interface ProjectProps {
  title: string;
  name: string;
  description: string;
  link: string;
  source: string;
  category: string | string[];
  tech: string[];
  license?: string;
}

export const RepoCard = (project: ProjectProps) => {
  const [repoData, setRepoData] = useState<Record<string, RepoProps>>({});
  const [loading, setLoading] = useState<boolean>(true);
  
  const fetchRepoData = async () => {
    try {
      const response = await fetch("/api/repositories");
      const data = await response.json();
      setRepoData(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch repository data:", error);
    }
  };

  useEffect(() => {
    fetchRepoData();
  }, []);

  return (
    <Card 
      key={project.name} 
      sx={{ my: 2, p: 1 }}
      >
      <Box
        p={{ lg: '10px 25px' }}
        display={{ sm: "grid", lg: "flex" }}
        justifyContent={{ sm: "center", lg: "space-between" }}
      >
        <Stack
          m={1} 
          px={1} 
          width={{ lg: "50%" }}
        >
          <Box px={1}>
            <h3>{project.title}</h3>
          </Box>

          <Card // github stats
            sx={{ 
              background: 'rgba(0, 0, 0, 0.1)', 
              fontSize: 'smaller',
              maxWidth: '250px', 
              p: '5px 20px', 
            }}
          >
            <p className="text-tertiary bold">Github stats</p>
            { loading ? "Loading ...." : 
              <Stack sx={{ gap: 2}}> 
                <Stack direction={'row'} gap={2}>
                  <span> 
                    <span className="text-gray-500"> Lang: </span>
                    {repoData[project.name]?.language}
                  </span>
                  <span> <span className="text-gray-500"> Size: </span> 
                    {repoData[project.name]?.size} 
                  </span>
                </Stack>
                
                <Stack direction={'row'} gap={3} mb={1}>
                  <span> 
                    <AltRoute fontSize="small" color={repoData[project.name]?.forks > 0 ? "success" : "disabled"} /> 
                    ({repoData[project.name]?.forks})
                  </span>
                  <span>
                    <StarSharp fontSize="small" color={repoData[project.name]?.stars > 0 ? "primary" : "disabled"} />
                    ({repoData[project.name]?.stars})
                  </span>
                  <span>
                    <Visibility  fontSize="small" color={repoData[project.name]?.watchers > 0 ? "warning" : "disabled"}/>
                    ({repoData[project.name]?.watchers})
                  </span>
                </Stack>            
              </Stack>
            }
          </Card>
          
          <Box // project description. I intentionally used project.description instead of repoData[]?.description
           p={{ sm: 1, lg: 1}} my={2}          
          >
            { render(project.description).map((data, idx) => (
              <span key={idx} className="block mt">
                <Typography>{data}</Typography>
              </span>
            ))}
          </Box>

          <Stack my={1} px={1} gap={1} mb={2}>
            <Typography variant="h6" fontWeight={700}>Category</Typography> 
            <Stack direction={'row'} spacing={1}>
              {Array.isArray(project.category) ? project.category.map((cat, idx) => <Chip key={idx} label={cat} />) : <Chip label={project.category} />}
            </Stack>
          </Stack>  

          <Stack 
            direction={{ xs: 'column', sm: 'row'}}
            justifyContent={'space-between'}  
            width={'100%'} 
            my={1} px={1} 
            gap={2}
          >
            <Box maxWidth={360} display={'grid'} gap={1}>
              <Typography variant="h6" fontWeight={700}>Licenses </Typography> 
              <span className="text-gray">{project?.license}</span>
            </Box>
            
            <Box display={'grid'} gap={1}>
              <Typography variant="h6" fontWeight={700}>Last Updated </Typography>
              <span className="text-gray">{repoData[project.name]?.lastUpdated}</span>
            </Box>
          </Stack>
        </Stack>

        <Box width={{ sm: "100%", lg: "40%" }}>
          <ProjectPreview projectLink={project.link} />
        </Box>
      </Box>

      <Box
        mt={{ xs: 2, sm: 2}}
        px={{ lg: 3}}
        display={'grid'}
        justifyContent={{ xs: 'center', sm: 'center', lg: 'flex-end'}}
      >
        <Button 
          variant="contained"
          color="inherit"
          href={project.source}
        >
          Visit Codebase
        </Button>
      </Box>
    </Card>
  );
}
