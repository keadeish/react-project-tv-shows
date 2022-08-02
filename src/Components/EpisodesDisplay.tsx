import { episodeCode } from "./../utils/seasonEpisode";
export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  rating: { average: number };
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

//   let propsOfEpisodes : IEpisode[]

function EpisodesDisplay(props: IEpisode): JSX.Element {
  const removeParagraphTag = (inputString: string): string => {
    const summaryString = inputString
      .replace(/[/]/g, "")
      .replace(/<p>*/g, "")
      .replace(/<b>*/g, "");
    return summaryString;
  };

  return (
    <>

      <h1>
        {props.name} - {episodeCode(props.season, props.number)}
      </h1>
      <img src={props.image.medium} alt="" />
      <p>{removeParagraphTag(props.summary)}</p>
    </>
  );
}
export default EpisodesDisplay;
