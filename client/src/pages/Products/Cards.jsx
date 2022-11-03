import CardComponent from './Card'
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
        <div className='d-flex cardsContainer'>
            <div >
            <img className='vertical-banner' src="banner nvdia.png" alt="asdasd" />
            </div>
            <Container>
                <Row key={1} className="cardsContainer" >
                    {currentData?.map(p => (
                        <Col key={p.id} className="properCol" >
                        <CardComponent  id={p.id} img={p.img} brand={p.brand?.name} price={p.price} model={p.model}/>
                        </Col>
                    ))}
                </Row>
                <Pages currentPage={currentPage} pagination={pagination} pageNumbers={pageNumbers}/>
            </Container>
            <div>
            <img className='vertical-banner' src="banner hyperx.png" alt="" />
            </div>
        </div>
    )
}

export default Cards