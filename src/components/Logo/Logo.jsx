import React from 'react'
import styles from './logo.module.css' 
import logo from '../../img/icon/university.png'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img 
          className={styles.icon}
          src={logo} 
          alt='React'
          width={28}
          height={28} 
        />
        <h3>React University</h3>
    </div>
  )
}
