function Post(props) {
    return (
        <il class="post">
        <div class="topo">
            <div class="usuario">
                <img src={props.userIcon} alt={`user_${props.userName}`}/>
                {props.userName}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div class="conteudo">
            <img src={props.postImage} />
        </div>

        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.likedIcon} />
                <div class="texto">
                    Curtido por <strong>{props.likedBy}</strong> e <strong>outras {props.nLiked} pessoas</strong>
                </div>
            </div>
        </div>
    </il>
    )
}
export default function Posts() {
    const postContent = [
        {
            userName: 'meowed',
            userIcon: "./assets/img/meowed.svg",
            postImage: "./assets/img/gato-telefone.svg",
            likedBy: "respondeai",
            likedIcon: "./assets/img/respondeai.svg",
            nLiked: '101.523'
        },
        {
            userName: 'barked',
            userIcon: "./assets/img/barked.svg",
            postImage: "./assets/img/dog.svg",
            likedBy: "adorable_animals",
            likedIcon: "./assets/img/adorable_animals.svg",
            nLiked: '99.159'
        },
    ];
    
    return (
        <ul class="posts">
            {postContent.map((e) => <Post 
            userName={e.userName}
            userIcon={e.userIcon}
            postImage={e.postImage}
            likedBy={e.likedBy}
            likedIcon={e.likedIcon}
            nLiked={e.nLiked}/>)}
        </ul>
    )

}