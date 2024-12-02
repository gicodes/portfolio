"use client";

import { Box, Stack, useMediaQuery, Pagination } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import styles from '../page.module.css';
import { projects } from "./projects";
import { RepoCard, RepoPageProps } from "./repo-card";

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
  const [currentData, setCurrentData] = useState<RepoPageProps[]>([]);
  const smallScreen = useMediaQuery('(max-width:768px)');
  const itemsPerPage = 1;

  // Memoize pagesContent to avoid unnecessary recalculations
  const pagesContent = useMemo(
    () =>
      Array.from(
        { length: Math.ceil(projects.length / itemsPerPage) },
        (_, index) =>
          projects.slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage)
      ),
    [projects, itemsPerPage]
  );

  // Effect to update current data when page changes
  useEffect(() => {
    setCurrentData(pagesContent[page - 1] || []);
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

      <Box>
        {currentData.map((pr, idx) => (
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
