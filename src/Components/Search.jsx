import { useEffect, useState } from "react";
// import Filmas from "./Filmas";
import filmas from "../Components/img/movie.svg";
import Filmas from "./Filmas";
import FilmsList from "./FilmsList";

function Search() {
  const [filmai, setFilmai] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    if (search.length > 2) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=90a7b285b1f5effd9343b4ca3f7ad54f&language=en-US&query=${search}`
      )
        .then((res) => res.json())

        .then((result) => {
          console.log(result);

          setFilmai(result.results);
        })
        .catch((error) => console.log(error));
    }
  }, [search]);

  return (
    <>
      <div>
        <div className="top">
          <img style={{ width: "30px" }} src={filmas} alt="filmas" />
          <input
            style={{ color: "white", paddingLeft: "50px" }}
            type="text"
            list="filmai"
            autoFocus
            onChange={handleChange}
          />
        </div>
        <datalist id="filmai">
          {filmai.length > 0 &&
            filmai.map((f) => (
              <>
                {" "}
                <FilmsList films={f}></FilmsList>
              </>
            ))}
        </datalist>
        {/* </div> */}

        <Filmas filmas={filmai}></Filmas>
      </div>
    </>
  );
}
export default Search;
