export const removeParagraphTag = (inputString: string): string => {
  if (inputString === null) {
    return ""
  }
  const summaryString = inputString
    .replace(/[/]/g, "")
    .replace(/<p>*/g, "")
    .replace(/<b>*/g, "")
    .replace(/<>*/g, "")
  return summaryString;
};
