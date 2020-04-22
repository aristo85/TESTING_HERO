import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardLink, CardText, CardTitle, Col, Row, TabPane} from "reactstrap";

class D3 extends Component {
    render() {
        return (
            <TabPane tabId="5">
                <Row>
                    <Col sm="6" className="mb-1">
                        <Card body>
                            <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8JDuvS3eeLJbl_r91Cqr6BmfBY9dtQXXOf2XZSsM_BN2htOg6&usqp=CAU" alt="Card image cap" />
                            <CardTitle><b><i>Choropleth map</i></b></CardTitle>
                            <CardText>Representing the educational attainment by county in the U.S.</CardText>
                            <CardBody>
                                <CardLink className="link btn" style={{color: "green"}}
                                          href="https://codepen.io/Aristo85/pen/vYBGPje"
                                          target="_blank"
                                >CodePen</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="6" className="mb-1">
                        <Card body>
                            <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8JDuvS3eeLJbl_r91Cqr6BmfBY9dtQXXOf2XZSsM_BN2htOg6&usqp=CAU" alt="Card image cap" />
                            <CardTitle><b><i>Heat map</i></b></CardTitle>
                            <CardText>Monthly global temperature from 1753 to 2015 represented as a heat map</CardText>
                            <CardBody>
                                <CardLink className="link btn" style={{color: "green"}}
                                          href="https://codepen.io/Aristo85/pen/BXejEj"
                                          target="_blank"
                                >CodePen</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="6" className="mb-1">
                        <Card body>
                            <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8JDuvS3eeLJbl_r91Cqr6BmfBY9dtQXXOf2XZSsM_BN2htOg6&usqp=CAU" alt="Card image cap" />
                            <CardTitle><b><i>Scatterplot graph</i></b></CardTitle>
                            <CardText>Graph representing Doping in Professional Bicycle Racing</CardText>
                            <CardBody>
                                <CardLink className="link btn" style={{color: "green"}}
                                          href="https://codepen.io/Aristo85/pen/dxgOzq"
                                          target="_blank"
                                >CodePen</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="6" className="mb-1">
                        <Card body>
                            <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8JDuvS3eeLJbl_r91Cqr6BmfBY9dtQXXOf2XZSsM_BN2htOg6&usqp=CAU" alt="Card image cap" />
                            <CardTitle><b><i>Bar Chart</i></b></CardTitle>
                            <CardText>Representing the evolution of the US GDP</CardText>
                            <CardBody>
                                <CardLink className="link btn" style={{color: "green"}}
                                          href="https://codepen.io/Aristo85/pen/pMaZZN"
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

export default D3;