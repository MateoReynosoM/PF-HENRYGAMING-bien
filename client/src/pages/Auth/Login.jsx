import {Link, useNavigate} from 'react-router-dom'
import {Button, Form } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form'
import AuthNav from "./AuthNav";
import AuthFooter from "./AuthFooter";
import { useLazyLoginQuery } from "../../redux/rtk-api";
import styles from "./styles/Login.css"
import { Notify } from '../../components/Notify';
import {toast} from "react-toastify"

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function Login() {
    const navigate = useNavigate();
    const [login] = useLazyLoginQuery();
    const {handleSubmit, control, reset, formState: {errors}} = useForm()

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
            const loginData = await login(data)
            if (loginData.isSuccess) { 
              successToast("You've successfully logged in!")
              sessionStorage.setItem("token", loginData.token)
              setTimeout(() => navigate("/home"), 3700)
            } else errorToast(loginData.error.data)
        }  catch(error) {
            errorToast(error)
    }}

    return (
        <div className="authContainer">
        <AuthNav/>
        <div className="d-flex authLayout">
            <div className="d-flex col-md-4 justify-content-center align-items-center">
                <Form onSubmit={handleSubmit(submitHandler)} onReset={reset} className="rounded p-4 p-sm-3 my-5 authForm">
                    <div className='d-flex align-items-center'>
                        <img id="hgLogo"src="logo.png" alt="" />
                        <h3 className='ms-2 text-secondary'>Henry Gaming</h3>
                    </div>
                    
                    <hr />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Adress</Form.Label>
                        <Controller control={control} name="email"                                            
                            defaultValue=""                                                                        
                            render={({ field: { onChange, value, ref } }) => (                             
                            <Form.Control type="email" onChange={onChange} value={value} ref={ref} isInvalid={errors.email}             placeholder="Enter email" />)}
                            rules={{required: true, pattern: emailRegex}}/> 
                            <Form.Control.Feedback type="invalid">                                                     
                                {errors.password?.type === "pattern" ? "Must be a valid email" : errors.password?.type === "required" ? "Required field" : ""}                                                             
                            </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Controller control={control} name="password"                                            
                            defaultValue=""                                                                        
                            render={({ field: { onChange, value, ref } }) => (                             
                            <Form.Control type="password" onChange={onChange} value={value} ref={ref} isInvalid={errors.password}             placeholder="Enter password" />)}
                            rules={{required: true, minLength: 8}}
                        />
                        <Form.Control.Feedback type="invalid">                                                     
                            {errors.password?.type === "minLength" ? "Must be more than 8 characters" : errors.password?.type === "required" ? "Required field" : ""}                                                          
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="warning" type="submit">Login</Button>
                    <div className="d-flex flex-row  mt-2">
                        <p className="text-muted me-2">Don't have an account?</p>
                        <Link className="text-danger text-decoration-none"to="/register">Sign up</Link>
                    </div>
                </Form>
            </div>
        </div>
        <AuthFooter/>
        <Notify/>
        </div>
    );
}

export default Login;