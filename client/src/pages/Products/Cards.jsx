import CardComponent from './Card'
import { brandIdToName } from '../../utils/brandIdToName'
import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap'
import paginationHelper from '../../utils/paginationHelper';
import Pages from './Pagination';
import styles from "./styles/Cards.css"

function Cards({data, currentPage, pagination}) {
        const dataLength = data?.length
        const [[sliceStart, sliceEnd], pageNumbers] = paginationHelper(currentPage, dataLength)
        const currentData = data?.slice(sliceStart, sliceEnd)

    return (
        <Container>
            <Pages currentPage={currentPage} pagination={pagination} pageNumbers={pageNumbers}/>
            <Row key={1} className="cardsContainer" >
                {currentData?.map(p => (
                    <Col key={p.id} className="properCol" >
                    <CardComponent  id={p.id} img={p.img} brand={brandIdToName(p.brandId)} price={p.price} model={p.model}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Cards