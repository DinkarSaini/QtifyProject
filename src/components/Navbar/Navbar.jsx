import React from 'react'
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Search1 from '../SearchBar/search1';
import styles from './Navbar.module.css'

const Navbar = ({albums}) => {
  console.log(albums,"albums")
  return (
    <nav className={styles.navbar}>
        <Logo /> 
        <Search1 data={albums}/>
        <Button children="Give Feedback"/>
    </nav>
  )
}

export default Navbar