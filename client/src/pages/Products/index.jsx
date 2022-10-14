import React from 'react'
import { example } from '../../redux/actions'
import {useGetPartsQuery} from "../../redux/rtk-api"
import { useDispatch, useSelector } from 'react-redux'

function Products() {
    const dispatch = useDispatch()
    const {data, error, isLoading} = useGetPartsQuery()
    const exampleData = useSelector(state => state?.main.example)
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(example(e.target.value))
    }

    return (
        <>
            <button onClick={handleClick} value="example">RTK Example</button>
            {exampleData && <p>{exampleData}</p>}
            <div>
                {error ? (
                        <>Oh no, there was an error</>
                        ) : isLoading ? (
                        <>Loading...</>
                        ) : data ? (
                        <>
                            {data.map((p, i) => (
                                <div key={i}>
                                    <img src={p.img} alt="img not found" />
                                    <p>{p.price}</p>
                                </div>))}
                        </>
                ) : null}
            </div>
        </>
    )
}

export default Products