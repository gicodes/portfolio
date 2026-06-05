import { render } from "../render";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Badge,
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { CodeSharp } from "@mui/icons-material";
import { useTypewriter } from "../hooks/useTypewriter";

const MotionDiv = motion.div;
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const Intro = () => (
  <MotionDiv
    variants={itemVariants}
    initial="hidden"
    animate="visible"
  >
    <Typography
      variant="h2"
      fontWeight={800}
      sx={{
        fontSize: {
          xs: "2.5rem",
          md: "4rem",
        },
        lineHeight: 1.1,
      }}
    >
      Hi there,
    </Typography>

    <Typography
      variant="h2"
      fontWeight={800}
      sx={{
        fontSize: {
          xs: "2.5rem",
          md: "4rem",
        },
        lineHeight: 1.1,
      }}
    >
      I'm{" "}
      <Box
        component="span"
        color="warning.main"
      >
        Gideon Chino
      </Box>
    </Typography>
  </MotionDiv>
);

const Role = () => (
  <MotionDiv
    variants={itemVariants}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.3 }}
  >
    <Typography
      mt={3}
      color="success.main"
      fontWeight={600}
      sx={{
        fontSize: {
          xs: "1.1rem",
          md: "1.35rem",
        },
      }}
    >
      Full-Stack Developer · DevOps · Software Engineer
    </Typography>
  </MotionDiv>
);

const introSummary = `
  I build software that people depend on.
  With expertise in JavaScript, Python, and Dart, I create modern applications that combine exceptional user experience with scalable architecture.
  Having delivered 25+ production applications, I help businesses transform ideas into reliable digital products that perform in the real world.
`;

export const GetToKnowMe = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 100),
      setTimeout(() => setStage(2), 400),
      setTimeout(() => setStage(3), 800),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const typedContent = useTypewriter(introSummary, 15);

  return (
    <Container
      maxWidth="md"
    >
      <AnimatePresence>
        {stage >= 1 && (
          <Intro key="intro" />
        )}

        {stage >= 2 && (
          <Role key="role" />
        )}

        {stage >= 3 && (
          <React.Fragment key="summary">
            <motion.div variants={itemVariants}>
              <Paper
                elevation={0}
                sx={{
                  py: 2,
                  px: 3,
                  mt: 4,
                  maxWidth: 720,
                  borderRadius: 4,
                  border: "1px solid rgba(255, 193, 7, 0.2)",
                  boxShadow:
                    "0 0 30px rgba(255, 193, 7, 0.18), 0 0 45px rgba(255, 193, 7, 0.12)",
                }}
              >
                {render(typedContent).map((line, index) => (
                  <Typography
                    key={index}
                    sx={{
                      mt: index === 0 ? 0 : 2,
                      fontSize: {
                        xs: 14,
                        md: 16,
                      },
                      lineHeight: 1.9,
                      fontFamily: "math",
                      color: "text.primary",
                      fontWeight: index === 0 ? 700 : 500,
                    }}
                  >
                    {line}
                  </Typography>
                ))}

                <Box
                  component="span"
                  sx={{
                    display: "inline-block",
                    ml: 0.5,
                    width: "10px",
                    color: "warning.main",
                    animation: "blink 1s infinite",
                    "@keyframes blink": {
                      "0%,50%": {
                        opacity: 1,
                      },
                      "51%,100%": {
                        opacity: 0,
                      },
                    },
                  }}
                >
                  |
                </Box>
              </Paper>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Badge
                color="warning"
                badgeContent="☁️"
                sx={{
                  mt: 5,
                }}
              >
                <CodeSharp
                  sx={{
                    fontSize: 30,
                    color: "text.secondary",
                  }}
                />
              </Badge>
            </motion.div>
          </React.Fragment>
        )}      
      </AnimatePresence>
    </Container>
  );
};
