import React from 'react'
import { useState, useRef } from 'react'
import styles from './Feedback.module.css'
import Button from '../Button/Button'

function StateVsRef() {
  const input = useRef()
  const [show, setShow] = useState(false)

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setShow(true)
    }
  }

  return (
    <div>
      <h3>Input Value: {show && input.current.value}</h3>
      <input 
        className={styles.control} 
        type='text'
        ref={input} 
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default function FeedBack() {
  const [form, setForm] = useState({
    name: '',
    hasError: true,
    reason: 'help',
  })

  // const [name, setName] = useState('')
  // const [hasError, setHasError] = useState(false)
  // const [reason, setReason] = useState('help')

  function handleNameChange(e) {
    // setName(e.target.value)
    // setHasError(e.target.value.trim().length === 0)
    setForm((prev) => ({
      ...prev,
      name: e.target.value,
      hasError: e.target.value.trim().length === 0,
    }))
  }

  

  return (
    <section>
      <h3 className={styles.formTitle}>Обратная связь</h3>

      <form className={styles.formName}>
        <label 
          className={styles.labelName} 
          htmlFor='name'>
            Ваше имя
        </label>
        <input 
          className={styles.control} 
          type='text' 
          id='name' 
          value={form.name} 
          style={{
            border: form.hasError ? '1px solid red' : null,
          }}
          onChange={handleNameChange}
        />

        <label className={styles.feedLabel} htmlFor='reason'>Служба поддержки</label>
        <select 
          className={styles.control} 
          id='reason'
          value={form.reason}
          onChange={(e) => 
            setForm((prev) => ({ ...prev, reason: e.target.value}))
          }
        >
          <option value='error'>Ошибка</option>
          <option value='help'>Помощь</option>
          <option value='suggest'>Предложение</option>
        </select> 
      </form>

      <StateVsRef />

      <Button 
        disabled={form.hasError}
        isActive={!form.hasError}
        className={styles.formBtn}>Отправить</Button>
    </section>
  )
}
