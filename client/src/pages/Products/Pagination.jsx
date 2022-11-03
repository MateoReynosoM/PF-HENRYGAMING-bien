import { Nav, Pagination } from "react-bootstrap"
import "./styles/Pagination.css"
import {MdNavigateNext, MdNavigateBefore} from "react-icons/md"

function Pages({currentPage, pagination, pageNumbers}) {
  const slicer = (currentPage, pageNumbers) => { 
    if (currentPage <= 5 || pageNumbers < 9) {
      return 0
    } else if (pageNumbers - 5 < currentPage) { 
      return pageNumbers - 9
    } else return currentPage - 5 
  }
  const firstSlice = slicer(currentPage, pageNumbers.length)
  const secondSlice = firstSlice + 9
  const iterableNumbers = pageNumbers.slice(firstSlice, secondSlice)
  return (
    <Nav className="d-flex justify-content-center py-2 custom-pagination">
      <Pagination bsPrefix="custom-pagination">
        {!pageNumbers.length && <h2>No Products Found!</h2>} 
        <Pagination.Item className="paginationItem" disabled={currentPage === 1} onClick={() => {pagination(1)}}><MdNavigateBefore/><MdNavigateBefore/></Pagination.Item>
        <Pagination.Item className="paginationItem" disabled={currentPage === 1} onClick={() => pagination(currentPage > 1 ? currentPage - 1 : 1)}><MdNavigateBefore/></Pagination.Item>
        {iterableNumbers?.map(number => <Pagination.Item  className="paginationItem text-center" style={{width: "43px"}} key={number} active={number === currentPage} onClick={() => pagination(number)}>{number}</Pagination.Item>)}
        <Pagination.Item className="paginationItem" disabled={currentPage === pageNumbers.length}onClick={() => pagination(currentPage < pageNumbers.length ? currentPage + 1: currentPage)}><MdNavigateNext/></Pagination.Item>
        <Pagination.Item className="paginationItem" disabled={currentPage === pageNumbers.length} onClick={() => {pagination(pageNumbers[pageNumbers.length -1])}}><MdNavigateNext/><MdNavigateNext/></Pagination.Item>
      </Pagination>
    </Nav>
  )
}

export default Pages