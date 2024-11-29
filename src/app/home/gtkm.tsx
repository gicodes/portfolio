import React, { useEffect, useState } from "react";

const welcomeText = `
  Hi there,\n
  I'm Gideon Iduma. \n
`;
const honouryText = `
  Software Engineer, Full-Stack Developer \n 
`;

const pitchText = `
  I speak fluent Javascript. Certified in Python and Dart.
  I've written over 25 real-world programs that are in use today. \n
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
            }, 100); // Typing speed for `slidingText3`
          }
        }, 100); // Typing speed for `slidingText2`
      }
    }, 150); // Typing speed for `slidingText`

    return () => clearInterval(displayWelcomeText);
  }, []);

  const render = (text: string) =>
    text
      .split("\n")
      .filter((line) => line.trim() !== "" && line !== "undefined");

  return (
    <div className="w-100">
      <div>
        {render(slidingText).map((line, idx) => (
          <h1 key={idx} className="text-gray">
            {line}
          </h1>
        ))}
      </div>

      <p className="typing-effect">
        {render(slidingText2).map((line, idx) => (
          <span key={idx} className="text-jolly block">
            {line}
          </span>
        ))}
      </p>

      <p className="mt-2 typing-effect">
        {render(slidingText3).map((line, idx) => (
          <span key={idx} className="block">
            {line}
          </span>
        ))}
      </p>
    </div>
  );
};