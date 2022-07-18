import Curtida from "./curtida"

let classname = "md hydrated"
let ionName="heart-outline"

function Post(props){

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgUrlUser} alt=""/>
                    {props.nameUser}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="conteudo">
                <img src={props.imgUrlContent} onDoubleClick={() => alert("Não consegui fazer curtir")} alt=""/>
            </div>
            <div class="fundo">
                <div class="acoes">
                    <div>
                        <Curtida />
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="curtidas">
                    <img src={props.imgUrlLike} alt=""/>
                    <div class="texto">
                        Curtido por <strong>{props.nameLike}</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post