import {  FloatingLabel, Form } from "react-bootstrap"
import Table from "react-bootstrap/Table";



const espec = (values,  errors, touched, handleChange, handleBlur, detailArr)=>{

        return(
            <>  
                {
                    detailArr.map((e, index)=>{

                        
                        return(
                            <>
                            <FloatingLabel key={index}
                                controlId={`floating${e[1].trim()}`}
                                label={e[1]}
                                className="mb-3"
                            >
                                <Form.Control type={e[0]} name={e[0]} onChange={handleChange} onBlur={handleBlur} value={values[e[0]]} />      
                            {errors[e[0]] && touched[e[0]] && errors[e[0]]}
                            </FloatingLabel>
                            </>
                            
                        ) 
                        
                    })
                }
            </>
        )


}

const especDetail = (objCategory, data)=>{

        console.log(Object.entries(data))

        return (
        <Table striped  hover>
            <thead>
            <tr>
                <th>Especificacion</th>
            </tr>
            </thead>
            <tbody>
                {  Object.entries(data).length === 3 ?  
                
                    Object.entries(data).map((e, index)=>{

                    return(
                        <>
                            <tr key={index}>
                                <td>{objCategory[e[0]]}</td>
                                <td>{e[1]}</td>
                            </tr>
                        </>
                    )

                })
                
                :
                
                Object.entries(objCategory).map((e, index)=>{

                    return(
                        <>
                            <tr key={index}>
                                <td>{e[1]}</td>
                                <td>{data[e[0]]}</td>
                            </tr>
                        </>
                    )

                })
                }
            </tbody>
        </Table>)

}

const propsFormik = (category)=>{

        if(category === 'RAM'){
            return {
            detail0: 'Cantidad de Ram',
            detail1: 'Tipo de Memoria',
            detail2: 'Frecuencia',
            detail3: 'Formato' ,
            detail4: 'Voltaje',
            detail5: 'Latencia',
        }
        }else if(category === 'POWER SUPPLY'){
            return{
                detail0: 'Watts',
                detail1: 'Certificacion',
                detail2: 'Formato',
                detail3: 'Tipo de cableado',
                detail4: 'Certificacion 80plus'
            }
        }else if(category === 'CASE'){
            return {
                detail0: 'Coolers N°',
                detail1: 'Factor',
                detail2: 'Con Ventana',
                detail3: 'Alto',
                detail4: 'Ancho',
                detail5: 'Largo',
            }
        }else if(category === 'GPU'){
            return {
                detail0: 'Cantidad de Memoria',
                detail1: 'Tipo de Memoria',
                detail2: 'Consumo De Energia',
                detail4: 'SLI/CROSFIRE',
                detail5: 'Ancho',
                detail6: 'Largo',
                detail7: 'Espesor',
            }
        }else if(category === 'CPU'){
            return {
                detail0: 'Nulceos',
                detail1: 'Frecuencia',
                detail2: 'Consumo',
                detail3: 'Proceso de Fabricacion',
                detail4: 'Cpu Cooler', 
                detail5: 'Integrate GPU',
                detail6: 'Family',
            }
        }else if(category === 'SSD'){
            return {
                detail0: 'Almacenamiento',
                detail1: 'Interface',
                detail2: 'Con tecnología 3D NAND',
                detail3: 'Cache',
                detail4: 'Formato'

            }
        }else if(category === 'HDD'){
            return {
                detail0: 'Almacenamiento',
                detail1: 'Velocidad de rotación',
                detail2: 'Externo',
                detail3: 'Interface',
                detail4: 'Formato'
                
            }
        }else if(category === 'MOTHER'){
            return {
                detail0: 'Plataforma',
                detail1: 'Socket',
                detail2: 'Type/slots de Ram',
                detail3: 'Slots M.2' , //intel / amd
                detail4: 'RGB' ,
                detail5: 'Formato'
            }
        }else if(category === 'MONITOR'){
            return {
                detail0: 'Tipo de panel',
                detail1: 'Tipo de iluminacion',
                detail2: 'Tamaño de pantalla',
                detail3: 'Montaje VESA',
                detail4: 'Resolution',
                detail5: 'Tiempo de Respuesta',
                detail6: 'Curvo'
            }
        }else if(category === 'MOUSE'){
            return {
                detail0: 'DPI',
                detail1: 'Cantidad de botones',
                detail2: 'Tipo de cable',
                detail3: 'Color'
            }
        }else if(category === 'COOLER'){
            return {
                detail0: 'Max speed',
                detail1: 'Size',
                detail2: 'Led',

            }
        }else if(category === 'KEYBOARD'){
            return {
                detail0: 'Tipo de Teclado',
                detail1: 'Tipo de Mecanismo',
                detail2: 'Retroiluminacion',
            }
        }else if(category === 'SOUND'){
            return {
                detail0: 'Audio',
                detail1: 'Respuesta',
                detail2: 'Conexion',
            }
        }
        //Agregar ultimas categorias.
    
}






export {
    espec,
    propsFormik,
    especDetail
}