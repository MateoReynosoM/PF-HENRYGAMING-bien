import { useState } from 'react'
import {Button, Form, Nav} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { displayFilters, notFound, saveFilteredData, hasFiltered, reset } from '../../redux/actions'
import { useLazyGetProductsFilterByTypeQuery, useLazyGetProductsFilterByBrandQuery, useLazyGetProductsFilterByPriceQuery, useGetCategoriesQuery, useLazyGetBrandsByTypeQuery } from '../../redux/rtk-api'
import ReactSlider from 'react-slider'
import styles from "./styles/Filters.css"
import Sorting from "./Sorting"

function Filtering({data, pagination}) {
    const dispatch = useDispatch()
    const {data: types} = useGetCategoriesQuery()
    const [triggerType] = useLazyGetProductsFilterByTypeQuery({})
    const [triggerBrand] = useLazyGetProductsFilterByBrandQuery({})
    const [triggerPrice] = useLazyGetProductsFilterByPriceQuery({})
    const [triggerSelectBrands] = useLazyGetBrandsByTypeQuery()
    const [brands, setBrands] = useState([])
    const [input, setInput] = useState({
        price: [0, 1200],
        type: "Type",
        brand: "Brand",
    })
    const [sort, setSort] = useState("Sort:")

    const handleFiltering = async (e) => {
        const {name, value} = e.target ? e.target : e
        console.log(value)
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
            const selectBrands = await triggerSelectBrands(value)
            setBrands(selectBrands.data)
            if (!filteredData.isError) {
                setInput(currentInput => ({...currentInput, brand: "Brand"}))
                dispatch(saveFilteredData({name: "brand", filter: []}))
                dispatch(saveFilteredData({name: name, filter: filteredData.data}))
                dispatch(notFound(false))
            } else dispatch(notFound(true))
        }
        if (name === "brand") {
            const filteredData = await triggerBrand(value)
            if (!filteredData.isError) {
                dispatch(saveFilteredData({name: name, filter: filteredData.data}))
                dispatch(notFound(false))
            } else dispatch(notFound(true))
        }
        dispatch(displayFilters([...data]))
        dispatch(hasFiltered())
        pagination(1)
    }
    const handleReset = (e) => {
        e.preventDefault()
        dispatch(reset())
        setInput({
            price: [0, 1200],
            type: "Type",
            brand: "Brand",
            sort: "Sorting"
        })
        setSort("Sort:")
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
                <Form.Select name="type" onChange={handleFiltering} value={input.type} htmlSize="1" defaultValue={"Type"} >
                    <option value="Type" disabled>Type</option>
                    {types?.map((t, i) => (<option key={i} value={t.id}>{t.name}</option>))}
                </Form.Select>
            </Nav.Item>
            {brands.length ? <Nav.Item className='px-2'>
                <Form.Select name="brand" onChange={handleFiltering} htmlSize="1" value={input.brand} defaultValue={"Brand"} >
                    <option value="Brand" disabled>Brand</option>
                    {brands?.map((b, i) => (<option key={i} value={b.id}>{b.brand}</option>))}
                </Form.Select>
            </Nav.Item> : <></>}
            <Nav.Item className='px-2'>
                <Sorting currentSort={sort} setSort={setSort} data={data}></Sorting>
            </Nav.Item>
            <Nav.Item className='px-2'>
                <Button variant="danger" type="button" onClick={handleReset}>Reset</Button>
            </Nav.Item>
        </Nav>
    )
}

export default Filtering