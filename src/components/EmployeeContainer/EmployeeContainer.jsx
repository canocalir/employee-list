import style from './EmployeeContainer.module.scss'
import React, { useState } from 'react'
import Employee from '../Employee/Employee.jsx'
import data from '../../data.js'
import Button from '../Button/Button.jsx'
import Header from '../Header/Header.jsx'

const EmployeeContainer = () => {

const [currentPage, setCurrentPage] = useState(1)
const [usersPerPage] = useState(5)

const indexOfLastUser = currentPage * usersPerPage
const indexOfFirstUser = indexOfLastUser - usersPerPage

const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser) 

  return (
    <div className={style.container}>
        <Header indexOfLastUser={indexOfLastUser}
        indexOfFirstUser={indexOfFirstUser + 1}
        />
        {currentUsers.map((employee, id) => (
            <div key={id}>
            <Employee employee={employee}/>
            </div>
        ))}
        <Button data={data} currentPage={currentPage} setCurrentPage={setCurrentPage} usersPerPage={usersPerPage}/>
        </div>
  )
}

export default EmployeeContainer