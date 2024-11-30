
export const render = (text: string) =>
  text
    .split("\n")
    .filter((line) => line.trim() !== "" && line !== "undefined");