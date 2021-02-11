import React, { FC } from 'react'

// view
import styles from './index.module.css'

type Props = {
  isActiveSidebar: boolean
  onToggleSidebar: () => void
}

const Header: FC<Props> = ({ isActiveSidebar, onToggleSidebar }) => (
  <header className={styles.header}>
    <h1 className={styles.title} data-is-shown={!isActiveSidebar}>
      Kyoto Chocolate Map
    </h1>
    <button className={styles.button} type="button" onClick={onToggleSidebar}>
      <span>Hide Navigation</span>
    </button>
  </header>
)

export default Header
