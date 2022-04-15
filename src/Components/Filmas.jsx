import star from "./img/star.svg";

function Filmas({ filmas }) {
  return (
    <>
      <div className="film">
        <img
          className="film-img"
          alt={filmas.title}
          src={`https://image.tmdb.org/t/p/w500/${filmas.poster_path}`}
        />
        <div className="description">
          <h3>
            ({filmas.release_date}){"  "}
            {filmas.title}
          </h3>

          <div className="vote-star">
            <img className="star" src={star} alt={filmas.vote_average} />
            <div>
              <div>
                {filmas.vote_average}
                <span>/10</span>
              </div>
              <div className="vote">{filmas.vote_count}</div>
            </div>
          </div>
          <div>{filmas.overview}</div>
        </div>
      </div>
    </>
  );
}
export default Filmas;
