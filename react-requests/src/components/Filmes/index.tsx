import { Movie } from "../../types/Movie";

interface FilmesProps {
  data: Movie;
}

const Filmes = ({data}: FilmesProps) => {
  return(
    <div>
      <img src={data.avatar} style={{width: 120}}/>
      {data.titulo}
    </div>
  );
}

export default Filmes;