import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container, Form } from 'react-bootstrap';
import {useUpdateProductMutation} from '../../../redux/rtk-api';
import { useState } from 'react';

export default function ModalPrice(props) {

    const [price, setPrice] = useState({
        price: ''
    });
     // props.id
    const [updatePrice] = useUpdateProductMutation();
    // reparar el update product 
    // se requiere el id que se pasa por parametro y el body

    const handleSunmit=()=>{
        
        let data = {
            id: props.id,
            price: price,
        }
        updatePrice(data)
        
        
    }
    const handleChange=(e)=>{
        
        setPrice({...price, [e.target.name]: e.target.value})
        
    }


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Price Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e)=>{e.preventDefault(); handleSunmit()}}>
            <Form.Group >
                <Form.Label>New Price</Form.Label>
                <Form.Control type='text' name='price' onChange={handleChange} />
            </Form.Group>
            <Form.Group>
            <Button type='submit' onClick={props.onHide}>Update</Button>
            </Form.Group>
        </Form>
      </Modal.Body>

    </Modal>
  );
}