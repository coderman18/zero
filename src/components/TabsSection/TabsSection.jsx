import React from 'react'
import Button from '../Button/Button'
import styles from './TabsSection.module.css'

export default function TabsSection({active, onChange}) {
  return (
    <section className={styles.sectionTabs}>

      <Button isActive={active === 'main'} onClick={() => onChange('main')}>Главная</Button>

      <Button isActive={active === 'feedback'} onClick={() => onChange('feedback')}>Обратная связь</Button>

      <Button isActive={active === 'effect'} onClick={() => onChange('effect')}>Эффект</Button>

    </section>
  )
}
