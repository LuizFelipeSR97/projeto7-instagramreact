import Stories from "./stories"
import Posts from "./posts"
import Sidebar from "./sidebar"

function Corpo(){
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
                <Sidebar />
        </div>
    )
}

export default Corpo