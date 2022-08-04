import episodes from "./episodes.json";
import simpsons from "./simpsons.json";
import EpisodesDisplay from "./Components/EpisodesDisplay";
import { useEffect, useState } from "react";
import { isMatching } from "./utils/matchingEpisodes";
import { IEpisode } from "./utils/interface";
import { constants } from "buffer";

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  console.log("inside the App function");
  const [episodesData, setEpisodesData] = useState<IEpisode[]>([]);
  useEffect(() => {
    const getAndStoreDataFromApi2 = async () => {
      const response2 = await fetch(`https://api.tvmaze.com/shows/311/episodes`);
      const fetchedEpisodes2: IEpisode[] = await response2.json();
      setEpisodesData(fetchedEpisodes2);
    };
    getAndStoreDataFromApi2();
  }, []);


  function FetchEpisodesFromURL(event : any) {
    // const URLchosen = `https://api.tvmaze.com/shows/${event.target.value}/episode`\
  
    
  

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