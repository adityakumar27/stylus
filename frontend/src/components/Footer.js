import React from 'react'
import { Container ,Row, Col } from 'react-bootstrap'

const Footer = () => {
    return<footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                  Copyright &copy; Stylus Stationery  
                </Col>
            </Row>
        </Container>
        <footer class="footer bg-dark">
            <div class="social">
                <a href="https://www.facebook.com/Stylus-Stationery-105264121914230"><i class="fab fa-facebook fa-2x"></i></a>
                <a href="https://www.instagram.com/stylus_stationery2021/"><i class="fab fa-instagram fa-2x"></i></a>
            </div>
        </footer>
    </footer>
}

export default Footer
