import { useEffect, useState } from "react";
import Filmes from "./components/Filmes";
import { Movie } from "./types/Movie";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const getMoviesTwo = () => {
    fetch('https://api.b7web.com.br/cinema/').then((res) => {
      return res.json();
    }).then((json) => {
      setMovies(json);
    })
  }


  const getMovies = async () => {
    try {
      setLoading(true)
      let res = await fetch('https://api.b7web.com.br/cinema/');
      let json = await res.json();
      setMovies(json);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert('Erro, tente novamente!')
      console.log(error);
    }
    
  }

  useEffect(() => {
    getMovies();
  }, [])


  return(
    <div>
      <hr/>

      Total de filmes: {loading && movies.length > 0 ? 'Carregando total de filmes...' : movies.length}
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