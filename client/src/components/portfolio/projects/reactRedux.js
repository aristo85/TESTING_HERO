import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardLink, CardText, CardTitle, Col, Row, TabPane} from "reactstrap";

class ReactRedux extends Component {
    render() {
        return (
            <TabPane tabId="2">
                <Row>
                    <Col sm="6" className="mb-1">
                        <Card body>
                            <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStBHymPydVtm6RcoG79arkSNG_4SWZ8E5Q-OhzVSo3BvIMnSfz&usqp=CAU" alt="Card image cap" />
                            <CardTitle><b><i>Cart with promocode</i></b></CardTitle>
                            <CardText>Cart of online-shop page with discount on PROMOCODE</CardText>
                            <CardBody>
                                <CardLink className="link btn" style={{color: "green"}}
                                          href="https://github.com/aristo85/Shopping_Cart_subtotal"
                                          target="_blank"
                                >GitHub</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="6" className="mb-1">
                        <Card body>
                            <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStBHymPydVtm6RcoG79arkSNG_4SWZ8E5Q-OhzVSo3BvIMnSfz&usqp=CAU" alt="Card image cap" />
                            <CardTitle><b><i>Library</i></b></CardTitle>
                            <CardText>CRUD operation on a list of book from an API with Axios</CardText>
                            <CardBody>
                                <CardLink className="link btn" style={{color: "green"}}
                                          href="https://github.com/aristo85/BookServiceClient"
                                          target="_blank"
                                >GitHub</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="6" className="mb-1">
                        <Card body>
                            <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStBHymPydVtm6RcoG79arkSNG_4SWZ8E5Q-OhzVSo3BvIMnSfz&usqp=CAU" alt="Card image cap" />
                            <CardTitle><b><i>Drum machine</i></b></CardTitle>
                            <CardText>Virtual prototype of Drum.</CardText>
                            <CardBody>
                                <CardLink className="link btn" style={{color: "green"}}
                                          href="https://codepen.io/Aristo85/pen/zgzgvr"
                                          target="_blank"
                                >CodePen</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="6" className="mb-1">
                        <Card body>
                            <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStBHymPydVtm6RcoG79arkSNG_4SWZ8E5Q-OhzVSo3BvIMnSfz&usqp=CAU" alt="Card image cap" />
                            <CardTitle><b><i>Markdown Previewer</i></b></CardTitle>
                            <CardText>Made with marked.js library.</CardText>
                            <CardBody>
                                <CardLink className="link btn" style={{color: "green"}}
                                          href="https://codepen.io/Aristo85/pen/pMPrYe"
                                          target="_blank"
                                >CodePen</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </TabPane>
        );
    }
}

export default ReactRedux;