import './App.scss';
import { fetchMoviesTrending } from '~/services/MovieService';
function App() {
  fetchMoviesTrending();
  return <div className="App"></div>;
}

export default App;
