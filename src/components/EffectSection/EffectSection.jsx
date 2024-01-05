import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'

import styles from './EffectSection.module.css'

export default function EffectSection() {
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  // запрос к серверу https://jsonplaceholder.typicode.com/posts
  

  useEffect(() => {
      async function fetchPosts() {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await response.json()
      setPosts(posts)
      setLoading(false)
    }
    fetchPosts()
  }, [])
  

  return (
    <section className={styles.sectionEffect}>
      <h3>Effects</h3>

      <Button onClick={() => setModal(true)} >useEffect - что это</Button>

      <Modal open={modal}>
        <h3>Хук useEffect в React</h3>
        <p>
           позволяет выполнять код, который нужно выполнить после отрисовки компонента или после каждого обновления компонента. Например, вы можете использовать useEffect для загрузки данных с сервера, подписки на события или изменения документа. Essaentially, это позволяет вам управлять "эффектами" в ваших компонентах React.
        </p>
        <Button
          onClick={() => setModal(false)}
          className={styles.button}
        >Закрыть...</Button>
      </Modal>

      

      {loading && <p>Загрузка...</p>}

      {!loading && (
        <div className={styles.container}>
        <h3>Ваши комментарии</h3>
          {posts.map((post) => (
            <>
              <h4 key={post.id}>{post.title}</h4>
              <p>{post.body}</p>
            </>
          ))}
        </div>
      )}

    </section>
  )
}
