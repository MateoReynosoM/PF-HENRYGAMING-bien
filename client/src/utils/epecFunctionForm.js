import { Card, FloatingLabel, Form } from "react-bootstrap"
import Table from "react-bootstrap/Table";
import {Row, Col} from 'react-bootstrap'


const espec = (values,  errors, touched, handleChange, handleBlur, detail1, detail2, detail3)=>{

        return(
            <>  
            <Row>
                <Col>

                <FloatingLabel
                    controlId={`floating${detail1}`}
                    label={detail1}
                    className="mb-3"
                >
                    <Form.Control type={'detail1'} name={'detail1'} onChange={handleChange} onBlur={handleBlur} value={values.detail1} />      
                {errors.detail1 && touched.detail1 && errors.detail1}
                </FloatingLabel>
                
                </Col>
                <Col>
                <FloatingLabel
                    controlId={`Floating${detail2}`}
                    label={detail2}
                    className="mb-3"
                >
                <Form.Control type={'detail2'} name={'detail2'} onChange={handleChange} onBlur={handleBlur} value={values.detail2}/>    
                {errors.detail2 && touched.detail2 && errors.detail2}
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel
                    controlId={`floating${detail3}`}
                    label={detail3}
                    className="mb-3"
                >
                    <Form.Control type={'detail3'} name={'detail3'} onChange={handleChange} onBlur={handleBlur} value={values.detail3}/>
                {errors.detail3 && touched.detail3 && errors.detail3}
                </FloatingLabel>
                
                </Col>
            </Row>
                {/* <div>
                    <label>{detail3}</label>
                   <select name={'detail3'} onChange={handleChange} onBlur={handleBlur}>
                    <option value={true}>Si</option>
                    <option value={false}>No</option>
                   </select>
                   {errors.detail3 && touched.detail3 && errors.detail3}
                </div> */}
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
                <tr>
                    <td>{objCategory.detail1}</td>
                    <td>{data.detail1}</td>
                </tr>
                <tr>
                    <td>{objCategory.detail2}</td>
                    <td>{data.detail2}</td>    
                </tr>
                <tr>
                    <td>{objCategory.detail3}</td>
                    <td>{data.detail3}</td>
                </tr>
            </tbody>
        </Table>)

}

const propsFormik = (category)=>{

        if(category === 'RAM'){
            return {
            detail1: 'Cantidad de Ram',
            detail2: 'Tipo de Memoria',
            detail3: 'Frecuencia',
            //detail4: 'Es SODIMM' //ddr4
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
                detail3: 'Consumo De Energia',
                //detail4:'SLI/CROSFIRE'  //wats
            }
        }else if(category === 'CPU'){
            return {
                detail1: 'Nulceos',
                detail2: 'Frecuencia',
                detail3: 'Consumo',
                //detail4: 'Proceso de Fabricacion',
                //detail5: 'Cpu Cooler', 

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
                detail1: 'Plataforma',
                detail2: 'Socket',
                detail3: 'Type/slots de Ram',
                //detail: 'Slots M.2' , //intel / amd
                //detail6: 'RGB' // ddr4 4u
            }
        }else if(category === 'MONITOR'){
            return {
                detail1: 'Tipo de panel',
                detail2: 'Tipo de iluminacion',
                detail3: 'Tamaño de pantalla',
                //detail4: 'Montaje VESA'
            }
        }else if(category === 'MOUSE'){
            return {
                detail1: 'DPI',
                detail2: 'Cantidad de botones',
                detail3: 'Tipo de cable',
            }
        }else if(category === 'COOLER'){
            return {
                detail1: 'Max speed',
                detail2: 'Size',
                detail3: 'Led',
            }
        }else if(category === 'KEYBOARD'){
            return {
                detail1: 'Tipo de Teclado',
                detail2: 'Tipo de Mecanismo',
                detail3: 'Retroiluminacion',
            }
        }else if(category === 'SOUND'){
            return {
                detail1: 'Audio',
                detail2: 'Respuesta',
                detail3: 'Conexion',
            }
        }
        //Agregar ultimas categorias.
    
}






export {
    espec,
    propsFormik,
    especDetail
}