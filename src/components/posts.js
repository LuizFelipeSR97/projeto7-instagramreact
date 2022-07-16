import Post from "./post"
import postsInfos from "./server/serverPosts"

function Posts(){
    return (
        <div class="posts">

            {postsInfos.map(postagem => <Post imgUrlUser={postagem.imgUrlUser} nameUser={postagem.nameUser} imgUrlContent={postagem.imgUrlContent} imgUrlLike={postagem.imgUrlLike} nameLike={postagem.nameLike}/>)}

        </div>
    )
}

export default Posts