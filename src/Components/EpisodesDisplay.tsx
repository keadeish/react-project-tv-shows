interface IEpisode {
  name: string;
  season: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
}

//   let propsOfEpisodes : IEpisode[]

function EpisodesDisplay(props: IEpisode): JSX.Element {
  const removeParagraphTag = (inputString: string): string => {
    const summaryString = inputString
      .replace(/<p>/g, "")
      .replace(/[</p>]/g, "")
      .replace(/<b>/g, "")
      .replace(/[</b>]/g, "");

    return summaryString;
  };
  return (
    <>
      <h1>{props.name} - S01E01</h1>
      <img src={props.image.medium} alt="" />
      <p>{removeParagraphTag(props.summary)}</p>
    </>
  );
}
export default EpisodesDisplay;
