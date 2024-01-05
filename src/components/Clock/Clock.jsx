import React, { useEffect } from 'react'
import { useState } from 'react';
import styles from './Clock.module.css'

export default function Clock() {
  let [date, setDate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(()=> setDate(new Date()), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])
    
    
  return (
    <div className={styles.clock}>
      <span>Время в Калиниграде: {date.toLocaleTimeString()}</span>
    </div>
  )
}