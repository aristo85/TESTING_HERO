import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardLink, CardText, CardTitle, Col, Row, TabPane} from "reactstrap";

class Mern extends Component {
    render() {
        return (
            <TabPane tabId="1">
                <Row>
                    <Col sm="6" className="mb-1">
                        <Card body>
                            <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTp1c8n0U2o1266U5OGzOtMsVL4n9h_ILRJx90VdtgFd3qpl8qz&usqp=CAU" alt="Card image cap" />
                            <CardTitle><b><i>Online Shopping</i></b></CardTitle>
                            <CardText> A prototype travel site, it's main function is to act as an agent,
                                selling travel products and services on behalf of a supplier.
                                <u>
                                    <li>Responsive</li>
                                    <li>Separate user and admin authentication</li>
                                    <li>Deployment on Heroku through GitHub</li>
                                </u>
                            </CardText>
                            <CardBody>
                                <CardLink className="link btn" style={{color: "green"}}
                                          href="https://github.com/aristo85/online-shop-mern"
                                          target="_blank"
                                >GitHub</CardLink>
                                <CardLink className="link btn" style={{color: "green"}}
                                          href="https://salty-falls-25513.herokuapp.com/"
                                          target="_blank"
                                >Live Demo</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="6" className="mb-1">
                        <Card body>
                            <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTp1c8n0U2o1266U5OGzOtMsVL4n9h_ILRJx90VdtgFd3qpl8qz&usqp=CAU" alt="Card image cap" />
                            <CardTitle><b><i>Shopping List</i></b></CardTitle>
                            <CardText> A simple shopping list, the main aim to demonstrate connection between,
                                client side and backend, and deployment on Heroku.
                            </CardText>
                            <CardBody>
                                <CardLink className="link btn" style={{color: "green"}}
                                          href="https://github.com/aristo85/MERN_SHOPPING_LIST"
                                          target="_blank"
                                >GitHub</CardLink>
                                <CardLink className="link btn" style={{color: "green"}}
                                          href="https://lit-cliffs-22865.herokuapp.com/"
                                          target="_blank"
                                >Live Demo</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </TabPane>
        );
    }
}

export default Mern;