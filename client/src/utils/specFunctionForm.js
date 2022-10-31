import { Card, FloatingLabel, Form } from "react-bootstrap"
import Table from "react-bootstrap/Table";
import {Row, Col} from 'react-bootstrap'


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

        return (
        <Table striped  hover>
            <thead>
            <tr>
                <th>Especificacion</th>
            </tr>
            </thead>
            <tbody>
                {   Object.entries(objCategory).map((e, index)=>{

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
            detail3: 'Es SODIMM' ,
            detail4: 'voltaje',
            detail5: 'otra cosa',
            detail6: 'otra mas',
        }
        }else if(category === 'POWER SUPPLY'){
            return{
                detail0: 'Watts',
                detail1: 'Certificacion',
                detail2: 'Es ATX',
            }
        }else if(category === 'CASE'){
            return {
                detail0: 'Coolers N°',
                detail1: 'Factor',
                detail2: 'Con Ventana',
            }
        }else if(category === 'GPU'){
            return {
                detail0: 'Cantidad de Memoria',
                detail1: 'Tipo de Memoria',
                detail2: 'Consumo De Energia',
                //detail4:'SLI/CROSFIRE'  //wats
            }
        }else if(category === 'CPU'){
            return {
                detail0: 'Nulceos',
                detail1: 'Frecuencia',
                detail2: 'Consumo',
                //detail4: 'Proceso de Fabricacion',
                //detail5: 'Cpu Cooler', 

            }
        }else if(category === 'SSD'){
            return {
                detail0: 'Almacenamiento',
                detail1: 'Interface',
                detail2: 'Con tecnología 3D NAND',

            }
        }else if(category === 'HDD'){
            return {
                detail0: 'Almacenamiento',
                detail1: 'Velocidad de rotación',
                detail2: 'Externo',
                
            }
        }else if(category === 'MOTHER'){
            return {
                detail0: 'Plataforma',
                detail1: 'Socket',
                detail2: 'Type/slots de Ram',
                //detail: 'Slots M.2' , //intel / amd
                //detail6: 'RGB' // ddr4 4u
            }
        }else if(category === 'MONITOR'){
            return {
                detail0: 'Tipo de panel',
                detail1: 'Tipo de iluminacion',
                detail2: 'Tamaño de pantalla',
                //detail4: 'Montaje VESA'
            }
        }else if(category === 'MOUSE'){
            return {
                detail0: 'DPI',
                detail1: 'Cantidad de botones',
                detail2: 'Tipo de cable',
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