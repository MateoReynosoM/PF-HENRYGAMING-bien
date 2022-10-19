


const espec = (values,  errors, touched, handleChange, handleBlur, detail1, detail2, detail3)=>{

        return(
            <>  
                <div>
                <h4>ESPECIFICACIONES:</h4>
                    <label>{detail1}</label>
                    <input type={'detail1'} name={'detail1'} onChange={handleChange} onBlur={handleBlur} value={values.detail1} />   
                    {errors.detail1 && touched.detail1 && errors.detail1}
                </div>
                <div>
                    <label>{detail2}</label>
                    <input type={'detail2'} name={'detail2'} onChange={handleChange} onBlur={handleBlur} value={values.detail2}/>
                    {errors.detail2 && touched.detail2 && errors.detail2}
                </div>
                <div>
                    <label>{detail3}</label>
                   <select name={'detail3'} onChange={handleChange} onBlur={handleBlur}>
                    <option value={true}>Si</option>
                    <option value={false}>No</option>
                   </select>
                   {errors.detail3 && touched.detail3 && errors.detail3}
                </div>
            </>
        )


}


const propsFormik = (category)=>{

        if(category === 'RAM'){
            return {
            detail1: 'Cantidad de Ram',
            detail2: 'Frecuencia',
            detail3: 'Es SODIMM',
        }
        }else if(category === 'POWER SUPPLY'){
            return{
                detail1: 'Watts',
                detail2: 'Certificacion',
                detail3: 'Es ATX',
            }
        }else if(category === 'CASE'){
            return {
                detail1: 'Coolers N°',
                detail2: 'Factor',
                detail3: 'Con Ventana',
            }
        }
    
}






export {
    espec,
    propsFormik
}