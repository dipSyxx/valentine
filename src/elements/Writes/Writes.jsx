import { FlippingPages } from 'flipping-pages'
import 'flipping-pages/dist/style.css'
import { useState } from 'react'
import clsx from 'clsx'

import styles from './Writes.module.sass'

export const Writes = () => {
  const [selected, setSelected] = useState(0)

  const back = () => {
    setSelected((selected) => Math.max(selected - 1, 0))
  }

  const next = () => {
    setSelected((selected) => Math.min(selected + 1, 2))
  }

  return (
    <div>
      <div className={styles.pages}>
        <FlippingPages direction="right-to-left" onSwipeEnd={setSelected} selected={selected}>
          <div className={clsx(styles.page, styles.page1)}>Page 1</div>
          <div className={clsx(styles.page, styles.page2)}>Page 2</div>
          <div className={clsx(styles.page, styles.page3)}>Page 3</div>
        </FlippingPages>
      </div>
    </div>
  )
}
