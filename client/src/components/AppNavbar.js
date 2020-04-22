import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
// making auto close drawer of navbar if its open by eventListener and using ref!!
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    handleClick = (e) => {
        if(this.node.contains(e.target)) {
            // alert('hi');
            return;
        }
        if(this.state.isOpen){
            this.toggle();
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return (
            <div className=" Z-index "
                 style={{ position: "fixed", width: "100%", top: 0, zIndex: 2, height: '8vh'}}
                 ref={node => this.node = node}
            >
                <Navbar color="dark" dark  expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">PORTFOLIO</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                {/*<NavItem>*/}
                                {/*    <NavLink className="text-white" href="/about">*/}
                                {/*        About Me*/}
                                {/*    </NavLink>*/}
                                {/*</NavItem>*/}
                                <NavItem>
                                    <NavLink className="text-white" href="/project">
                                        Projects
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="text-white" href="/resume">
                                        Resume
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="text-white" href="/contact">
                                        Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;