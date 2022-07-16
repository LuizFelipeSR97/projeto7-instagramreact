import Story from "./story"
import storiesInfo from "./server/serverStories"

function Stories(){
    return (
        <div class="stories">
            {storiesInfo.map(infos => <Story user={infos.user} imgUrl={infos.imgUrl}/>)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

export default Stories