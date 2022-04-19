import { useEffect, useState } from "react";
// import Filmas from "./Filmas";
import filmas from "../Components/img/movie.svg";
import Filmas from "./Filmas";

function Search({ handleChange }) {
  const [filmai, setFilmai] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=90a7b285b1f5effd9343b4ca3f7ad54f&language=en-US&query=search"
    )
      .then((res) => res.json())

      .then((result) => {
        console.log(result.results);

        setFilmai(result.results);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div>
        <div className="top">
          <input
            style={{ color: "white" }}
            type="text"
            list="filmai"
            autoFocus
            onChange={handleChange}
          />
          <img style={{ width: "30px" }} src={filmas} alt="filmas" />
          <datalist id="filmai">
            {filmai.map((f) => (
              <>
                {" "}
                <option key={f.id} value={f.original_title}>
                  <img
                    className="film-img"
                    alt={f.title}
                    src={`https://image.tmdb.org/t/p/w500/${f.poster_path}`}
                  />
                  {/* {f.original_title} */}
                  {f.vote_average} Raiting, {f.release_date}
                </option>
              </>
            ))}
          </datalist>
        </div>

        <Filmas filmas={filmai}></Filmas>
      </div>
    </>
  );
}
export default Search;
