function Sugestao(props){
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imgUrlUser} alt=""/>
                <div class="texto">
                <div class="nome">{props.nameUser}</div>
                <div class="razao">Segue você</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    )
}

export default Sugestao