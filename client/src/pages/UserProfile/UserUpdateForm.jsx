import React from 'react'
import {useForm, Controller} from 'react-hook-form'
import {Container, Row, Col, Form, Button, FloatingLabel} from 'react-bootstrap';
import {toast} from "react-toastify"
import {useUpdateUserMutation} from '../../redux/rtk-api';
import './styles/UserProfile.css'

function UserUpdateForm({email}) {
    const {handleSubmit, control, reset, formState: {errors}, getValues} = useForm();
    // taer ruta update user
    const [updateUser] = useUpdateUserMutation();

    const successToast = (message) => {
        toast.success(message, {
            position: 'top-center',
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false, 
            progress: undefined,
    })}



    const submitHandler = async (data)=>{
        //logica de update user
        console.log({...data, email: email})
        const result = await updateUser({...data, email: email});
        console.log(result)
        successToast('Account details updated successfully!')
    }
    console.log( getValues("password"),getValues("password1"))
  return (
    <Container>
        <div className='user-dashboard-container'>
        <Form onReset={reset} onSubmit={handleSubmit(submitHandler)}>
        <Row>
            <Col>

        <FloatingLabel
            
            controlId="floatingUserName"
            label='Username'
        >
            <Controller control={control} name='userName'

                render={({field:{onChange, value, ref}})=>(
                    <Form.Control type='text' className="mb-2" onChange={onChange} value={value} ref={ref} isInvalid={errors.userName} placeholder={''}/>)} 
                rules={{required: {value: true, message: "required field"}, minLength: {value:4 ,message: "Must have at least 4 characters" }, pattern: {value: /^[^\s]+(\s+[^\s]+)*$/, message: "Can't contain spaces at the beginning or end" }}}/>
            {errors.userName?.message}
        </FloatingLabel>
        <FloatingLabel
            controlId='floatingFirstName'
            label='First Name'
        >
            <Controller control={control} name='firstName'

                render={({field: {onChange, value, ref}})=>(
                    <Form.Control className="mb-2" type='text' onChange={onChange} value={value} ref={ref} isInvalid={errors.firstName} placeholder={''}/>)}
                rules={{required: {value: true, message: "required field"}, minLength:{value: 2, message: "Must have at least 4 characters"}, pattern: {value: /^[^\s]+(\s+[^\s]+)*$/, message: "Can't contain spaces at the beginning or end" }}}
            />
            {errors.firstName?.message}
        </FloatingLabel>
        <FloatingLabel
            controlId='floatingLastName'
            label='Last Name' 
        >
            <Controller control={control} name='lastName'

                render={({field: {onChange, value, ref}})=>(
                    <Form.Control className="mb-2" type='text' onChange={onChange} value={value} ref={ref} isInvalid={errors.lastName} placeholder={''}/>)}
                rules={{required: {value: true, message: "required field"}, minLength:{value: 2, message: "Must have at least 2 characters"}, pattern: {value: /^[^\s]+(\s+[^\s]+)*$/, message: "Can't contain spaces at the beginning or end" }}}
            />
            {errors.lastName?.message}
        </FloatingLabel>
            </Col>
            <Col>

{/*         <FloatingLabel
            controlId='floatingEmail'
            label='Email'
        >
            <Controller control={control} name='email'
                render={({field: {onChange, value, ref}})=>(
                    <Form.Control className="mb-2" type='email' onChange={onChange} value={value} ref={ref} isInvalid={errors.name} placeholder={''}/>)}
                rules={{required: {value: true, message: 'required field'}, pattern: {value: emailRegex, message: "Must be a valid email"}}}
            />

                {errors.email?.message}


        </FloatingLabel> */}
        <FloatingLabel
            controlId='floatingPassWord'
            label='Password'
        >
            <Controller control={control} name='password' defaultValue={''}
                render={({field: {onChange, value, ref}})=>(
                    <Form.Control className="mb-2" type='password' onChange={onChange} value={value} ref={ref} isInvalid={errors.password} placeholder='New Password'/>)}
                rules={{required: {value: true, message: "Required field"}, minLength: {value: 9, message:'Must have at least 9 characters'}, pattern: {value: /^[^\s]+(\s+[^\s]+)*$/, message: "Can't contain spaces at the beginning or end" }}}
            />

                {errors.password?.message}

        </FloatingLabel>
                    <Button variant='warning' type='submit'>Update details</Button>
            </Col>
            
            
        </Row>
        </Form>
        </div>
    </Container>
  )
}

export default UserUpdateForm