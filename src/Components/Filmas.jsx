import star from "./img/star.svg";

function Filmas({ f }) {
  return (
    <>
      <li>
        <div key={f.id} className="film">
          <img
            className="film-img"
            alt={f.title}
            src={`https://image.tmdb.org/t/p/w500/${f.poster_path}`}
          />
          <div className="description">
            <h3>
              ({f.release_date.slice(0, 4)}){"  "}
              {f.original_title}
            </h3>

            <div className="vote-star">
              <img className="star" src={star} alt={f.vote_average} />
              <div>
                <div>
                  {f.vote_average}
                  <span>/10</span>
                </div>
                <div className="vote">{f.vote_count} vote</div>
              </div>
            </div>
            <div>{f.overview}</div>
          </div>
        </div>
      </li>
    </>
  );
}
export default Filmas;
