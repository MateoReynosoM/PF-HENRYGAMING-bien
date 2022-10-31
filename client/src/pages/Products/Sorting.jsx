import { sorting, displayFilters } from '../../redux/actions';
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

function Sorting({data, currentSort, setSort}) {

    const dispatch = useDispatch()

    function handleSorting(e) {
        e.preventDefault();
        setSort(e.target.value)
        dispatch(sorting(e.target.value));
        dispatch(displayFilters([...data]))
    }

    return (
        <Form.Select name="sorting" onChange={handleSorting} value={currentSort} htmlSize="1" defaultValue={"Sort:"} >
                    <option value="Sort:" disabled>Sorting</option>
                    <optgroup label="Alphabetically">
                        <option value="A-Z">Ascending</option>
                        <option value="Z-A">Descending</option>  
                    </optgroup>
                    <optgroup label="By price">
                        <option value="Highest Price">Ascending</option>
                        <option value="Lowest Price">Descending</option>  
                    </optgroup>    
        </Form.Select>
    )
}

export default Sorting