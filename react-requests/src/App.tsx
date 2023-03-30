import { useEffect, useState } from "react";
import { Movie } from "./types/Movie";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then((res) => {
        return res.json();
      })
      .then((json)=>{
        setMovies(json);
      })
  }

  useEffect(() => {
    // getMovies();
  }, [movies])

  const handleLoadMovies = () => {
    getMovies();
  }

  return(
    <div>
      <button onClick={handleLoadMovies}>Carregar filmes</button>
      <hr/>

      Total de filmes: {movies.length}
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        {movies.map((item, key) => (
          <div key={key}>
            <img src={item.avatar} style={{width: 120}}/>
            {item.titulo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;