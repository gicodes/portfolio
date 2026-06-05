import { useEffect, useState } from "react";

export const useTypewriter = (
  text: string,
  speed = 30,
  start = true
) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!start) return;

    setValue("");

    let currentIndex = 0;

    const interval = window.setInterval(() => {
      currentIndex++;

      setValue(text.slice(0, currentIndex));

      if (currentIndex >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, start]);

  return value;
};