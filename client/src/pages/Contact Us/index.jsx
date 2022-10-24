import "./styles/contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Formik } from "formik";

export default function Contact() {
  const form = useRef();



  const sendEmail=(e) =>{

console.log("hola")

  emailjs.sendForm('default_service', 'template_z66m4nl', form.current, 'iKphYHV80igqv1Wl3')
    .then((result) => {
      console.log(result.text);
      alert("Message sent")


    }, (error) => {
      console.log(error.text);
    });


  };

  return (
    <section className="section_cont">
      <div className='contact'>

        <h4 >Send us a message</h4>
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
    } else if (!/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/g.test(values.email)) {
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
            <form ref={form} onSubmit={handleSubmit}  >
              <div className="form-group">
                <div className="inputs">
                  <label >name: </label>
                  <input className="textInput" type={"text"} name={"name"} onChange={handleChange} onBlur={handleBlur} value={values.name} placeholder='Nombre' required />
                  {errors.name && touched.name && errors.name}
                </div>
                <div>
                  <label>email: </label>
                  <input className="textInput" type={"text"} name={"email"} onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder='Email' required />
                  {errors.email && touched.email && errors.email}
                </div>
                <div>
                  <label>subject: </label>
                  <input className="textInput" type={"text"} name={"subject"} onChange={handleChange} onBlur={handleBlur} value={values.subject} placeholder='Asunto' required />
                  {errors.subject && touched.subject && errors.subject}
                </div>
                <div>
                  <label>message: </label>
                  <textarea className="texto" type={"text"} name={"message"} onChange={handleChange} onBlur={handleBlur} value={values.message} rows="4" placeholder='Mensaje' required />
                  {errors.message && touched.message && errors.message}
                </div>
                <div className="botones">

                  <button type="submit" id="button" className='boton' value="Send"  >Send</button>

                  

                </div>
              </div>
            </form>
          )}

        </Formik>
      </div>

    </section>
  )
};
