import "./crud.scss";

import Create from "./Components/Create";
import Read from "./Components/Read";
// import filmas from "./Components/img/movie.svg";

function App() {
  return (
    <div className="app">
      <Create />
      <Read></Read>
    </div>
  );
}

export default App;
