import React, { FC } from 'react'

// view
import styles from './index.module.css'

export type Props = {
  showTitle: boolean
  onClickButton: () => void
}

const Header: FC<Props> = ({ showTitle, onClickButton }) => (
  <header className={styles.header}>
    <h1 className={styles.title} data-is-shown={showTitle}>
      Kyoto Chocolate Map
    </h1>
    <button className={styles.button} type="button" onClick={onClickButton}>
      <span>Hide Navigation</span>
    </button>
  </header>
)

export default Header
