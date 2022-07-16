function User(props){
    return (
        <div class="usuario">
            <img src={props.imgUrl} alt=""/>
            <div class="texto">
            <strong>{props.username}</strong>
                {props.realName}
            </div>
        </div>
    )
}

export default User