import React, { FC } from 'react'

// view
import styles from './index.module.css'

type Props = {
  showTitle: boolean
  onToggleSidebar: () => void
}

const Header: FC<Props> = ({ showTitle, onToggleSidebar }) => (
  <header className={styles.header}>
    <h1 className={styles.title} data-is-shown={showTitle}>
      Kyoto Chocolate Map
    </h1>
    <button className={styles.button} type="button" onClick={onToggleSidebar}>
      <span>Hide Navigation</span>
    </button>
  </header>
)

export default Header
