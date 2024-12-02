"use client";

import { Box, Stack, useMediaQuery, Pagination } from "@mui/material";
import styles from '../page.module.css';
import { projects } from "./projects";
import { RepoCard } from "./repo-card";
import { useState } from "react";

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
  const [page, setPage] = useState(1);
  const smallScreen = useMediaQuery('(max-width:768px)'); 
  const itemsPerPage = 1; 

  const pagesContent = Array.from(
    { length: Math.ceil(projects.length / itemsPerPage) },
    (_, index) =>
      projects.slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage)
  );

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box p={2}>
      <Stack className="text-center text-gray">
        <h2> Welcome to Repositories</h2>
        <p> Featuring programs, applications, and development projects I have worked on</p>
      </Stack>

      <Box>
        {pagesContent[page - 1]?.map((pr, idx) => (
          <RepoCard project={pr} idx={idx} key={idx} />
        ))}
      </Box>

      <Pagination
        page={page}
        count={pagesContent.length}
        onChange={handlePageChange}
        className={styles.pagination}
        sx={{ float: 'right' }}
        size={smallScreen ? 'small' : 'medium'}
      />
    </Box>
  );
};

export default Repositories;