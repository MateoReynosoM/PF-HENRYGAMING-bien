import React from 'react'
import {Form,Field} from 'react-final-form';
import {Container, Form as FormReact, Button} from 'react-bootstrap';
import {usePostReviewMutation} from '../redux/rtk-api';

    // post line


function ReviewForm({id}) {

    const [trigger] = usePostReviewMutation();
     console.log(id)
    const onSubmit = async (values)=>{
        console.log(values)
        const result = await trigger({reviewUser: values.review, idProduct: id});
        console.log(result);
    };
    const Error = ({name})=>(
        <Field name={name} subscription={{error: true}}>
            {({meta: {error}})=>(error ? <FormReact.Label>{error}</FormReact.Label> : null)}
        </Field>
    )

  return (
    <Container>
        <Form onSubmit={handleSubmit} initialValues={{review: ''}}
            validate={
                values =>{
                    const errors = {};
                    if(!values.review){
                        errors.review = 'Required'
                    }else if(values.length < 10 || values.length > 75){
                        errors.review ='The review is too short or too long'
                    }
                    return errors ;
                }}
        >
        {
            ({handleSubmit, form, submitting, errors, values}) =>(
                <form onSubmit={handleSubmit}>
                    <FormReact.Group>
                        <Field>
                            {({input , meta})=>{
                                return(
                                    <FormReact.Group>
                                        <FormReact.Label>Add Review</FormReact.Label>
                                        <FormReact.Control as={'textarea'} {...input} placeholder={'New Review'}/>
                                        <Error name="review"/>
                                        {{/* { si no funciona <Error/> probar de esta manera
                                            meta.error && 
                                                meta.touched &&(
                                                    <Error name={'review'}/>
                                                )
                                        } */}}
                                    </FormReact.Group>
                                )
                            }}
                        </Field>
                    </FormReact.Group>
                    
                <FormReact.Group>
                <Row>
                    <Col>

                        <Button type='submit' disable={submitting}>
                            Submit
                        </Button>
                    </Col>
                    <Col>
                        <Button type='button' onClick={form.reset} disabled={submitting}>
                            Reset
                        </Button>
                    </Col>
                </Row>
                </FormReact.Group>
                </form>
            )
        }
            
        </Form>
    </Container>
  )
}

export default ReviewForm