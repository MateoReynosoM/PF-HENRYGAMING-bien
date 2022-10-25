import React from 'react'

import {Form,Field} from 'react-final-form';
import {Container, Form as FormReact, Button, Row, Col} from 'react-bootstrap';

import {usePostReviewMutation} from '../redux/rtk-api';
import { useNavigate } from 'react-router-dom';



function ReviewForm({id}) {

    const navigate = useNavigate();


    const [trigger] = usePostReviewMutation();
     console.log(id)
    const onSubmit = async (values)=>{

       
        const data= {
            idProduct: id,
            idUser: 1,
            reviewUser: values?.review,
        };
        const result = await trigger(data);
        console.log(result);
        navigate(0)
        //agregar el post review
    };

    //const getLongValidator = (value) => value? value=> ((value.length < 10 || value.length < 50)? "the review is too short or too long": undefined): ()=>{};
    const Error = ({name})=>(
        <Field name={name} subscription={{error: true}}>
            {({meta: {error}})=>(error ? <FormReact.Label>{error}</FormReact.Label> : null)}
        </Field>
    )

  return (
    <Container>
        <Form onSubmit={onSubmit} initialValues={{review: ''}}
            validate={values =>{
                    const errors = {};
                    if(!values.review){
                        errors.review = 'Required'
                    }else if(values.review.length < 10 || values.review.length > 75){
                        errors.review ='The review is too short or too long'
                    }
                    console.log(values)
                    return errors ;
                }}
                
        >
        {
            ({handleSubmit, form, submitting, errors, values, validate }) =>(
                <form onSubmit={handleSubmit}>
                
                                    <FormReact.Group>
                                        <FormReact.Label >Add Review</FormReact.Label>
                                            <FormReact.Group>
                                                <Field className='w-100' name='review' component={'textarea'} id='review' placeholder={'New Review'} validate={validate} />
                                            </FormReact.Group>
                                        <Error name='review'/>
                                    </FormReact.Group>
                    <FormReact.Group>
                            <Button className=' m-1' type='submit' disable={submitting ? true: undefined }>
                                Submit
                            </Button>

                            <Button className=' m-3' type='button' onClick={form.reset} disabled={submitting ? true: undefined}>
                                Reset
                            </Button>

                    </FormReact.Group>
                </form>
            )
        }
            
        </Form>
    </Container>
  )
}

export default ReviewForm