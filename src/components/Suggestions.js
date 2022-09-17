function Suggestion(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.sugIcon} />
                <div class="texto">
                    <div class="nome">{props.sugName}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}
export default function Suggestions() {
    const suggsContent = [
        {
            sugName: "bad.vibes.memes",
            get sugIcon() {
                return `./assets/img/${this.sugName}.svg`
            }
        },
        {
            sugName: "chibirdart",
            get sugIcon() {
                return `./assets/img/${this.sugName}.svg`
            }
        },
        {
            sugName: "razoesparaacreditar",
            get sugIcon() {
                return `./assets/img/${this.sugName}.svg`
            }
        },
        {
            sugName: "adorable_animals",
            get sugIcon() {
                return `./assets/img/${this.sugName}.svg`
            }
        },
        {
            sugName: "smallcutecats",
            get sugIcon() {
                return `./assets/img/${this.sugName}.svg`
            }
        },
    ];
    
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggsContent.map((s) => <Suggestion sugName={s.sugName} sugIcon={s.sugIcon}/>)}

        </div>
    )

}