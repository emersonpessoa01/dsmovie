import { useState, useEffect } from "react";
// página de listagem
import Pagination from "../../components/Pagination";
import { BASE_URL } from "utils/requests";
import axios from "axios";
// import MovieStars from "components/MovieStars";
// import MovieScore from "components/MovieScore";
import MovieCard from "../../components/MovieCard";
import { MoviePage } from "types/movie";

function Listing() {
  const [pageNumber, setPageNumber] = useState(0);
  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=0`).then((response) => {
        const data = response.data as MoviePage;
      setPageNumber(data.number);
    });
  }, []);

  return (
    <>
      <p>{pageNumber}</p>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}
export default Listing;
