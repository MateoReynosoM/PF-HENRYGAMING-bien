import React from 'react'
import {useForm, Controller} from 'react-hook-form'
import {Container, Row, Col, Form, Button, FloatingLabel} from 'react-bootstrap';
import {toast} from "react-toastify"
import {useUpdateUserMutation} from '../../redux/rtk-api';

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
function UserUpdateForm() {
    const {handleSubmit, control, reset, formState: {errors}, getValues} = useForm();
    // taer ruta update user
    const [updateUser] = useUpdateUserMutation();

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



    const submitHandler = (data)=>{
        //logica de update user

        console.log(data)
        updateUser(data);
        successToast('success update')
    }
    console.log( getValues("password"),getValues("password1"))
  return (
    <Container>
        <Form onReset={reset} onSubmit={handleSubmit(submitHandler)}>
        <Row>
            <Col>

        <FloatingLabel
            controlId="floatingUserName"
            label='User Name'
        >
            <Controller control={control} name='userName'

                render={({field:{onChange, value, ref}})=>(
                    <Form.Control type='text' onChange={onChange} value={value} ref={ref} isInvalid={errors.userName} placeholder={''}/>)} 
                rules={{required: {value: true, message: "required field"}, minLength: {value:4 ,message: "Must have at least 4 characters" }}}/>
            {errors.userName?.message}
        </FloatingLabel>
        <FloatingLabel
            controlId='floatingFirstName'
            label='First Name'
        >
            <Controller control={control} name='firstName'

                render={({field: {onChange, value, ref}})=>(
                    <Form.Control type='text' onChange={onChange} value={value} ref={ref} isInvalid={errors.firstName} placeholder={''}/>)}
                rules={{required: {value: true, message: "required field"}, minLength:{value: 2, message: "Must have at least 4 characters"}}}
            />
            {errors.firstName?.message}
        </FloatingLabel>
        <FloatingLabel
            controlId='floatingLastName'
            label='Last Name' 
        >
            <Controller control={control} name='lastName'

                render={({field: {onChange, value, ref}})=>(
                    <Form.Control type='text' onChange={onChange} value={value} ref={ref} isInvalid={errors.lastName} placeholder={''}/>)}
                rules={{required: {value: true, message: "required field"}, minLength:{value: 2, message: "Must have at least 2 characters"}}}
            />
            {errors.lastName?.message}
        </FloatingLabel>
            </Col>
            <Col>

        <FloatingLabel
            controlId='floatingEmail'
            label='Email'
        >
            <Controller control={control} name='email'
                render={({field: {onChange, value, ref}})=>(
                    <Form.Control type='email' onChange={onChange} value={value} ref={ref} isInvalid={errors.name} placeholder={''}/>)}
                rules={{required: {value: true, message: 'required field'}, pattern: {value: emailRegex, message: "Must be a valid email"}}}
            />

                {errors.email?.message}


        </FloatingLabel>
        <FloatingLabel
            controlId='floatingPassWord'
            label='PassWord'
        >
            <Controller control={control} name='password' defaultValue={''}
                render={({field: {onChange, value, ref}})=>(
                    <Form.Control type='password' onChange={onChange} value={value} ref={ref} isInvalid={errors.password} placeholder='New Password'/>)}
                rules={{required: {value: true, message: "Required field"}, minLength: {value: 4, message:'Must have at least 0 characters'}}}
            />

                {errors.password?.message}

        </FloatingLabel>
            </Col>
            
            <Button variant='warning' type='submit'>update</Button>
        </Row>
        </Form>
    </Container>
  )
}

export default UserUpdateForm