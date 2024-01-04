import React from 'react'
import styles from './Header.module.css'
import Logo from '../Logo/Logo'
import Clock from '../Clock/Clock'

export default function Header(props) {
  return (
    <div className={styles.header}>
      <Logo />
      <Clock />
    </div>
  )
}
