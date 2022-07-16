import Post from "./post"

function Posts(){
    return (
        <div class="posts">
            <Post imgUrlUser="assets/img/meowed.svg" nameUser="meowed" imgUrlContent="assets/img/gato-telefone.svg" imgUrlLike="assets/img/respondeai.svg" nameLike="respondeai"/>
            <Post imgUrlUser="assets/img/barked.svg" nameUser="barked" imgUrlContent="assets/img/dog.svg" imgUrlLike="assets/img/adorable_animals.svg" nameLike="adorable_animals"/>
        </div>
    )
}

export default Posts