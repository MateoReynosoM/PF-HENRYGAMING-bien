import CardComponent from './Card'
import { brandIdToName } from '../../utils/brandIdToName'
import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap'


function Cards({data}) {
    
    return (
          <Container>
                <Row key={1} className="cardsContainer" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {data?.map(p => (
                        <Col key={p.id} className="properCol" style={{justifyContent: "center"}}>
                        <CardComponent  id={p.id} img={p.img} brand={brandIdToName(p.brandId)} price={p.price} model={p.model}/>
                        </Col>
                    ))}
                </Row>
          </Container>
    )
}

export default Cards