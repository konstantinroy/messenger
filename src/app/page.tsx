'use client'

import Sidebar from '../components/Sidebar/index'
import MainBlock from '../components/MainBlock/index'
import Messanger from '../components/Messenger'
import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <Sidebar />
        <MainBlock />
        <Messanger />
      </div>
    </>
  )
}
