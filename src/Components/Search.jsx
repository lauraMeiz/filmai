import { useState } from "react";
import Filmas from "./Filmas";

function Search() {
  const [filmai, setFilmai] = useState([]);

  fetch(
    "https://api.themoviedb.org/3/movie/550?api_key=90a7b285b1f5effd9343b4ca3f7ad54f&language=en-US&query=search/movie"
  )
    .then((res) => res.json())

    .then((result) => {
      console.log();
      setFilmai(result);
    })
    .catch((error) => console.log(error));

  return (
    <>
      <div>
        <Filmas filmas={filmai}></Filmas>
      </div>
      {/* <ul>{filmai.map((filmas, i) => console.log(filmas))}</ul> */}
    </>
  );
}
export default Search;
