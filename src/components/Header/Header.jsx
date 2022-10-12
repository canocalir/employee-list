import React from 'react'
import style from './Header.module.scss'

const Header = ({indexOfFirstUser, indexOfLastUser}) => {
  console.log(indexOfFirstUser)
  return (
    <div>
        <h3 className={style.heading}>Employee List</h3>
        <h5 className={style.count}>(Employees {indexOfFirstUser < 1 ? null : indexOfFirstUser} to {indexOfLastUser})</h5>
    </div>
  )
}

export default Header