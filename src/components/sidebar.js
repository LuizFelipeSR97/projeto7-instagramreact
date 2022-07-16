import Sugestao from "./sugestao"

function Sidebar(){
    return (
        <div class="sidebar">

            <div class="usuario">
                <img src="assets/img/catanacomics.svg" alt=""/>
                <div class="texto">
                <strong>catanacomics</strong>
                Catana
                </div>
            </div>

            <div class="sugestoes">

                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                <Sugestao imgUrlUser="assets/img/bad.vibes.memes.svg" nameUser="bad.vibes.memes" />
                <Sugestao imgUrlUser="assets/img/chibirdart.svg" nameUser="chibirdart" />
                <Sugestao imgUrlUser="assets/img/razoesparaacreditar.svg" nameUser="razoesparaacreditar" />
                <Sugestao imgUrlUser="assets/img/adorable_animals.svg" nameUser="adorable_animals" />
                <Sugestao imgUrlUser="assets/img/smallcutecats.svg" nameUser="smallcutecats" />

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