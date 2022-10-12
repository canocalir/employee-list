import React from 'react'
import data from '../../data'
import style from './Button.module.scss'

const Button = ({ setCurrentPage, currentPage, usersPerPage }) => {
  const currentUserCount = data.length / usersPerPage
    const nextPage = () => {
            currentPage === currentUserCount ? setCurrentPage(currentPage === currentUserCount) : setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
      currentPage < 2 ? setCurrentPage(currentUserCount): setCurrentPage(currentPage - 1)
    }
  return (
    <div className={style.button}>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
    </div>
  )
}

export default Button