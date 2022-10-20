import React from 'react';
import axios from "axios";
import swAlert from '@sweetalert/with-react'
import {Navigate, useNavigate} from 'react-router-dom'


function Login ()  {

const navigate = useNavigate();



    /*
     const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
     ESTO SE HACE PARA CAPTURAR LOS DATOS DEL FORMULARIO   

    }
    */
   const submitHandler = (e) => {
       e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       
       const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       
       
       swAlert(
           <div>
           <h1>Bienvenido</h1>
           <h2>Por favor complete el formulario</h2>
           </div>
       )


        if (email === "" || password === "") {
            swAlert (<h2>los campos no pueden estar vacios </h2>) // esto es para validar que los campos no esten vacios
            return;
        }  

        if (email !== "" && !regexEmail.test(email)){
            swAlert(<h3>debes escribir una direccion de email valida</h3>) // esto es para validar que el email esta correcto
            return;
         }
         if (email !== "challenge@alkemy.org" || password !== "react") {
            swAlert(<h2>credenciales invalidas</h2>); // esto es para que los datos sean los correctos
             return
         }
         swAlert("Ok estamos listos para enviar la info ");

         axios
         .post ("http://challenge-react.alkemy.org", {email,password})
         .then(res => {
            swAlert( <h2>Perfecto,Ingresaste correctamente</h2>)
             const tokenRecibido = res.data.token;
             sessionStorage.setItem ("token", tokenRecibido);
             navigate('/listado');
            
            //Axios nos permite hacer solicitudes a un servidor con los métodos GET, DELETE, POST, PUT, PATCH, HEAD Y OPTIONS
    })};

    let token = sessionStorage.getItem("token");


return (
    <>
    {token && <Navigate to = "/listado"/>}
    <div>
       <h2>Formulario de Login</h2>
        <form onSubmit = {submitHandler}>   
            <label>
            <span>Correo Electronico</span>   <br /> 
            <input type="text" name="email"/>
            </label> 
            <br/>
            <label> 
            <span>contraseña</span>   <br />
            <input type="password" name="password"/> 
            </label> 
            <label>
             <br/>    
            <button type="submit">Ingresar</button>
            </label> 
        </form>
        
        </div>
    </>

) 
}

export default Login;