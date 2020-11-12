import React from 'react'
import Sigma from '../../static/images/sigma-logo.png'
import Image from '../../static/images/image1.PNG'
import '../../static/css/auth-page.css'
import ContainerForm from './container-form'
import {Row, Col} from 'reactstrap'
// the main component has all about the skeleton of the page
const Main = () =>{
    return(
        <div className="wrapper">
            <div className="auth-page">
                <img className="center" src={Sigma}/>
                <h3 className="title">Prueba de desarrollo Sigma</h3>
                <p className="container-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book.</p>
                <div className="wrapper-img-form">
                    <Row>
                        <Col sm={12} md={6}>
                            <img className="container-img" src={Image}/>
                        </Col>
                        <div className="container-form">
                            <Col md={12}>
                                <ContainerForm/>
                            </Col>
                        </div>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Main