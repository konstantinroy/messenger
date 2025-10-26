import { useMessenger } from 'src/providers/useMessenger'
import SearchInput from './SearchInput/index'
import StoriesBlock from './StoriesBlock/index'
import DialogsBlock from './DialogsBlock/index'
import styles from './styles.module.scss'

const DialogsList = () => {
  const { activeButton } = useMessenger()
  if (activeButton === null) {
    return null
  }
  return (
    <>
      {activeButton.title === 'Сообщения' && <div className={styles.dialogsList}>
        <SearchInput />
        <StoriesBlock />
        <DialogsBlock />
      </div>}
    </>
    
  )
}

export default DialogsList
