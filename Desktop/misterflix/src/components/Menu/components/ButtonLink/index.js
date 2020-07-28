import React from 'react';

function ButtonLink(props) {
// props => {className: "oque alguém passar", href: "/"}
console.log(props);
    return (
        <a href={props.href} className={props.className}>
            Novo vídeo
        </a>

    );
}

export default ButtonLink;