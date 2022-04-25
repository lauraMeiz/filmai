function FilmsList({ films, show }) {
  return (
    <>
      <li
        onClick={() => show(films)}
        className="option"
        key={films.id}
        value={films.original_title}
      >
        <div className="raiting">
          <div style={{ color: "black" }}> {films.original_title}</div>
          <div style={{ opacity: "0.8" }}>
            {films.vote_average} Raiting, {films.release_date.slice(0, 4)}
          </div>
        </div>
      </li>
    </>
  );
}
export default FilmsList;
