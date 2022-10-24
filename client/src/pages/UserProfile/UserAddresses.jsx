import React from 'react'
import {Accordion , Form as FormR, Button, ListGroup} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import { Form, Field } from "react-final-form";
import { useGetAllAddressesQuery, usePostAdressMutation, useDeleteAddressMutation } from '../../redux/rtk-api';


function UserAddresses() {

    const {data: addresses , error} = useGetAllAddressesQuery()
    const [trigger] = usePostAdressMutation()
    const [deleteTrigger] = useDeleteAddressMutation()

    const onSubmit= async (values)=>{
        console.log(values)
        const result = await trigger(values)
        console.log(result)
    }
    const handleDelete = async (id) =>{
        const result = await deleteTrigger(id)
        console.log(result)
    }
    const Error = ({ name }) => (
        <Field name={name} subscription={{ error: true }}>
          {({ meta: { error } }) => (error ? <span>{error}</span> : null)}
        </Field>
      );
    const getValidator = isRequired =>
        isRequired ? value =>(value ? undefined: "Required") : ()=> {};

  return (
        <>
        <Accordion>
                {
                    addresses?.length ? addresses.map((e, index)=>{
                        return(
                            <Accordion.Item>
                                <Accordion.Header>Direccion {index + 1}: </Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            <p className='m-0'>Direccion: {e.adress}</p> 
                                            <Button variant="danger" onClick={() => handleDelete(e.id)}>X</Button>
                                        </ListGroup.Item>
                                        <ListGroup.Item>Ciudad: {e.city}</ListGroup.Item>
                                        <ListGroup.Item>Codigo Posta: {e.postalCode}</ListGroup.Item>
                                        <ListGroup.Item>Pais: {e.country}</ListGroup.Item>
                                        <ListGroup.Item>Numero de Telefono: {e.phoneNumber}</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    }): (<Accordion.Item>
                        <Accordion.Header>Direccion </Accordion.Header>
                        <Accordion.Body>No tienes Direcciones Resgistradas </Accordion.Body>
                    </Accordion.Item>)
                }
        </Accordion>
        <Accordion>
            <Accordion.Item>
            <Accordion.Header>Crear Direccion</Accordion.Header>
                <Accordion.Body>

                    
                        <Form onSubmit={onSubmit}>
                        {
                            ({handleSubmit, form, submitting, errors, values})=>(

                            <form onSubmit={handleSubmit}>
                                <Row>

                                    <Col>
                                        <FormR.Group>
                                            <FormR.Label>Direccion: </FormR.Label>
                                            <Field name="adress" component="input" id="adress" type="text" 
                                                validate={getValidator(values.adress)}
                                            />
                                            <Error name="adress"/>
                                        </FormR.Group>

                                    </Col>
                                    <Col>
                                        <FormR.Group>
                                            <FormR.Label>Pais:</FormR.Label>
                                            <Field name="country" component="input" id="country" type="text" 
                                                validate={getValidator(values.country)}
                                            />
                                            <Error name="country"/>
                                        </FormR.Group>

                                    </Col>    
                                </Row>
                                <Row>
                                    <Col>
                                        <FormR.Group>
                                            <FormR.Label>Codigo Postal: </FormR.Label>
                                            <Field name="postalCode" component="input" id="postalCode" type="text" 
                                                validate={getValidator(values.postalCode)}
                                            />
                                            <Error name="postalCode"/>
                                        </FormR.Group>

                                    </Col>
                                    <Col>
                                        <FormR.Group>
                                            <FormR.Label>Ciudad: </FormR.Label>
                                            <Field name="city" component="input" id="city" type="text" 
                                                validate={getValidator(values.city)}
                                            />
                                            <Error name="city"/>
                                        </FormR.Group>

                                    </Col>
                                </Row>
                                    <FormR.Group>
                                        <FormR.Label>Numero De Telefono: </FormR.Label>
                                        <Field name="phoneNumber" component="input" id="phoneNumber" type="text" 
                                            validate={getValidator(values.phoneNumber)}
                                        />
                                        <Error name="phoneNumber"/>
                                    </FormR.Group>

                                <input type={'submit'} value={'Crear Direccion'}></input>

                            </form>
                            )
                        }
                        </Form>
                    
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </>
  )
}

export default UserAddresses