import Sugestao from "./sugestao"
import User from "./user"
import user from "./server/serverUser"
import sugestoes from "./server/serverSuggestions"

function Sidebar(){
    return (
        <div class="sidebar">
            
            <User imgUrl={user.imgUrl} username={user.username} realName={user.realName} />

            <div class="sugestoes">

                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugestoes.map(sugest => <Sugestao imgUrlUser={sugest.imgUrlUser} nameUser={sugest.nameUser} />)}

            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

export default Sidebar