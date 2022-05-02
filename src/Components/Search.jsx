import { useEffect, useState } from "react";
// import Filmas from "./Filmas";
import filmas from "../Components/img/movie.svg";
import Filmas from "./Filmas";
import FilmsList from "./FilmsList";

function Search() {
  const [filmai, setFilmai] = useState([]);
  const [search, setSearch] = useState("");
  const [choice, setChoice] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  console.log(filmai.id);

  const show = (filmas) => {
    setChoice(filmas);
    setFilmai("");
    setSearch(filmas.original_title);
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
            placeholder="Search..."
            onChange={handleChange}
            value={search}

            //value={search ? choice.original_title : ""}
          />
        </div>
        <div className="list">
          <ul id="filmai">
            {filmai.length !== 0
              ? filmai.slice(0, 8).map((f) => (
                  <FilmsList
                    key={f.id}
                    show={show}
                    onClick={() => show(filmas)}
                    films={f}
                  >
                    {choice.original_title}
                  </FilmsList>
                ))
              : ""}
          </ul>
        </div>

        {choice && <Filmas f={choice}></Filmas>}
      </div>
    </>
  );
}
export default Search;
