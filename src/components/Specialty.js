import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import housing from '../assets/housing.jpg'
import '../styles/Specialties.css'

function Specialty(image, title, description) {
    return (
        <div>
            <Container className='specialty-container'>
                <div className="specialty-background">
                    <img src={housing} alt="housing" />
                    <h1 className="specialty-title">HOUSING LAW</h1>
                </div>
            </Container>
        </div>
    )
}

const styles = {
    background: {
        width: '80vw',
        height: 'auto',
        padding: '3rem',
    },
    title: {
        display: 'inline-block',
        position: 'relative',
    }
}

export default Specialty