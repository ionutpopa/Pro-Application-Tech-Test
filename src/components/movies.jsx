import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { addMovies } from "../redux/actions";
import axios from "axios";
import Navbar from "./navbar";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  let fakeKey = 0;
  useEffect(() => {
    let mounted = true;
    const fetchMovies = async () => {
      const response = await axios.get("https://api.tvmaze.com/shows");
      if (mounted) {
        setMovies(response.data.slice(0, 10));
      }
      dispatch(addMovies(response.data.slice(0, 10)));
    };
    fetchMovies();
    return () => {
      mounted = false;
    };
  }, [movies, dispatch]);

  return (
    <div>
      <Navbar />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Movie name</th>
            <th scope="col">Genres</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            return (
              <tr key={fakeKey++}>
                <td>{movie.name}</td>
                <td>{movie.genres}</td>
                <td>{movie.rating.average}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.data,
  };
};

export default connect(mapStateToProps)(Movies);
