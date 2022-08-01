import episodes from "./episodes.json";

function App(): JSX.Element {
  return (
    <div>
      {episodes.map((element, index) => (
        <li key={index}>{element.name}</li>
      ))}
    </div>
  );
}
export default App;
