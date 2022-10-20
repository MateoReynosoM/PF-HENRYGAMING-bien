


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
        }else if(category === 'GPU'){
            return {
                detail1: 'Cantidad de Memoria',
                detail2: 'Tipo de Memoria',
                detail3: 'SLI/CROSFIRE',
            }
        }else if(category === 'CPU'){
            return {
                detail1: 'Nulceos',
                detail2: 'Proceso de Fabricacion',
                detail3: 'Cpu Cooler',
            }
        }else if(category === 'SSD'){
            return {
                detail1: 'Almacenamiento',
                detail2: 'Interface',
                detail3: 'Con tecnología 3D NAND',
            }
        }else if(category === 'HDD'){
            return {
                detail1: 'Almacenamiento',
                detail2: 'Velocidad de rotación',
                detail3: 'Externo',
            }
        }else if(category === 'MOTHER'){
            return {
                detail1: 'Slots M.2',
                detail2: 'Socket',
                detail3: 'RGB',
            }
        }else if(category === 'MONITOR'){
            return {
                detail1: 'Tamaño de pantalla',
                detail2: 'Tipo de pantalla',
                detail3: 'Montaje VESA',
            }
        }else if(category === 'KEYBOARD'){
            return {
                detail1: 'DPI',
                detail2: 'Color',
                detail3: 'Mecanico',
            }
        }
        //Agregar ultimas categorias.
    
}






export {
    espec,
    propsFormik
}