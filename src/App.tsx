import episodes from "./episodes.json";
import EpisodesDisplay from "./Components/EpisodesDisplay";
import { useState } from "react";
import { isMatching } from "./utils/matchingEpisodes";

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredEpisodes = isMatching(episodes, searchTerm);
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
