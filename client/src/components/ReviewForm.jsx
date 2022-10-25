import React from 'react'
import {Form,Field} from 'react-final-form';
import {Container, Form as FormReact, Button} from 'react-bootstrap';
import {usePostReviewMutation} from '../redux/rtk-api';\



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