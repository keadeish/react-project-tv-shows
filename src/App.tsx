import episodes from "./episodes.json";
import EpisodesDisplay from "./Components/EpisodesDisplay";
import { useState } from "react";

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
  rating: { average: number };
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEpisodes = isMatching(episodes, searchTerm);

  function isMatching(episodes: IEpisode[], searchTerm: string): IEpisode[] {
    function oneMatchesSearchTerm(episode: IEpisode): boolean {
      if (
        episode.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        episode.summary.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    }
    return episodes.filter(oneMatchesSearchTerm);
  }

  return (
    <>
      <div>
        <input
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <p>
          {" "}
          Displaying {filteredEpisodes.length}/{episodes.length} episodes{" "}
        </p>
      </div>
      <div>
        {/* {episodes.filter(episode => episode.name.includes(searchTerm))} */}
      </div>
      <div>
        {filteredEpisodes.map((element, index) => (
          <EpisodesDisplay key={index} {...element} />
        ))}
      </div>

      <footer>
        This data has been obtained from{" "}
        <a href="https://www.tvmaze.com/">TVMaze.com</a>
      </footer>
    </>
  );
}
export default App;
