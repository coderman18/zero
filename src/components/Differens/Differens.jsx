import { useState } from "react";
import Button from "../Button/Button";
import { differens} from '../../data'
import styles from './Differens.module.css'

export default function Differens () {
  const [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }
  return (
    <section className={styles.section}>
          <h3>React</h3>
          <Button
            isActive={contentType === 'easy'} 
            onClick={() => handleClick('easy')}>Где используют React</Button>
          <Button 
            isActive={contentType === 'free'}
            onClick={() => handleClick('free')}>Кто использует React</Button>
          <Button 
            isActive={contentType === 'all'}
            onClick={() => handleClick('all')}>Какое будущее у React</Button>

          {contentType ? (
            <p>{differens[contentType]}</p>
          ) : (
            <div>Read...</div> /* начальное состояние, контент обновляется при рендере */
          )}
      </section> 
  )
}