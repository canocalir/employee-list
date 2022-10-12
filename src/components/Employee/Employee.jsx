import React from 'react'
import style from './Employee.module.scss'

const Employee = ({employee}) => {
  return (
    <article className={style.container}>
        <div className={style.photo}>
            <img src={employee.image}/>
        </div>
        <div className={style.heading}>
            <h4>{employee.name}</h4>
            <div className={style.email}>
            {employee.email}
        </div>
        <div className={style.age}>
            {employee.age}years
        </div>
        </div>
    </article>
  )
}

export default Employee