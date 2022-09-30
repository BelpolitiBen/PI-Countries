import React from 'react'
import { StyledPagination } from './styles/Pagination.styled'

function Pagination({currentPage, pagination, pageNumbers}) {

  /* De el componente Home se le pasa a este componente el estado de la página actual (currentPage), 
  la función que setea la página actual (pagination) y el array con los números que se deben renderizar.
  Los números a renderizar se calculan en una función aparte (paginationHelper) junto a los paises a mostrar
  en las cards por cada página. */


  /* Esta función toma de argumentos la página actual y la cantidad total de páginas, y genera el primer argumento para el metodo slice a partir de estos. 
  Es de fines estéticos, sus objetivos son mostrar un total de 9 páginas, y que a menos que
  el usuario se encuentra en las primeras o últimas paginas, que la página actual quede centrada */
  const slicer = (currentPage, pageNumbers) => { 
    if (currentPage <= 5 || pageNumbers < 8) { //Si la página actual es menor o igual a 5, o si hay menos de 8 páginas en total, simplemente devuelve 0 
      return 0
    } else if (pageNumbers - 5 < currentPage) { //Si la página actual es mayor a la cantidad de páginas - 5, devuelve la cantidad de páginas menos 9 (que siempre serían las últimas 9)
      return pageNumbers - 9
    } else return currentPage - 5 // Si hay mas de 8 páginas y la página actual no esta ni al principio ni al final, devuelve la página actual - 5, centrandola
  }
  const firstSlice = slicer(currentPage, pageNumbers.length)
  const secondSlice = firstSlice + 9 //Una vez que la función de arriba genera el primer argumento para el .slice, el segundo es simplemente el primero + 9
  const iterableNumbers = pageNumbers.slice(firstSlice, secondSlice)
  return (
    <StyledPagination>
      <ul>
        {!pageNumbers.length && <h2>No Countries Found!</h2>} 
        <li><button className={`arrow ${currentPage > 1 && "visible"}`}onClick={() => {pagination(1)}}>&lt;&lt;</button></li>
        <li><button className={`arrow ${currentPage > 1 && "visible"}`}onClick={() => pagination(currentPage > 1 ? currentPage - 1 : 1)}>&lt;</button></li>
        {iterableNumbers?.map(number => <li key={number} className={`number ${number === currentPage && "current"}`}><button onClick={() => pagination(number)}>{number}</button></li>)}
        <li><button className={`arrow ${currentPage < pageNumbers.length && "visible"}`}onClick={() => pagination(currentPage < pageNumbers.length ? currentPage + 1: currentPage)}>&gt;</button></li>
        <li><button className={`arrow ${currentPage < pageNumbers.length && "visible"}`}onClick={() => {pagination(pageNumbers[pageNumbers.length -1])}}>&gt;&gt;</button></li>
      </ul>
    </StyledPagination>
  )
}

export default Pagination