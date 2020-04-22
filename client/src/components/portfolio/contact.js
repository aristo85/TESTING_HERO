import React, {Component} from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="contact-body" />
                <Container className="contact-layout">
                    <Row xs="1" md="2">
                        <Col className="ok">
                            <h2>Ari Rahim</h2>
                            <div className="w-50 m-auto">
                                <img className='imgg'
                                     src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                                     alt="avatar"
                                />
                            </div>
                            <p style={{margin: 'auto', padding: '1em'}}>If you like my work and have
                                project Idea to work on, just send me direct message or get in touch through social
                                sites listed below.</p>
                            {/*<a href="https://www.facebook.com/ari.rahim.56" target="_blank"><i className="fa fa-fasebook-square"/></a>*/}
                            <a href="https://www.facebook.com/ari.rahim.56"
                               rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true" />
                            </a>&nbsp;&nbsp;
                            <a href="https://vk.com/id339599349"
                               rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-vk" aria-hidden="true" />
                            </a>
                        </Col>
                        <Col>
                            <h2>Contact me</h2>
                            <ListGroup className="contact-i">
                                <ListGroupItem className="border-0 mr-auto">
                                    <Row>
                                        <Col><i className="fa fa-phone-square" /></Col>
                                        <Col className="m-auto"><p>+79234292313</p></Col>
                                    </Row>
                                </ListGroupItem>
                                <ListGroupItem className="border-0 mr-auto">
                                    <Row>
                                        <Col><i className="fa fa-envelope-square" /></Col>
                                        <Col className="m-auto"><p>aritomsk@yahoo.com</p></Col>
                                    </Row>
                                </ListGroupItem>
                                <ListGroupItem className="border-0 mr-auto">
                                    <Row>
                                        <Col><i className="fa fa-skype" /></Col>
                                        <Col className="m-auto"><p>ari.rahim1</p></Col>
                                    </Row>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contact;