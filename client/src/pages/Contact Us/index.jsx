//import "./styles/contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Formik } from "formik";

import { Form, Container, Button} from 'react-bootstrap';

export default function Contact() {
  const form = useRef();
  //darles estilo con boostrap
  //corregir mayusculas en inputs


  const sendEmail=(e) =>{

console.log(form.current)

  emailjs.sendForm('default_service', 'template_z66m4nl', form.current, 'iKphYHV80igqv1Wl3')
    .then((result) => {
      console.log(result.text);
      alert("Message sent")
    }, (error) => {
      console.log(error.text);
    });


  };

  return (
    <Container>


      <div className='p-5'>

        <h4 >Send us a Message</h4>
        <Formik
          initialValues={{name:"", subject:"", message:"",email:""}}
          validate= {values => {
            let errors = {};
            if (!values.name) {
              errors.name = 'Requerido';
            } else if (!/^[A-Z]+[A-Za-z\s]+$/g.test(values.name)) {
              errors.name = 'La primera letra debe ser en mayuscula';
            }
            if (!values.email) {
              errors.email = 'Requerido';
            } else if (!/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,63}$/g.test(values.email)) {
              errors.email = 'debe ser un email valido'
            }
            if (!values.subject) {
              errors.subject = 'Requerido';
            } else if (!/^[A-Z]+[A-Za-z\s]+$/g.test(values.subject)) {
              errors.subject = 'La primera letra debe ser en mayuscula';
            }
            if (!values.message) {
              errors.message = 'Requerido'
            } else if (values.message.length < 10) {
              errors.message = 'El mensaje debe tener un minimo de 10 caracteres';
            }
            return errors;
          }}
          onSubmit={( values, {setSubmitting, resetForm})=>{
            setSubmitting(true)
            
            sendEmail()
            console.log(values)
          
            resetForm()
            setSubmitting(false)
  
          }}
          
          
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <div>
            <form ref={form} onSubmit={handleSubmit}  >

              <Container className='p-1'>
                <Form.Group >
                  <Form.Label>Name: </Form.Label>
                  <Form.Control  type={"text"} name={"name"} onChange={handleChange} onBlur={handleBlur} value={values.name} placeholder='Nombre' required />
                  {errors.name && touched.name && errors.name}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email: </Form.Label>
                  <Form.Control  type={"text"} name={"email"} onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder='Email' required />
                  {errors.email && touched.email && errors.email}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Subject: </Form.Label>
                  <Form.Control  type={"text"} name={"subject"} onChange={handleChange} onBlur={handleBlur} value={values.subject} placeholder='Asunto' required />
                  {errors.subject && touched.subject && errors.subject}
                </Form.Group>
                <Form.Group>
                  <Form.Group>Message: </Form.Group>
                  <Form.Control as={'textarea'} type={"text"} name={"message"} onChange={handleChange} onBlur={handleBlur} value={values.message} rows="4" placeholder='Mensaje' required />
                  {errors.message && touched.message && errors.message}
                </Form.Group>
                <Form.Group className="p-3">

                  <Button type="submit" id="button" className='boton' value="Send"  >Send</Button>

                </Form.Group>
              </Container>
            </form>
          </div>
          )}

        </Formik>
      </div>
    </Container>
  )
};
