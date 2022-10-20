import "./styles/contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('default_service', 'template_jy3pnts', form.current, '8xZQYHOTYemD0oazq')
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
            <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                    <div className="inputs">
                        <label >name: </label>
                        <input type="text" name="name" placeholder='Nombre' required />
                    </div>
                    <div>
                    <label>email: </label>
                        <input type="text" name="email" placeholder='Email' required />
                    </div>
                    <div>
                    <label>subject: </label>
                        <input type="text" name="subject" placeholder='Asunto' required />
                    </div>
                    <div>
                    <label>message: </label>
                        <textarea className="texto" type="text" name="message" rows="4" placeholder='Mensaje' required />
                    </div>
                    <div>
                        <button type="submit" id="button" className='boton' value="Send" >Send</button>
                    </div>
                </div>
            </form>

        </div>

        </section>
    )
};








