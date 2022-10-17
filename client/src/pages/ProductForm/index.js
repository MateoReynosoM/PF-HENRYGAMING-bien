//import { StyleSheet } from 'react-native'
import React from 'react'
import {Formik} from 'formik';
import { usePostProductMutation } from '../../redux/rtk-api';
import "./styles/ProductForm.css"


export default function ProductForm() {

  const [createProduct,{ isError, isSuccess }] = usePostProductMutation();

  

  return (
    <section className="section">
      <h1 className="titulo">Formulario de Carga</h1>
      <Formik
        initialValues={{img: '', category: '', brand: '',model: '', price: ''}}
        validate= {values => {
          let errors= {};
          if(!values.img){
            errors.img = 'Requerido';
          }else if(!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|svg)/.test(values.img)){
            errors.img = 'Debe ser una Url valida';
          }
          if(!values.category){
            errors.category = 'Requerido';
          }else if(!/^[A-Z \d\W]+$/.test(values.category)){
            errors.category ='Toda la palabra debe estar en mayuscula'
          }
          if(!values.brand){
            errors.type='Requerido';
          }else if(!/^[A-Z][a-zA-Z0-9]{1,19}$/.test(values.brand)){
            errors.type='La primera letra debe estar en mayuscula';
          }
          if(!values.model){
            errors.model ='Requerido'
          }else if(values.model.length > 15){
            errors.model = 'El nombre del modelo es demasiado largo';
          }
          if(!values.price){
            errors.price = 'Requerido';
          }else if(values.price < 0 || values.price > 1000000){
            errors.price = 'Excede de limites razonables'
          }
          return errors;
        }}
        onSubmit={( values, {setSubmitting, resetForm})=>{
          setSubmitting(true)
          
          createProduct(values)
          console.log(values)
          console.log('error', isError)
          console.log('sucess', isSuccess)
          setSubmitting(false)

        }}
      >
        {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting})=>(
          <form onSubmit={(e)=>{handleSubmit(e)}} className="form" >
            <div className="contenedor">
            <div>
              <label htmlFor='img'>Imagen</label>  
              <input type={'img'} name={'img'} onChange={handleChange} onBlur={handleBlur} value={values.img} />
              {errors.img && touched.img && errors.img}
            </div>
            <div>
              <label htmlFor='category'>Tipo</label>
              <input type={'category'} name={'category'} onChange={handleChange} onBlur={handleBlur} value={values.category}/>
              {errors.category && touched.category && errors.category}
            </div>
            <div>
              <span htmlFor='brand'>Marca</span> 
              <input type={'brand'} name={'brand'} onChange={handleChange} onBlur={handleBlur} value={values.brand}/>
              {errors.brand && touched.brand && errors.brand}
            </div>
            <div>
              <span htmlFor='model'>Modelo</span>
              <input type={'model'} name={'model'} onChange={handleChange} onBlur={handleBlur} value={values.model}/>
              {errors.model && touched.model && errors.model}
            </div>
            <div>
              <span htmlFor='price'>Precio</span>
              <input type={'price'} name={'price'} onChange={handleChange} onBlur={handleBlur} value={values.price} />
              {errors.price && touched.price && errors.price}
            </div>
            <button className="boton"  type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Enviando': 'Enviar'}
            </button>
            
            </div>
          </form>
        )}
      </Formik>
    </section>
  )
}

//const styles = StyleSheet.create({})