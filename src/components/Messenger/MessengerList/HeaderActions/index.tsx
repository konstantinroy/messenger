import { FaSearch, FaPhoneAlt } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { useMessenger } from '@/src/providers/useMessenger'
import { MessagesList } from '@/src/info/messages-list'
import { IMessagesList } from '@/src/info/messages-list'

import styles from './styles.module.scss'

const HeaderActions = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isSearch, setIsSearch] = useState(false)
  const { setMessagesList } = useMessenger()

  const searchOnOff = () => {
    setIsSearch((prevState) => !prevState)
  }

  const messagesFilter = (
    searchText: string,
    data: IMessagesList[],
  ): IMessagesList[] => {
    if (searchText === '') {
      return data
    }

    return data.filter((item) => {
      const searchTextLower = searchText.toLowerCase()
      const messageLower = item.message.toLowerCase()

      return messageLower.includes(searchTextLower)
    })
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const debounceSearch = () => {
      timeoutId = setTimeout(() => {
        const filteredMessages = messagesFilter(searchTerm, MessagesList)
        setMessagesList(filteredMessages)
      }, 300)
    }

    debounceSearch()

    return () => {
      clearTimeout(timeoutId)
    }
  }, [searchTerm])

  return (
    <div className={styles.headerActions}>
      {isSearch ? (
        <div className={styles.input}>
          <input
            value={searchTerm}
            type="text"
            placeholder="Search by message"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      ) : (
        <FaPhoneAlt className={styles.phoneIcon} />
      )}

      <div className={styles.headerActionsIcons}>
        <FaSearch className={styles.searchIcon} onClick={searchOnOff} />
        <BsThreeDotsVertical className={styles.dotsIcon} />
      </div>
    </div>
  )
}

export default HeaderActions
