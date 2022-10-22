//import { StyleSheet } from 'react-native'
import React from 'react'
import {Formik} from 'formik';
import { usePostProductMutation, useGetCategoriesQuery, useGetBrandsQuery  } from '../../redux/rtk-api';
import "./styles/ProductForm.css"

//especificaciones
import {espec, propsFormik} from '../../utils/epecFunctionForm';



export default function ProductForm() {

  let type;

  const [createProduct] = usePostProductMutation();
  
  let {data : categories} = useGetCategoriesQuery();

  const {data: brands } = useGetBrandsQuery();
  



  let detail1 , detail2, detail3;

  return (
    <section className="section">
      <h1 className="titulo">Formulario de Carga</h1>
      <Formik
        initialValues={{img: '', category: undefined, brand: undefined,model: '', price: '', detail: '',detail1: '', detail2: '', detail3: ''}}
        validate= {values => {
          let errors= {};
          console.log(values.category)
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
          if(!values.detail1){
            errors.detail1 = 'Requerido';
          }else if(values.detail1 < 0 || values.detail1 > 10000){
            errors.detail1 = 'Excede de los limites'
          }

          if(!values.detail2){
            errors.detail2 = 'Requerido';
          }else if(detail2.length > 15 ){
            errors.detail2 = 'La especificacion es demasiado larga'
          }


          if(!values.detail3){
            errors.detail3 = 'Requerido';
          }else if(typeof !!values.detail3 !== 'boolean'){
            errors.detail3 = 'Debe Verdadero o Falso'
          }
          console.log(values)
          
          //Validacion extra
          if(values.category && /^[A-Z \d\W]+$/.test(values.category)){
            type = values.category;
            ({detail1, detail2, detail3} = propsFormik(values.category))
          }
          
          
          return errors;

        }}
        onSubmit={( values, {setSubmitting, resetForm})=>{

          let {detail1: value1, detail2: value2, detail3: value3 , ...data} = values;

          data.detail = JSON.stringify({
            [detail1]: value1,
            [detail2]: value2,
            [detail3] : value3,
          })
          //post
          createProduct(data)
          console.log(data)

          resetForm()

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
              {
                 typeof values.category === 'string'   ? <input type={'category'} name={'category'} onChange={handleChange} onBlur={handleBlur} value={values.category}/>
                 : <select name='category' onChange={handleChange} onBlur={handleBlur}>
                      <option value={'NULL'}>Elegir</option>
                        {
                          categories?.map(e=>{
                            return <option key={e.id} value={e.name}>{e.name}</option>
                          })
                        }
                      <option value={''}>Crear</option>
                  </select>
              }
              {errors.category && touched.category && errors.category}
            </div>
            <div>
              <span htmlFor='brand'>Marca</span> 
              {
                 typeof values.brand === 'string'   ? <input type={'brand'} name={'brand'} onChange={handleChange} onBlur={handleBlur} value={values.brand}/>
                 : <select name='brand' onChange={handleChange} onBlur={handleBlur}>
                      <option value={'NULL'}>Elegir</option>
                        {
                          brands?.map(e=>{
                            return <option key={e.id} value={e.name}>{e.name}</option>
                          })
                        }
                      <option value={''}>Crear</option>
                  </select>
              }
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
            <div>
              {
                type ? espec( values,  errors, touched, handleChange, handleBlur, detail1 , detail2, detail3) : <></>
              }
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
