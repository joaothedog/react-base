import { useEffect, useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.b7web.com.br/cinema/')
      .then((res) => {
        return res.json();
      }).then((json)=>{
        setMovies(json);
      });
  }, [movies])

  const handleLoadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then((res) => {
        return res.json();
      })
      .then((json)=>{
        setMovies(json);
      });
  }

  return(
    <div>
      <button onClick={handleLoadMovies}>Carregar filmes</button>
      <hr/>

      Total de filmes: {movies.length}
      <div>
        
      </div>
    </div>
  );
}

export default App;