import { Nav, Pagination } from "react-bootstrap"

function Pages({currentPage, pagination, pageNumbers}) {
    console.log(currentPage)
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
    <Nav className="d-flex justify-content-center py-2">
      <Pagination>
        {!pageNumbers.length && <h2>No Products Found!</h2>} 
        <Pagination.Item disabled={currentPage === 1} onClick={() => {pagination(1)}}>&lt;&lt;</Pagination.Item>
        <Pagination.Item disabled={currentPage === 1} onClick={() => pagination(currentPage > 1 ? currentPage - 1 : 1)}>&lt;</Pagination.Item>
        {iterableNumbers?.map(number => <Pagination.Item className="text-center" style={{width: "43px"}} key={number} active={number === currentPage} onClick={() => pagination(number)}>{number}</Pagination.Item>)}
        <Pagination.Item disabled={currentPage === pageNumbers.length}onClick={() => pagination(currentPage < pageNumbers.length ? currentPage + 1: currentPage)}>&gt;</Pagination.Item>
        <Pagination.Item disabled={currentPage === pageNumbers.length} onClick={() => {pagination(pageNumbers[pageNumbers.length -1])}}>&gt;&gt;</Pagination.Item>
      </Pagination>
    </Nav>
  )
}

export default Pages