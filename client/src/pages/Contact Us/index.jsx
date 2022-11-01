//import "./styles/contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Formik } from "formik";
import { toast } from 'react-toastify';


import { Form, Container, Button } from 'react-bootstrap';


function typeInput(values, errors, touched, handleChange, handleBlur){
return(
  <Form.Group>
    <Form.Label>Insert your subject </Form.Label>
    <Form.Control name='opcional_subject' type="text"  onChange={handleChange} onBlur={handleBlur} value={values.opcional_subject} required/>
  
  </Form.Group>
)
} 


export default function Contact() {
  const form = useRef();
  //darles estilo con boostrap
  //corregir mayusculas en inputs






  const sendEmail = (values) => {
    if(values.subject==="other"){
      values.subject=values.opcional_subject
    }
    const resolveAfter2Sec = new Promise(resolve => setTimeout(resolve, 2000));
    toast.promise(
      resolveAfter2Sec,
      {
        pending: 'Sending message',
        success: 'Message sent 👌'
      }
    )
    
    
    document.getElementById("otro").value=values.opcional_subject
    emailjs.sendForm('default_service', 'template_z66m4nl', form.current, 'iKphYHV80igqv1Wl3')
      .then((result) => {
        console.log(result.text);
        document.getElementById("otro").value="other"
      }, (error) => {
        console.log(error.text);
      });


  };
  const contestEmail = (values) => {

    console.log(form.current) 

    document.getElementById("otro").value=values.opcional_subject
     console.log(document.getElementById("otro").value)

    emailjs.sendForm('default_service', 'template_1qh9s09', form.current, 'iKphYHV80igqv1Wl3')
      .then((result) => {
        console.log(result.text); 
         document.getElementById("otro").value="other"
  console.log(document.getElementById("otro").value)
      }, (error) => {
        console.log(error.text);
      });
       
    
  };

  return (
    <Container>


      <div className='p-5'>

        <h4 >Send us a Message</h4>
        <Formik
          initialValues={{ name: "", subject: "", message: "", email: "", opcional_subject:""}}
          validate={values => {
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
            }
            if (!values.message) {
              errors.message = 'Requerido'
            } else if (values.message.length < 10) {
              errors.message = 'El mensaje debe tener un minimo de 10 caracteres';
            }
            console.log(values)
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {

            setSubmitting(true)
            sendEmail(values)
            console.log(values)
            contestEmail(values)
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
                    <Form.Control type={"text"} name={"name"} onChange={handleChange} onBlur={handleBlur} value={values.name} placeholder='Nombre' required />
                    {errors.name && touched.name && errors.name}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type={"text"} name={"email"} onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder='Email' required />
                    {errors.email && touched.email && errors.email}
                  </Form.Group>
                  <Form.Label> </Form.Label>
                  <Form.Select name="subject"  onChange={handleChange} value={values.subject} className="selec" defaultValue={"Asunto"} required >
                    <option value="" disabled>Subject</option>
                    <option value='Report'>Report page bug</option>
                    <option value='Issues'>Issues</option>
                    <option value='About my purchase'>About my purchase</option>
                    <option value='have a doubt'>Doubts</option>
                    <option value='Just a message'>Personal messsages/opiniones</option>
                    <option value="other" id='otro'>other</option>
                    }


                  </Form.Select>
{
  values.subject!==""&&values.subject!=="Report"&&values.subject!=="Issues"&&values.subject!=="About my purchase"&&values.subject!=="have a doubt"&&values.subject!=="Just a message"?typeInput(values, errors, touched, handleChange, handleBlur) :<></>
}



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



