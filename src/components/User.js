import React from 'react';

export default function User() {
    const [user, setUser] = React.useState('Catana');
    const [icon, setIcon] = React.useState('./assets/img/catanacomics.svg');

    return (
        <div class="usuario">
        <img src={icon} onClick={() => setIcon(prompt('Please input an image url you wish to be your icon'))}/>
        <div class="texto">
            <strong>{user}'s Page</strong>
            <span>
                {user}
                <ion-icon name="pencil" onClick={() => setUser(prompt("What's the name you would like here?"))}></ion-icon>
            </span>
        </div>
    </div>
    );
    
}