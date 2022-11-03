import React from 'react'
import {Accordion , Form as FormR, Button, ListGroup,Card} from 'react-bootstrap';
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
                            <Accordion.Item eventKey={`${index}`}>
                                <Accordion.Header><Card.Title>Address {index + 1}:</Card.Title>  </Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            <p className='m-0'><Card.Subtitle>Address:</Card.Subtitle> {e.adress}</p> 
                                            <Button variant="danger" onClick={() => handleDelete(e.id)}>X</Button>
                                        </ListGroup.Item>
                                        <ListGroup.Item><Card.Subtitle>City:</Card.Subtitle> {e.city}</ListGroup.Item>
                                        <ListGroup.Item><Card.Subtitle>Postal Code:</Card.Subtitle> {e.postalCode}</ListGroup.Item>
                                        <ListGroup.Item><Card.Subtitle>Country:</Card.Subtitle> {e.country}</ListGroup.Item>
                                        <ListGroup.Item><Card.Subtitle>Phone Number:</Card.Subtitle> {e.phoneNumber}</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    }): (<Accordion.Item>
                        <Accordion.Header><Card.Title>Address</Card.Title> </Accordion.Header>
                        <Accordion.Body><Card.Subtitle>You do not have Registered Addresses</Card.Subtitle> </Accordion.Body>
                    </Accordion.Item>)
                }
        </Accordion>
        <Accordion>
            <Accordion.Item>
            <Accordion.Header>Add a new address</Accordion.Header>
                <Accordion.Body>

                    
                    <Form onSubmit={onSubmit}>
                    {
                        ({handleSubmit, form, submitting, errors, values})=>(
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <FormR.Group>
                                        <FormR.Label>Address: </FormR.Label>
                                        <Field name="adress" component={FormR.Control} id="adress" type="text" 
                                            validate={getValidator(values.adress)}
                                        />
                                        <Error name="adress"/>
                                    </FormR.Group>
                                </Col>
                                <Col>
                                    <FormR.Group>
                                        <FormR.Label>Country:</FormR.Label>
                                        <Field name="country" component={FormR.Control} id="country" type="text" 
                                            validate={getValidator(values.country)}
                                        />
                                        <Error name="country"/>
                                    </FormR.Group>
                                </Col>    
                            </Row>
                            <Row>
                                <Col>
                                    <FormR.Group>
                                        <FormR.Label>Postal Code: </FormR.Label>
                                        <Field name="postalCode" component={FormR.Control} id="postalCode" type="text" 
                                            validate={getValidator(values.postalCode)}
                                        />
                                        <Error name="postalCode"/>
                                    </FormR.Group>
                                </Col>
                                <Col>
                                    <FormR.Group>
                                        <FormR.Label>City: </FormR.Label>
                                        <Field name="city" component={FormR.Control} id="city" type="text" 
                                            validate={getValidator(values.city)}
                                        />
                                        <Error name="city"/>
                                    </FormR.Group>
                                </Col>
                            </Row>
                                <FormR.Group>
                                    <FormR.Label>Phone Number: </FormR.Label>
                                    <Field name="phoneNumber" component={FormR.Control} id="phoneNumber" type="text" 
                                        validate={getValidator(values.phoneNumber)}
                                    />
                                    <Error name="phoneNumber"/>
                                </FormR.Group>
                            <Button type='submit' className="mt-2" value='Create Address'>Add Address</Button>
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