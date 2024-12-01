"use client"

import { AltRoute, Visibility, StarSharp } from "@mui/icons-material";
import { Box, Button, Stack, Card } from "@mui/material";
import ProjectPreview from "./project-preview";
import { useEffect, useState } from "react";
import { projects } from "./projects";
import { render } from "../render";

export interface RepoProps {
  name: string;
  size: number;
  stars: number;
  watchers: number;
  forks: number;
  language: string;
  description: string;
  lastUpdated: string;
}

const Repositories = () => {
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
    <Box p={2}>
      <Stack className="text-center text-gray">
        <h2> Welcome to Repositories</h2>
        <p> Featuring programs, applications, and development projects I have worked on</p>
      </Stack>

      {projects.map((pr, idx) => (
        <Card key={idx} sx={{ my: 2, p: 2 }}>
          <Box
            display={{ sm: "grid", lg: "flex" }}
            justifyContent={{ sm: "center", lg: "space-between" }}
          >
            <Stack m={1} p={1} width={{ sm: "100%", lg: "50%" }}>
              <h3>{pr.title}</h3>

              <Card 
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
                        {repoData[pr.name]?.language}
                      </span>
                      <span> <span className="text-gray-500"> Size: </span> 
                        {repoData[pr.name]?.size} 
                      </span>
                    </Stack>
                    
                    <Stack direction={'row'} gap={3} mb={1}>
                      <span> 
                        <AltRoute fontSize="small" color="action" /> 
                        ({repoData[pr.name]?.forks})
                      </span>
                      <span>
                        <StarSharp fontSize="small" color="warning" />
                        ({repoData[pr.name]?.stars})
                      </span>
                      <span>
                        <Visibility  fontSize="small" color="disabled"/>
                        ({repoData[pr.name]?.watchers})
                      </span>
                    </Stack>            
                  </Stack>
                }
              </Card>
              
              {/* <p> {repoData[pr.name]?.description} </p> */}
              <p>
                {render(pr.description).map((line, idx) => (
                  <span key={idx} className="block mt">
                    {line}
                  </span>
                ))}
              </p>

              <Box fontSize={'small'} my={2}>
                <span className="text-tertiary">Last Updated -- </span> 
                <span className="text-gray">{repoData[pr.name]?.lastUpdated}</span>
              </Box>
            </Stack>

            <Box width={{ sm: "100%", lg: "40%" }}>
              <ProjectPreview projectLink={pr.link} />
            </Box>
          </Box>

          <Box px={{ xs: 0, sm: 1, lg: 2 }} mt={{ xs: 2, sm: 2, lg: -2 }}>
            <Button variant="contained">
              <a href={pr.source}> Visit Codebase</a>
            </Button>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default Repositories;