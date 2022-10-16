import { Alert, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {useGetAllProductsQuery} from "../../redux/rtk-api"
import Cards from './Cards'
import Filtering from './Filters'

function Products() {
    const {data, error, isLoading} = useGetAllProductsQuery()
    const filteredCards = useSelector(state => state.main.filteredCards)
    const notFound = useSelector(state => state.main.notFound)
    const hasFiltered = useSelector(state => state?.main.hasFiltered)
    return (
        <div className='catalogueContainer'>
            <Filtering data={data}/>
            {error ? (
                    <>Oh no, there was an error</>
                    ) : isLoading ? (
                    <>Loading...</>
                    ) : data ? (
                    <>
                        {!hasFiltered ? <Cards data={data}/> : filteredCards.length && !notFound ? <Cards data={filteredCards}/> : <Container className="d-flex justify-content-center flex-column">
                            <div className='my-10 opacity-0'>asd</div>
                            <Alert className="d-flex justify-content-center w-100"variant="warning">
                                <Alert.Heading>Specified product not found</Alert.Heading>
                            </Alert>
                        </Container>}
                    </>
            ) : null}
        </div>
    )
}

export default Products