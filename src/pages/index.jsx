import { Writes } from '@/elements/Writes/Writes'
import styles from '@/styles/Home.module.sass'
import clsx from 'clsx'
import { useState } from 'react'

export const Home = () => {
  const [tap, setTap] = useState(true)
  return (
    <>
      <div className={clsx(styles.modal_holder, tap ? styles.show_holder : '')}></div>
      <div className={clsx(styles.modal_window, tap ? styles.show_window : '')}>
        <div className={styles.wrapper}>
          <div className={styles.heart_block}>
            <div onClick={() => setTap(false)} className={styles.heart}></div>
            <h1>Tap Tap!</h1>
          </div>
        </div>
      </div>
      <Writes />
    </>
  )
}

export default Home
