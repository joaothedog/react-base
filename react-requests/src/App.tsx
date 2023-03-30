import { useEffect, useState } from "react";
import Filmes from "./components/Filmes";
import { Movie } from "./types/Movie";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  // const getMovies = () => {
  //   fetch('https://api.b7web.com.br/cinema/')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json)=>{
  //       setMovies(json);
  //     })
  // }

  const getMovies = async () => {
    let res = await fetch('https://api.b7web.com.br/cinema/');
    let json = await res.json();
    setMovies(json);
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
          <Filmes data={item} key={key}/>
        ))}
      </div>
    </div>
  );
}

export default App;