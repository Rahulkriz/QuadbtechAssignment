import { Link } from "react-router-dom";
function Movies(props) {
  return (
    <div className="container">
      <div
        class="card-header text-white text-center mx-auto p-2"
        style={{ margin: "10px" }}
      >
        <h4> Movie List </h4>
      </div>
      <div
        className="column"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {props.movies.map((movie) => (
          <div className="col-md-3" key={movie.show.id}>
            <div className="card mb-3 shadow-sm">
              <img
                className="card-img-top"
                src={
                  movie.show.image?.medium
                    ? movie.show.image?.medium
                    : "https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg"
                }
                alt="movie-poster"
              />
              <div className="card-body">
                <h2 className="card-title">{movie.show.name}</h2>
                <h3 className="card-title">{movie.show.language}</h3>

                <h3 className="card-title">{movie.show.premiered}</h3>

                <Link to={`/movie/${movie.show.id}`}>
                  <button className="btn btn-sm btn-primary">
                    View Summary
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
