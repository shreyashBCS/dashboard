import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';

import './styles.css'
const Dashboard = () => {
    return (
        <Container fluid className="p-4">
            {/* Header */}
            <Row className="mb-4 mt-0">
                <Col>
                    <div className=" sticky-top d-flex justify-content-between align-items-center bg-warning p-1 rounded ">
                        <h4>Home</h4>
                        <div>
                            <Button variant="primary" className="me-3">Upgrade Plan</Button>
                            <span className="me-3"><Image src='/src/assets/Profile-Avatar-PNG-Free-Download.webp' style={{ width: '30px', height: 'auto' }} />   Shopgrocerynow</span>
                            <i className="bi bi-bell"></i>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* ---------------------------------------------------------------------------------------------------------------------------- */}
            {/* Info Cards */}
            <div className='border border-primary p-3 mb-3'>
                <Row className="mb-3 justify-content-evenly">
                    <Col md={2} className="border-end">
                        {/* <Card> */}
                        <Card.Body>
                            <Card.Title>Phone Number</Card.Title>
                            <Card.Text>+91 **********</Card.Text>
                        </Card.Body>
                        {/* </Card> */}
                    </Col>

                    <Col md={2} className="border-end">
                        {/* <Card> */}
                        <Card.Body>
                            <Card.Title>Display Name</Card.Title>
                            <Card.Text>Shopgrocerynow</Card.Text>
                        </Card.Body>
                        {/* </Card> */}
                    </Col>

                    <Col md={2} className="border-end">
                        {/* <Card> */}
                        <Card.Body>
                            <Card.Title>Messaging Limit</Card.Title>
                            <Card.Text>250/24hr</Card.Text>
                        </Card.Body>
                        {/* </Card> */}
                    </Col>

                    <Col md={2} className="border-end">
                        {/* <Card> */}
                        <Card.Body>
                            <Card.Title>Quality Rating</Card.Title>
                            <Card.Text className="text-success">High</Card.Text>
                        </Card.Body>
                        {/* </Card> */}
                    </Col>


                    <Col md={2} >
                        {/* <Card> */}
                        <Card.Body>
                            <Card.Title>Phone Number Status</Card.Title>
                            <Card.Text>Connected</Card.Text>
                        </Card.Body>
                        {/* </Card> */}
                    </Col>


                </Row>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------------------- */}
            {/* Dashboard Sections */}
            <Row className="mb-4">
                <Col md={6} style={{ width: "50" }}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Conversations</Card.Title>
                            <p>Free: 0</p>
                            <p>Paid: 0</p>
                            <p>Total: 0</p>
                            <p>Approx Cost: 0.00</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Messaging</Card.Title>
                            <p>Messages Sent: 0</p>
                            <p>Messages Delivered: 0</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Message Templates</Card.Title>
                            <p>Name: hello_world (en_US)</p>
                            <p>Status: <span className="text-success">Approved</span></p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Notifications</Card.Title>
                            <p>Name: Test Notification</p>
                            <p>Status: <span className="text-success">Completed</span></p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Card className='w-26'>
                        <Card.Body>
                            <Card.Title className='mb-3'>Contacts      1       </Card.Title>
                            <p className='mb-2'>Name: Number</p>
                            <p className='mb-2'>Test User : +91 **********</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Useful External Links</Card.Title>
                            <ul>
                                <li><a href="#">WhatsApp Group</a></li>
                                <li><a href="#">TrustPilot Review</a></li>
                                <li><a href="#">Meta for Developers Portal</a></li>
                                <li><a href="#">WhatsApp Manager</a></li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
