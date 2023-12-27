import axios from "./customize-axios";

const fetchMoviesTrending = async () => {
  const res = await axios.get("trending/movie/day?language=en-US");
  console.log(res);
};

export { fetchMoviesTrending };
