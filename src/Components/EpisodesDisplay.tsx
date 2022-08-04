import { episodeCode } from "./../utils/seasonEpisode";
import { IEpisode } from "./../utils/interface";
import { removeParagraphTag } from "./../utils/removeTag";

//   let propsOfEpisodes : IEpisode[]

function EpisodesDisplay(props: IEpisode): JSX.Element {
  return (
    <>
      <h1>
        {props.name} - {episodeCode(props.season, props.number)}
      </h1>
      <img src={props.image ? props.image.medium : ""} alt="" />
      <p> {props.summary ? removeParagraphTag(props.summary) : ""}</p>
    </>
  );
}
export default EpisodesDisplay;
