import React, { FC } from 'react'

// view
import styles from './index.module.css'

const Loader: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.container} />
  </div>
)

export default Loader
