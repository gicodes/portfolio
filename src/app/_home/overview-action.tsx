import { render } from "../render";
import { useTheme } from "@mui/material/styles";
import { CodeSharp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Badge, Box, Container, Typography } from "@mui/material";

const welcomeText = `
  Hi there,\n I'm Gideon Iduma.
`;

const honouryText = `
  Software Engineer, Full-Stack Developer
`;

const pitchText = `
    I speak fluent Javascript. Certified in JS, Python and Dart. \n
    I've written over 25 real-world programs that are widely in use today. \n
    I will build you a user-friendly application that is responsive, scalable and reliably fast in production.
`;

export const GetToKnowMe = () => {
  const theme = useTheme();
  const [slidingText, setSlidingText] = useState("");
  const [slidingText2, setSlidingText2] = useState("");
  const [slidingText3, setSlidingText3] = useState("");

  useEffect(() => {
    let welcomeIndex = 0;
    const displayWelcomeText = setInterval(() => {
      if (welcomeIndex < welcomeText.length) {
        setSlidingText((prev) => prev + welcomeText[welcomeIndex]);
        welcomeIndex++;
      } else {
        clearInterval(displayWelcomeText);

        let honouryIndex = 0;
        const displayHonouryText = setInterval(() => {
          if (honouryIndex < honouryText.length) {
            setSlidingText2((prev) => prev + honouryText[honouryIndex]);
            honouryIndex++;
          } else {
            clearInterval(displayHonouryText);

            let pitchIndex = 0;
            const displayPitchText = setInterval(() => {
              if (pitchIndex < pitchText.length) {
                setSlidingText3((prev) => prev + pitchText[pitchIndex]);
                pitchIndex++;
              } else {
                clearInterval(displayPitchText);
              }
            }, 50);
          }
        }, 50);
      }
    }, 100);
    
    return () => clearInterval(displayWelcomeText);
  }, []);

  return (
    <Container
      sx={{
        px: { xs: 3, sm: 4, lg: 0 },
        pt: { xs: 1, sm: 3, lg: 2 },
        pb: { xs: 1, sm: 2, lg: 3 },
        height: { xs: '432px', sm: '369px', lg: '345px' },
      }}
    >
      <Typography component="div">
        {render(slidingText).map((line, idx) => (
          <Typography
            key={idx}
            variant="h3"
            component="h1"
            sx={{ 
              py: 1,
              display: 'block',
              [theme.breakpoints.down(375)]: {
                fontSize: 35,
              },             
            }}
          >
            {line.includes("Gideon Iduma") ? (
              <>
                {line.split("Gideon Iduma")[0]}
                <Typography
                  component="span"
                  variant="h3"
                  color="warning.main"
                  sx={{ 
                    display: 'inline',
                    fontSize: 36,
                    [theme.breakpoints.down(375)]: {
                      fontSize: 33,
                    },
                  }}
                >
                  Gideon Iduma
                </Typography>
                {line.split("Gideon Iduma")[1]}
              </>
            ) : (
              line
            )}
          </Typography>
        ))}
      </Typography>

      <Box my={2}><Typography component="div" className="typing-effect">
        {render(slidingText2).map((line, idx) => (
          <Typography
            key={idx}
            variant="subtitle1"
            color="success.main"
          >
            {line}
          </Typography>
        ))}
      </Typography></Box>

      <Typography component="div" className="typing-effect">
        {render(slidingText3).map((line, idx) => (
          <Typography
            key={idx}
            component="span"
            sx={{
              display: 'block',
              maxWidth: 500,
              lineHeight: '1.5rem',
              fontSize: {xs: 12, sm: 12.5, md: 13, lg: 13.5},
            }}
          >
            {line}
          </Typography>
        ))}
      </Typography>

      <Badge
        sx={{ my: 3 }}
        color="warning"
        badgeContent="☁️"
        className="beat-fade"
      >
        <CodeSharp className="text-gray" />
      </Badge>
    </Container>
  );
};
