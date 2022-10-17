import { useState } from 'react'
import {Form, Nav} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { displayFilters, notFound, saveFilteredData, hasFiltered } from '../../redux/actions'
import { useLazyGetProductsFilterByTypeQuery, useLazyGetProductsFilterByBrandQuery, useLazyGetProductsFilterByPriceQuery } from '../../redux/rtk-api'
import {types, brands} from "../../utils/constants.js"
import { brandNameToId } from '../../utils/brandNameToId'
import ReactSlider from 'react-slider'
import styles from "./styles/Filters.css"
import Sorting from './Sorting'

function Filtering({data, pagination}) {
    const dispatch = useDispatch()
    const [triggerType] = useLazyGetProductsFilterByTypeQuery({})
    const [triggerBrand] = useLazyGetProductsFilterByBrandQuery({})
    const [triggerPrice] = useLazyGetProductsFilterByPriceQuery({})
    
    const [input, setInput] = useState({
        price: [0, 1200],
        type: null,
        brand: null
    })

    const handleFiltering = async (e) => {
        const {name, value} = e.target ? e.target : e
        name && setInput({...input, [name]: value})
        if (!name) { // No me deja ponerle nombre al slider de precio, por ahora hago el check asi
            const filteredData = await triggerPrice(value)
            if (!filteredData.isError) {
                dispatch(saveFilteredData({name: "price", filter: filteredData.data})) 
                dispatch(notFound(false)) 
            } else dispatch(notFound(true))
        }
        if (name === "type") {
            const filteredData = await triggerType(value)
            if (!filteredData.isError) {
                dispatch(saveFilteredData({name: name, filter: filteredData.data}))
                dispatch(notFound(false))
            } else dispatch(notFound(true))
        }
        if (name === "brand") {
            const filteredData = await triggerBrand(brandNameToId(value))
            if (!filteredData.isError) {
                dispatch(saveFilteredData({name: name, filter: filteredData.data}))
                dispatch(notFound(false))
            } else dispatch(notFound(true))
        }
        dispatch(displayFilters([...data]))
        dispatch(hasFiltered())
        pagination(1)
    }
    
    return (
        <Nav className='d-flex justify-content-center align-items-center pt-2'>
            <Nav.Item className='px-2 d-flex align-items-center justify-content-center'>
                <Form.Label className="mb-0 px-1">Price: </Form.Label>
                <div className='d-flex flex-column justify-content-center'>
                <ReactSlider
                    onAfterChange={(value) => handleFiltering({value: value})}
                    onChange={(value) => setInput(currentInput => ({...currentInput, price: value}))}
                    className='customSlider'
                    thumbClassName='customSlider-thumb'
                    trackClassName='customSlider-track'
                    min={0}
                    max={1200}
                    value={input.price}
                    pearling
                    minDistance={1}
                />
                <Form.Text className="text-center pt-1">Min: {input.price[0]} Max: {input.price[1]}</Form.Text>
                </div>
            </Nav.Item>
            <Nav.Item className='px-2'>
                <Form.Select name="type" onChange={handleFiltering} htmlSize="1" defaultValue={"Types"} >
                    <option value="Types" disabled>Types</option>
                    {types.map((t, i) => (<option key={i} value={t}>{t}</option>))}
                </Form.Select>
            </Nav.Item>
            <Nav.Item className='px-2'>
                <Form.Select name="brand" onChange={handleFiltering} htmlSize="1" defaultValue={"Brand"} >
                    <option value="Brand" disabled>Brand</option>
                    {brands.map((b, i) => (<option key={i} value={b}>{b}</option>))}
                </Form.Select>
            </Nav.Item>
            <Nav.Item className='px-2'>
                <Sorting data={data}></Sorting>
            </Nav.Item>
        </Nav>
    )
}

export default Filtering