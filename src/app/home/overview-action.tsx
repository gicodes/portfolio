import { render } from "../render";
import { CodeSharp } from "@mui/icons-material";
import { Badge, Container } from "@mui/material";
import React, { useEffect, useState } from "react";

const welcomeText = `
  Hi there,\n I'm Gideon Iduma. \n
`;

const honouryText = `
  Software Engineer, Full-Stack Developer \n 
`;

const pitchText = `
  I speak fluent Javascript. Certified in JS, Python and Dart.
  I've written over 25 real-world programs that are widely in use today. \n
  I will build you a user-friendly application that is responsive, scalable and reliably fast in production. \n
`;

export const GetToKnowMe = () => {
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
            }, 100); // Typing speed for slidingText3
          }
        }, 50); // Typing speed for slidingText2
      }
    }, 100); // Typing speed for slidingText

    return () => clearInterval(displayWelcomeText);
  }, []);

  return (
    <Container
      sx={{
        my: 2,
        w: '100%',
        minWidth: 'fit-content',
        px: { xs: 3, sm: 4, lg: 5 },
        pt: { xs: 1, sm: 3, lg: 2 },
        pb: { xs: 1, sm: 2, lg: 3 },
        height: { xs: '432px', sm: '369px', lg: '345px' },
      }}
    >
      <span>
        { render(slidingText).map((line, idx) => (
          <h1 key={idx} className="text-gray">
            {line}
          </h1>
        ))}
      </span>

      <p className="typing-effect">
        { render(slidingText2).map((line, idx) => (
          <span key={idx} className="text-jolly block fs-mid">
            {line}
          </span>
        ))}
      </p>

      <p className="mt-2 typing-effect">
        { render(slidingText3).map((line, idx) => (
          <span key={idx} className="block mw-500">
            {line}
          </span>
        ))}
      </p>
      
      <Badge sx={{ my: 1.5}} badgeContent="☁️" color="warning" className="beat-fade">
        <CodeSharp className='text-gray' />
      </Badge>
    </Container>
  );
}
