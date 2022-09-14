import React from 'react'
import { StyledPagination } from './styles/Pagination.styled'

function Pagination({currentPage, pagination, pageNumbers}) {
  console.log(pageNumbers)
  return (
    <StyledPagination>
      <ul>
        {currentPage > 1 && <li className='prev'><button onClick={() => pagination(currentPage - 1)}>&lt;</button></li>}
        {pageNumbers?.map(number => <li key={number} className={`number ${number === currentPage && "current"}`}><button onClick={() => pagination(number)}>{number}</button></li>)}
        {currentPage < pageNumbers.length && <li className='next'><button onClick={() => pagination(currentPage + 1)}>&gt;</button></li>}
      </ul>
    </StyledPagination>
  )
}

export default Pagination