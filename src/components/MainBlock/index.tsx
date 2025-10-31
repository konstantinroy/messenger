'use client'

import { useMessenger } from 'src/providers/useMessenger'
import UserInfo from './UserAccountInfo/index'
import Friends from './Friends'
import Calls from './Calls'
import DialogsList from './DialogsList/index'
import Settings from './Settings'
import LoaderSpinner from './LoaderSpinner'

import styles from './styles.module.scss'

const MainBlock: React.FC = () => {
  const { activeButton } = useMessenger()

  if (!activeButton) {
    return <LoaderSpinner />
  }

  return (
    <div className={styles.mainBlock}>
      <UserInfo />
      <Friends />
      <Calls />
      <DialogsList />
      <Settings />
    </div>
  )
}

export default MainBlock
