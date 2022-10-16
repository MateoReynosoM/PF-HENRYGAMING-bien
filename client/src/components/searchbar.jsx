import {useGetPartsByNameQuery} from "../redux/rtk-api"
import swAlert from 'sweetalert';


function searchbar() {

    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim()
        console.log(keyword)
    
        if (keyword.length === 0) {
            swAlert(<h5>Debe escribir una palabra clave</h5>)
        }else if (keyword.length < 4){
            swAlert(<h5>Debes escribir mas de 4 caracteres</h5>)
        } else {
            e.currentTarget.keyword.value = "";
            useGetPartsByNameQuery (keyword)
        }
    
    }

        return (
            <div>
                <form className="d-flex" role="search" onSubmit={submitHandler}>
                            
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            
                             <button className="btn btn-outline-success" type="submit">Search</button>
     
                </form>
            </div>
    )
}

export default searchbar; 