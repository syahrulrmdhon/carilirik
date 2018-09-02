import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark mb-5">
                    <span className="navbaer-brand mb-0 h1 mx-auto" style={{color:'wheat'}}>CariLirik</span>
                </nav>
            </div>
        );
    }
}

export default Navbar;