import React from 'react';
import './Homepage.css';

const Homepage = () => {
    return (
        <div className="Homepage">
            <header className="homepage-header">
                <div className="header-container">
                    <h1><span className="first-word">Mythic</span> <br></br><span className="second-word">Quest</span></h1>
                    <form className="start-container">
                        <input
                            className="username"
                            type="text"
                            placeholder="USERNAME"
                        />
                        <button className="button-start">start</button>
                    </form>
                </div>
            </header>
            <section className="tutorial">
                <h2>How to play ?</h2>
                <div className="tutorial-container">
                    <div className="left-section">
                    </div>
                    <div className="right-section">
                        <div>
                            <h3> <span>1</span> Use the arrows keys to move your character.</h3>
                            <img src="arrow-keys.png" alt="arrow-keys"></img>
                        </div>
                        <div>
                            <h3><span>2</span> Collect all the coins to buy stuff.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo</p>
                        </div>
                        <div>
                            <h3><span>3</span> Use your stuff to kill monsters.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <p>© All rights reserved - <span>Instinct Agency</span></p>
            </footer>
        </div >
    );
}

export default Homepage;