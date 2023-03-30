import { useEffect, useState } from "react";
import Filmes from "./components/Filmes";
import { Movie } from "./types/Movie";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);


  const getMovies = async () => {
    let res = await fetch('https://api.b7web.com.br/cinema/');
    let json = await res.json();
    setMovies(json);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, [movies])


  return(
    <div>
      <hr/>

      Total de filmes: {loading ? 'Carregando total de filmes...' : movies.length}
      {!loading &&
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          {movies.map((item, key) => (
            <Filmes data={item} key={key}/>
          ))}
        </div>
      }
      
    </div>
  );
}

export default App;