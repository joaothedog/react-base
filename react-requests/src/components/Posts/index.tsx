import { Post } from "../../types/Post";

interface PropsPosts {
  data: Post,
}

const Posts = ({data} : PropsPosts) => {
  return(
    <div>
      <h3>{data.title}</h3>
      #{data.id} - User: {data.userId}
      <p>{data.body}</p>
    </div>
  );
}

export default Posts;