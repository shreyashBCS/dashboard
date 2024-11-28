import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Offcanvas, Nav } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Sidebar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button
                onClick={handleShow}
                className="btn btn-light p-2"
                style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1000 }}
            >
                <i className="bi bi-list" style={{ fontSize: '24px' }}></i>
            </button>

            <Offcanvas style={{ backgroundColor: '#018B96', width: "5" }} show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>WANotifier</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link as={Link} to="/dashboard" className="text-white">Dashboard</Nav.Link>
                        <Nav.Link href="/about" className="text-white">Message Template</Nav.Link>
                        <Nav.Link href="/services" className="text-white">Contact</Nav.Link>
                        <Nav.Link href="/contact" className="text-white">Send Message</Nav.Link>
                        <Nav.Link href="/contact" className="text-white">Inbox </Nav.Link>
                        <Nav.Link href="/contact" className="text-white"> Integration</Nav.Link>


                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Sidebar;