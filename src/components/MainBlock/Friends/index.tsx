import { useMessenger } from 'src/providers/useMessenger'
import SearchInput from '../DialogsList/SearchInput'
import FriendsList from './FriendsList'

import styles from './styles.module.scss'

const Friends: React.FC = () => {
  const { activeButton } = useMessenger()
  if (activeButton === null) {
    return null
  }
  return (
    <>
      {activeButton.title === 'Друзья' && <div className={styles.friends}>
        <div className={styles.contacts}>
          <h2 className={styles.contactsHeading}>Contacts</h2>
          <button className={styles.contactsButton} title="Add user">+</button>
        </div>

        <SearchInput />

        <FriendsList />

      </div>}
    </>
    
  )
}

export default Friends
