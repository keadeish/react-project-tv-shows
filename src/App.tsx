import episodes from "./episodes.json";
import EpisodesDisplay from "./Components/EpisodesDisplay";
import { useEffect, useState } from "react";
import { isMatching } from "./utils/matchingEpisodes";
import { IEpisode } from "./utils/interface";

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  console.log("inside the App function");
  const [episodesData, setEpisodesData] = useState<IEpisode[]>([]);
  function FetchEpisodesFromURL(event : any) {
    console.log(`https://api.tvmaze.com/shows/${event.target.value}/episode`)
    
  useEffect(() => {
    const getAndStoreDataFromApi = async () => {
      const response = await fetch("`https://api.tvmaze.com/shows/${event.target.value}/episode`");
      const fetchedEpisodes: IEpisode[] = await response.json();
      setEpisodesData(fetchedEpisodes);
    };
    getAndStoreDataFromApi();
  }, []);
}
const filteredEpisodes = isMatching(episodesData, searchTerm);
  return (
    <>
      <div>
      <select onChange={FetchEpisodesFromURL}>
     {episodes.map((show) => (
    <option key ={show.id} value={show.id}>{show.name}</option>
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
