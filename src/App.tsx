import episodes from "./episodes.json";
import EpisodesDisplay from "./Components/EpisodesDisplay";

function App(): JSX.Element {
  return (
    <>
      <div>
        {episodes.map((element, index) => (
          <EpisodesDisplay
            key={index}
            name={element.name}
            season={element.season}
            image={element.image}
            summary={element.summary}
          />
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
