import { AltRoute, Visibility, StarSharp } from "@mui/icons-material";
import { Box, Button, Stack, Card } from "@mui/material";
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
          width={{ sm: "100%", lg: "50%" }}
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
           fontSize={{ xs: 'smaller', sm: 'small' }}
          >
          {/* p> {repoData[project.name]?.description} </p> */}

            { render(project.description).map((data, idx) => (
              <span key={idx} className="block mt">
                {data}
              </span>
            ))}
          </Box>

          <Box fontSize={'small'} my={1} px={1}>
            <span className="text-tertiary">Last Updated -- </span> 
            <span className="text-gray">{repoData[project.name]?.lastUpdated}</span>
          </Box>
        </Stack>
        <br />

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
