function FilmsList({ films }) {
  return (
    <>
      <option key={films.id} value={films.original_title}>
        <img
          className="filmsilm-img"
          alt={films.title}
          src={`https://image.tmdb.org/t/p/w500/${films.poster_path}`}
        />
        {films.vote_average} Raiting, {films.release_date}
      </option>
    </>
  );
}
export default FilmsList;
