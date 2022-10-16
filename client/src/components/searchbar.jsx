import {useGetAllProductsQuery, useLazyGetProductsByModelQuery} from "../redux/rtk-api"
/* import swAlert from '@sweetalert/with-react'; */
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { displayFilters, hasFiltered, saveSearchedData } from "../redux/actions";
import { Button, Form } from "react-bootstrap";


function SearchBar() {
    const {data} = useGetAllProductsQuery()
    const [trigger] = useLazyGetProductsByModelQuery({})
    const dispatch = useDispatch()
    const [model, setModel] = useState("")
    const handleChange = (e) => {
        e.preventDefault()
        setModel(e.target.value)
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const keyword = model.trim()
        console.log(keyword)
        if (keyword.length === 0) {
            /* swAlert(<h3>Debe escribir una palabra clave</h3>) */
            alert("Debe escribir una palabra clave")
        }else if (keyword.length < 3){
            /* swAlert(<h3>Debes escribir mas de 3 caracteres</h3>) */
            alert("Debes escribir mas de 3 caracteres")
        } else {
            setModel("")
            const searchData = await trigger(keyword)
            dispatch(saveSearchedData([...searchData.data]))
            dispatch(displayFilters([...data]))
            dispatch(hasFiltered())
        }}
    return (
            <Form role="search" onSubmit={submitHandler} className="d-flex col-md-8">
                      <Form.Control
                        type="search"
                        value={model} 
                        onChange={handleChange}
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-warning" type="submit">Search</Button>
            </Form>
    )
}
export default SearchBar