function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.userIcon} />
            </div>
            <div class="usuario">
                {props.userName}
            </div>
        </div>
    )
}

export default function Stories() {
    const contentStories = [
        {
            userName: '9gag',
            get userIcon() {
                return `assets/img/${this.userName}.svg`
            }
        },
        {
            userName: 'meowed',
            get userIcon() {
                return `assets/img/${this.userName}.svg`
            }
        },
        {
            userName: 'barked',
            get userIcon() {
                return `assets/img/${this.userName}.svg`
            }
        },
        {
            userName: 'nathanwpylestrangeplanet',
            get userIcon() {
                return `assets/img/${this.userName}.svg`
            }
        },
        {
            userName: 'wawawicomics',
            get userIcon() {
                return `assets/img/${this.userName}.svg`
            }
        },
        {
            userName: 'respondeai',
            get userIcon() {
                return `assets/img/${this.userName}.svg`
            }
        },
        {
            userName: 'filomoderna',
            get userIcon() {
                return `assets/img/${this.userName}.svg`
            }
        },
        {
            userName: 'memeriagourmet',
            get userIcon() {
                return `assets/img/${this.userName}.svg`
            }
        }
    ];

    return (
        <div class="stories">
            {contentStories.map((c) => <Story userName={c.userName} userIcon={c.userIcon} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}