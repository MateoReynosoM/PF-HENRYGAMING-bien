import React from 'react'
import {useGetAllProductsQuery} from "../../redux/rtk-api"
import Cards from './Cards'

function Products() {
    const {data, error, isLoading} = useGetAllProductsQuery()

    return (
            <div>
                {error ? (
                        <>Oh no, there was an error</>
                        ) : isLoading ? (
                        <>Loading...</>
                        ) : data ? (
                        <>
                            <Cards data={data}/>
                        </>
                ) : null}
            </div>
    )
}

export default Products