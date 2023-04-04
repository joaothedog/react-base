import {Post} from '../../../types/Post';

interface PropsPosts {
  data: Post,
}

const PostItem = ({data} : PropsPosts) => {
  return(
    <div style={{marginBottom: 30}}>
      <h3>{data.title}</h3>
      #{data.id} - User: {data.userId}
      <p>{data.body}</p>
    </div>
  );
}

export default PostItem;