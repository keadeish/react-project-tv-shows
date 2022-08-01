interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
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
  return (
    <>
      <h1>Episode Names</h1>
      <p>{props.name}</p>
    </>
  );
}
export default EpisodesDisplay;
