export const removeParagraphTag = (inputString: string): string => {
  const summaryString = inputString
    .replace(/[/]/g, "")
    .replace(/<p>*/g, "")
    .replace(/<b>*/g, "")
    .replace(/<>*/g, "");
  return summaryString;
};
