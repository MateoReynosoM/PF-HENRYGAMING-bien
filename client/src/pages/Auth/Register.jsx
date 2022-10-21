import { Button, Form } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { usePostUserMutation } from '../../redux/rtk-api';
import {toast} from "react-toastify"
import AuthFooter from './AuthFooter';
import AuthNav from './AuthNav';
import { Notify } from '../../components/Notify';
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//To do: Validate names against special characters, trim spaces if not done in back, 

function Register() {
  const navigate = useNavigate()
  const {handleSubmit, control, reset, formState: {errors}} = useForm()
  const [signup, {isSuccess}] = usePostUserMutation()

  const errorToast = (message) => {
        toast.error(message, {
            position: 'top-center',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
    })}
    const successToast = (message) => {
        toast.success(message, {
            position: 'top-center',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
    })}

  const submitHandler = async (data) => {
        try {
            const userData = await signup(data)
            console.log(userData)
            console.log(isSuccess)
            if (userData.data?.token) { 
              successToast("You've successfully registered! You're now logged in.")
              sessionStorage.setItem("token", userData.data.token)
              setTimeout(() => navigate("/home"), 3700)
            } else errorToast(userData.error.data)
        }  catch(error) {
            errorToast(error)
        }}

  return (
    <div className='authContainer'>
      <AuthNav/>
      <div className="d-flex authLayout">
          <div className="d-flex col-md-4 justify-content-center align-items-center">
              <Form onReset={reset} onSubmit={handleSubmit(submitHandler)} className="rounded p-4 p-sm-3 my-5 authForm">
                <div className='d-flex align-items-center'>
                        <img id="hgLogo"src="logo.png" alt="" />
                        <h3 className='ms-2 text-secondary'>Henry Gaming</h3>
                    </div>
                    <hr />
                <Form.Group className="mb-3" controlId="formBasicUsername">
                      <Form.Label>Username</Form.Label>
                      <Controller control={control} name="userName"                                            
                            defaultValue=""                                                                        
                            render={({ field: { onChange, value, ref } }) => (                             
                            <Form.Control type="text" onChange={onChange} value={value} ref={ref} isInvalid={errors.userName}             placeholder="Enter username" />)}
                            rules={{required: {value: true, message: "Required field"}, minLength: {value: 4, message: "Must have at least 4 characters"}}}/>
                      <Form.Control.Feedback type="invalid">                                                     
                          {errors.userName?.message}                                                             
                      </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Controller control={control} name="firstName"                                            
                            defaultValue=""                                                                        
                            render={({ field: { onChange, value, ref } }) => (                             
                            <Form.Control type="text" onChange={onChange} value={value} ref={ref} isInvalid={errors.firstName}             placeholder="Enter first name" />)}
                            rules={{required: {value: true, message: "Required field"}, minLength: {value: 2, message: "Must have at least 2 characters"}}}/>
                      <Form.Control.Feedback type="invalid">                                                     
                          {errors.firstName?.message}                                                             
                      </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Controller control={control} name="lastName"                                            
                            defaultValue=""                                                                        
                            render={({ field: { onChange, value, ref } }) => (                             
                            <Form.Control type="text" onChange={onChange} value={value} ref={ref} isInvalid={errors.lastName}             placeholder="Enter last name" />)}
                            rules={{required: {value: true, message: "Required field"}, minLength: {value: 2, message: "Must have at least 2 characters"}}}/>
                      <Form.Control.Feedback type="invalid">                                                     
                          {errors.lastName?.message}                                                           
                      </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Adress</Form.Label>
                        <Controller control={control} name="email"                                            
                            defaultValue=""                                                                        
                            render={({ field: { onChange, value, ref } }) => (                             
                            <Form.Control type="email" onChange={onChange} value={value} ref={ref} isInvalid={errors.email}             placeholder="Enter email" />)}
                            rules={{required: {value: true, message: "Required field"}, pattern: {value: emailRegex, message: "Must be a valid email"}}}/> 
                        <Form.Control.Feedback type="invalid">                                                     
                            {errors.email?.message}                                                             
                        </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Controller control={control} name="password"                                            
                            defaultValue=""                                                                        
                            render={({ field: { onChange, value, ref } }) => (                             
                            <Form.Control type="password" onChange={onChange} value={value} ref={ref} isInvalid={errors.password}             placeholder="Enter password" />)}
                            rules={{required: {value: true, message: "Required field"}, minLength: {value: 9, message: "Must have at least 9 characters"}}}
                        />
                        <Form.Control.Feedback type="invalid">                                                     
                            {errors.password?.message}                                                        
                        </Form.Control.Feedback>
                    </Form.Group>
                  <Button variant="warning" type="submit">Sign up</Button>
                  <div className="d-flex flex-row  mt-2">
                      <p className="text-muted me-2">Already have an account?</p>
                      <Link className="text-primary text-decoration-none"to="/login">Login</Link>
                  </div>
              </Form>
          </div>
      </div>
      <AuthFooter/>
      <Notify/>
    </div>
  );
}


export default Register;