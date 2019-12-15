import React from 'react';

const Navitem = props => {
    const pageURI = window.location.pathname+window.location.search
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
    return (
        <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </a>
    </li>
    );
}

class Navigation extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Sites<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/words">Words</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/shots.js">Shots</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/sounds">Sounds</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                </ul>
                </div>
                </nav>
        )
    }
}

export default Navigation;