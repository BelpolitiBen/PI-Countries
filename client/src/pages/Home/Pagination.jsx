import React from 'react'
import { StyledPagination } from './styles/Pagination.styled'

function Pagination({currentPage, pagination, pageNumbers}) {
  const slicer = (currentPage, pageNumbers) => {
    if (currentPage <= 5 || pageNumbers < 8) {
      return 0
    } else if (pageNumbers - 5 < currentPage) {
      return pageNumbers - 9
    } else return currentPage - 5
  }
  const firstSlice = slicer(currentPage, pageNumbers.length)
  const secondSlice = firstSlice + 9
  const iterableNumbers = pageNumbers.slice(firstSlice, secondSlice)
  return (
    <StyledPagination>
      <ul>
        {!pageNumbers.length && <h2>No Countries Found!</h2>}
        <li ><button className={`arrow ${currentPage > 1 && "visible"}`}onClick={() => {pagination(1)}}>&lt;&lt;</button></li>
        <li ><button className={`arrow ${currentPage > 1 && "visible"}`}onClick={() => pagination(currentPage > 1 ? currentPage - 1 : 1)}>&lt;</button></li>
        {iterableNumbers?.map(number => <li key={number} className={`number ${number === currentPage && "current"}`}><button onClick={() => pagination(number)}>{number}</button></li>)}
        <li ><button className={`arrow ${currentPage < pageNumbers.length && "visible"}`}onClick={() => pagination(currentPage < pageNumbers.length ? currentPage + 1: currentPage)}>&gt;</button></li>
        <li ><button className={`arrow ${currentPage < pageNumbers.length && "visible"}`}onClick={() => {pagination(pageNumbers[pageNumbers.length -1])}}>&gt;&gt;</button></li>
      </ul>
    </StyledPagination>
  )
}

export default Pagination