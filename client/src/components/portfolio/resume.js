import React, {Component} from 'react';
import {Progress} from 'reactstrap';
import {Row, Container, Col } from "reactstrap";

class Resume extends Component {
    render() {
        return (
            <Container className="resume">
                <Row xs="1">
                    <Col md='4' className="resume-left-col">
                        <div className="text-center">
                            <img
                                src="https://i.imgur.com/I80W1Q0.png"
                                alt="avatar"
                                className="avatar-img"
                            />
                        </div>
                        <div className="text-left">
                            <h2>Ari Rahim</h2>
                            <h4 style={{color: 'grey'}}>Programmer</h4>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                            <p>On projects page you can see some works I've been working on lately. I divide projects by
                                main technologies.</p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                            <h5 className="d-inline">Address</h5><p>21/2 Usonva, Tomsk, 634034</p>
                            <h5>Phone</h5>
                            <p>+79234292313</p>
                            <h5>Email</h5>
                            <p>aritomsk@yahoo.com</p>
                        </div>

                    </Col>
                    <Col md='8' className="resume-right-col">
                        <Row xs="1">
                            <Col xs="4"><h3>Education</h3></Col>
                            <Col>
                                <Row xs="1" className="education">
                                    <Col xs="6" sm="4" ><p>2006 - 2012</p></Col>
                                    <Col sm="8" style={{textAlign: 'left'}}>
                                        <h4 className="mt-0">National Research Tomsk Polytechnic University</h4>
                                        <p>bachelor's, and master's degrees in electronics and microelectronics</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <Row xs="1">
                            <Col xs="4"><h3>Experience</h3></Col>
                            <Col>
                                <Row xs="1" className="education">
                                    <Col xs="8" sm="4"><p>2013 - Present time</p></Col>
                                    <Col sm="8" style={{textAlign: 'left'}}>
                                        <h4 className="mt-0">Halabja University</h4>
                                        <p>University lecturer on physics and computer science</p>
                                        <uL>
                                            <li>Electricity and magnetism theory for the Department of Physics</li>
                                            <li>Information technology for the department of Social science</li>
                                            <li>Head of the Laboratory of Electronics (2014 – 2015)</li>
                                        </uL>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <Row xs="1" className="skills">
                            <Col xs="4"><h3>Skills</h3></Col>
                            <Col>
                                <Row xs="2">
                                    <Col sm="4"><p>JavaScript</p></Col>
                                    <Col sm="8"><Progress value={90} /></Col>
                                </Row>
                                <Row xs="2">
                                    <Col sm="4"><p>HTML/CSS</p></Col>
                                    <Col sm="8"><Progress value={80} /></Col>
                                </Row>
                                <Row xs="2">
                                    <Col sm="4"><p>Node.js/Express</p></Col>
                                    <Col sm="8"><Progress value={70} /></Col>
                                </Row>
                                <Row xs="2">
                                    <Col sm="4"><p>React/Redux</p></Col>
                                    <Col sm="8"><Progress value={85} /></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Resume;