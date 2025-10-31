import { FaSearch } from 'react-icons/fa'
import { useState, useEffect, useCallback } from 'react'
import { useMessenger } from '@/src/providers/useMessenger'
import { Humans } from '@/src/info/humans-array'
import { HumansTypes } from '@/src/info/humans-array'

import styles from './styles.module.scss'

const SearchInput = () => {
  // Текст поля ввода
  const [searchTerm, setSearchTerm] = useState<string>('')

  const { setHumansArray } = useMessenger()

  const dialogsFilter = useCallback(
    (searchText: string, data: HumansTypes[]): HumansTypes[] => {
      if (searchText === '') {
        return data
      }

      return data.filter((item) => {
        const searchTextLower = searchText.toLowerCase()
        const nameLower = item.name.toLowerCase()
        const secondNameLower = item.secondName.toLowerCase()

        return (
          nameLower.includes(searchTextLower) ||
          secondNameLower.includes(searchTextLower)
        )
      })
    },
    [],
  )

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const debounceSearch = () => {
      timeoutId = setTimeout(() => {
        const filteredDialogs = dialogsFilter(searchTerm, Humans)
        setHumansArray(filteredDialogs)
      }, 300)
    }

    debounceSearch()

    return () => {
      clearTimeout(timeoutId)
    }
  }, [searchTerm])

  return (
    <div className={styles.searchInput}>
      <div className={styles.searchIcon}>
        <FaSearch />
      </div>

      <div className={styles.input}>
        <input
          value={searchTerm}
          type="text"
          placeholder="Name search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  )
}

export default SearchInput
