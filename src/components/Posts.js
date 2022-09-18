import React from "react";

function Post(props) {
    const [iconHeart, setIconHeart] = React.useState('heart-outline');
    const [iconColor, setIconColor] = React.useState('');
    const [iconBookmark, setIconBookmark] = React.useState("bookmark-outline");
    const [numLiked, setNumLiked] = React.useState(Number(props.nLiked));

    function hitLike() {
        if (iconHeart === 'heart-outline') {
            setIconHeart('heart');
            setIconColor('red');
            setNumLiked(numLiked + 1);

        } else {
            setIconHeart('heart-outline')
            setIconColor('');
            setNumLiked(numLiked - 1);
        }
    }

    function hitBookmark() {
        if (iconBookmark === 'bookmark-outline') {
            setIconBookmark('bookmark');
        } else {
            setIconBookmark('bookmark-outline')
        }
    }

    return (
        <il class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userIcon} alt={`user_${props.userName}`} />
                    {props.userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.postImage} onClick={hitLike} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={iconHeart} onClick={hitLike} class={iconColor}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={iconBookmark} onClick={hitBookmark}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likedIcon} />
                    <div class="texto">
                        Curtido por <strong>{props.likedBy}</strong> e <strong>outras {numLiked.toLocaleString().replace(',','.')} pessoas</strong>
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
            nLiked: '101523'
        },
        {
            userName: 'barked',
            userIcon: "./assets/img/barked.svg",
            postImage: "./assets/img/dog.svg",
            likedBy: "adorable_animals",
            likedIcon: "./assets/img/adorable_animals.svg",
            nLiked: '99159'
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
                nLiked={e.nLiked} />)}
        </ul>
    )

}