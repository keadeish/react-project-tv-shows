import episodes from "./episodes.json";
import EpisodesDisplay from "./Components/EpisodesDisplay";
import { useEffect, useState } from "react";
import { isMatching } from "./utils/matchingEpisodes";
import { IEpisode } from "./utils/interface";

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  console.log("inside the App function");
  const [episodesData, setEpisodesData] = useState<IEpisode[]>([]);
  // const [episodeList, setEpisodeList] = useState("");

  useEffect(() => {
    const getAndStoreDataFromApi = async () => {
      const response = await fetch(
        `https://api.tvmaze.com/shows/${episodes[0].id}/episodes`
      );
      const fetchedEpisodes: IEpisode[] = await response.json();
      setEpisodesData(fetchedEpisodes);
    };
    getAndStoreDataFromApi();
  }, []);

  function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(`https://api.tvmaze.com/shows/${e.target.value}/episodes`);

    // useEffect(() => {
    //   const getAndStoreDataFromApi = async () => {
    //     const response = await fetch(
    //       `https://api.tvmaze.com/shows/${e.target.value}/episodes`
    //     );
    //     const fetchedEpisodes: IEpisode[] = await response.json();
    //     setEpisodesData(fetchedEpisodes);
    //   };
    //   getAndStoreDataFromApi();
    // }, []);
  }

    setSearchTerm(e.target.value);
  }
  const filteredEpisodes = isMatching(episodesData, searchTerm);
  return (
    <>
      <div>
        <select onChange={handleOnChange}>
          {episodes.map((show) => (
            <option key={show.id} value={show.id}>
              {show.name}
            </option>
          ))}
        </select>
        <input
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <p>
          {" "}
          Displaying {filteredEpisodes.length}/{episodesData.length} episodes{" "}
        </p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredEpisodes.map((element, index) => (
          <EpisodesDisplay key={index} {...element} />
        ))}
      </div>
      <div>
        <p>https://api.tvmaze.com/shows/{parseFloat(searchTerm)}/episodes</p>
      </div>

      <footer>
        This data has been obtained from{" "}
        <a href="https://www.tvmaze.com/">TVMaze.com</a>
      </footer>
    </>
  );
}
export default App;
