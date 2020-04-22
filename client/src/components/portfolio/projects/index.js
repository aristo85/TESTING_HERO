import React, {Component} from 'react';
import { TabContent, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Mern from "./mern";
import ReactRedux from "./reactRedux";
import ExpressNode from "./expressNode";
import Jquery from "./jquery";
import D3 from "./d3";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: '1' };
    }

    toggle = tab => {
        if(this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            })
        }
    };

    render() {
        return (
            <div>
                <div className="proj-bg" />
                <Nav style={{backgroundColor: '#f1f1f1', marginTop: "-8px"}} tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            MERN
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            React-Redux
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Express
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.toggle('4'); }}
                        >
                            Jquery
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '5' })}
                            onClick={() => { this.toggle('5'); }}
                        >
                            D3.js
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <Mern />
                    <ReactRedux />
                    <ExpressNode />
                    <Jquery />
                    <D3 />
                </TabContent>
            </div>
        );
    }
}

export default Index;