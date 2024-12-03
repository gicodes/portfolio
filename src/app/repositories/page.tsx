"use client";

import { Box, Stack, useMediaQuery, Pagination } from "@mui/material";
import { RepoCard, ProjectProps } from "./repo-card";
import { useState, useEffect, useMemo } from "react";
import styles from '../page.module.css';
import { projects } from "./projects";

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
  const itemsPerPage = 1;
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState<ProjectProps[]>([]);
  const smallScreen = useMediaQuery('(max-width:768px)');

  const pagesContent = useMemo(
    () => Array.from(
        { length: Math.ceil(projects.length / itemsPerPage) },
        (_, index) =>
          projects.slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage)
      ),
    [projects, itemsPerPage]
  );

  useEffect(() => {
    setCurrentPage(pagesContent[page - 1] || []);
  }, [page, pagesContent]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box p={2}>
      <Stack className="text-center text-gray">
        <h2>Welcome to Repositories</h2>
        <p>Featuring programs, applications, and development projects I have worked on</p>
      </Stack>

      {currentPage.map((project, key) => (
        <Box key={key}> 
          <RepoCard {...project} />
        </Box>
      ))}  

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
