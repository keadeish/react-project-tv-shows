import { episodeCode } from "./../utils/seasonEpisode";
import { IEpisode } from "./../utils/interface";
import { removeParagraphTag } from "./../utils/removeTag";
import "./EpisodesDisplay.css";

//   let propsOfEpisodes : IEpisode[]

function EpisodesDisplay(props: IEpisode): JSX.Element {
  return (
    <>
      <div className="episodes">
        <h1>
          {props.name} - {episodeCode(props.season, props.number)}
        </h1>
        <img src={props.image ? props.image.medium : ""} alt="" />
        <p> {props.summary ? removeParagraphTag(props.summary) : ""}</p>
      </div>
    </>
  );
}
export default EpisodesDisplay;
