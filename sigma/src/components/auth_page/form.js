import React, {useState} from 'react'
import {Button, Row, Col, Label} from 'reactstrap'
import {LocalForm, Control, Errors} from 'react-redux-form'
import Modal_ from './modal'
import useFetchPost from '../../hooks/usePost'
// validations to do inside the form
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => !(val) || (val.length >= len)


const Form_ = ({data}) =>{
    // get data of the objet in this case a departments
    var departamentos = Object.keys(data);
    // use a hook to control form
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    // handle the value of the first selector department to allow the second selector city
    var [depart, setDepart] = useState("");
    const handleSelector = (e) => {
        setDepart(e.target.value);
    }
    // function when the form its submit in this case do a post to store the data in database
    const submitForm = async (values) =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({'departamento': values.departamento, 
                                'ciudad': values.ciudad,
                                'nombre': values.nombre,
                                'correo': values.correo})
        };
        var url = 'http://localhost:8000/api/users/'
        var response = await fetch(url,requestOptions);
        console.log(response)
    }
    return(
        <LocalForm onSubmit={(values)=>submitForm(values)}>
            <Row>
                <Label md={12} className="form-label"> <strong>Departamento*</strong> </Label>
                <Col md={12}>
                    <Control.select onChange={handleSelector} value={depart} model=".departamento" id='departamento' 
                            name='departamento'
                            className="form-control">
                        {/* go throught the departamentos array to do the options about this selector*/}
                        {data&&departamentos.map((element, index)=><option value={element} key={index}>{element}</option>)}
                    </Control.select>
                </Col>
            </Row>
            <Row>
                <Label md={12} className="form-label"><strong>Ciudad*</strong></Label>
                <Col md={12}>
                    <Control.select model=".ciudad" id='ciudad' 
                            name='ciudad'
                            className="form-control">
                        {/* if the first selector its checked go through the data in array for a especific key department*/}
                        {depart !== ''?data[depart].map((element, index)=><option key={index}>{element}</option>):<option></option>}
                    </Control.select>
                </Col>
            </Row>
            <Row>
                <Label md={12} className="form-label"><strong>Nombre*</strong></Label>
                <Col md={12}>
                    <Control.text model=".nombre" id='nombre' 
                        name='nombre' placeholder='Pepito de Jesus'
                        className="form-control"                                   
                        validators={{
                            required, minLength: minLength(3), maxLength: maxLength(15)
                        }}>
                        </Control.text>
                        {/* check validations for show us a errors if required */}
                        <Errors 
                            className="text-danger"
                            model=".nombre"
                            show="touched"
                            messages={{
                                required: "Required",
                                minLength: "Must be greater than 2 characters",
                                maxLength: "Must be 15 characters or less",
                            }}
                        />
                </Col>
            </Row>
            <Row>
                <Label className="form-label" md={12}> <strong>Correo*</strong></Label>
                <Col md={12}>
                    <Control.text model=".correo" id='correo' 
                        name='correo' placeholder='Pepitodejesus@gmail.com'
                        className="form-control"
                        validators={{
                            required,minLength,
                          }}                                   
                        >
                        </Control.text>
                        <Errors 
                            className="text-danger"
                            model=".nombre"
                            show="touched"
                            messages={{
                                required: "Required",
                                minLength: "Must be greater than 2 characters",
                            }}
                        />

                </Col>
            </Row>
            <Row>
                <Col className="container-button-form" md={5}>
                    <Button type="submit" onClick={toggle} className="button-form rounded-pill"><strong>ENVIAR</strong></Button>
                    {/* component for show the modal*/}
                    <Modal_ toggle={toggle} modal={modal} />
                </Col>
            </Row>
        </LocalForm>
    )
}

export default Form_