import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";

class LandingPage extends Component {
    render() {
        let i;
        let stars = [];
        for (i = 0; i < 20; i++) {
            stars.push(<div key={i} style={{position: "fixed", top: `${(Math.random() * 11)*2}%`,
                left: `${(Math.random() * 11)*10}%`, zIndex: 1,
                animationDuration: `${i/30+Math.floor(Math.random())+1}s`}}
                            id="ball">{''}</div>)
        }
        return (
            <div>
                <div className="bG">
                    <div className="stars position-fixed">
                        {stars}
                    </div>
                </div>
                <div className="landing-grid" style={{width: "100%", margin: "auto"}}>
                    {/*{this.props.stars}*/}
                    <Grid>
                        <Cell col={12} className="container container-fluid">
                            <img
                                src="https://i.imgur.com/I80W1Q0.png"
                                alt="avatar"
                                className="avatar-img"
                            />
                            <div className="banner-text">
                                <h1 style={{fontFamily:'Lucida Handwriting'}}>Full stack web developer</h1>

                                <hr />
                                <p>HTML/CSS | Bootstrap | JavaScript | React | Redux | MongoDB | Express | Node | Jquery | D3.js</p>
                                <div className="social-links">
                                    <a href="https://github.com/aristo85" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square" aria-hidden="true" />
                                    </a>
                                    <a href="https://www.freecodecamp.org/fcc3a6b5c4f-d378-41d9-a62a-27c6391f45cc" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-free-code-camp" aria-hidden="true" />
                                    </a>
                                    <a href="https://codepen.io/Aristo85" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-codepen" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            </div>

        );
    }
}

export default LandingPage;