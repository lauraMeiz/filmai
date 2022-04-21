function FilmsList({ films, show }) {
  return (
    <>
      <option
        onClick={() => show(films)}
        className="option"
        key={films.id}
        value={films.original_title}
      >
        <div> {films.original_title}</div>
        <div className="raiting">
          {films.vote_average} Raiting, {films.release_date.slice(0, 4)}
        </div>
      </option>
    </>
  );
}
export default FilmsList;
