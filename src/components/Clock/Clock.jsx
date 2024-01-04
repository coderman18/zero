import React from 'react'
import { useState } from 'react';
import styles from './Clock.module.css'

export default function Clock() {
  let [date, setDate] = useState(new Date())
    setInterval(()=> setDate(new Date()), 1000)
    
  return (
    <div className={styles.clock}>
      <span>Время в Калиниграде: {date.toLocaleTimeString()}</span>
    </div>
  )
}