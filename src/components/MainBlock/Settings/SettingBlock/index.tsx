import { FaCheck } from 'react-icons/fa'
import { Dispatch, SetStateAction, useState } from 'react'
import { IUserInfo } from 'src/info/user-info-object'

import styles from './styles.module.scss'

interface Props {
  objectKey: keyof IUserInfo
  value: string
  userInfo: IUserInfo
  setUserInfo: Dispatch<SetStateAction<IUserInfo>>
  setCurrentEditingKey: Dispatch<SetStateAction<keyof IUserInfo | null>>
  isEditing: boolean
}

const SettingBlock: React.FC<Props> = ({
  objectKey,
  value,
  userInfo,
  setUserInfo,
  setCurrentEditingKey,
  isEditing,
}) => {
  // Текст поля ввода
  const [settingNewText, setSettingNewText] = useState<string>('')

  // Изменение текста поля ввода
  const handleEditSettingText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettingNewText(e.target.value)
  }

  // Добавление нового значения в объект
  const editSettingValue = (clickedKey: string, newValue: string) => {
    if (newValue === '') {
      alert('Поле ввода не может быть пустым')
      return
    }
    const user = { ...userInfo }
    if (user.hasOwnProperty(clickedKey)) {
      const updatedUser = {
        ...user,
        [clickedKey]: newValue,
      }
      setUserInfo(updatedUser)
      setSettingNewText('')
      setCurrentEditingKey(null)
    }
  }

  // Стили блока информации
  const settingBlockStyles = `${
    isEditing ? styles.settingBlockForm : styles.settingBlock
  }`

  return (
    <div className={settingBlockStyles}>
      {isEditing ? (
        <div className={styles.formBlock}>
          <input
            type="text"
            value={settingNewText}
            onChange={handleEditSettingText}
            placeholder={'Edit ' + objectKey}
          />
          <div className={styles.settingCheckIcon}>
            <FaCheck
              onClick={() => editSettingValue(objectKey, settingNewText)}
            />
          </div>
        </div>
      ) : (
        <>
          <div className={styles.settingName}>{objectKey}</div>
          <div
            className={styles.settingValue}
            onClick={() => setCurrentEditingKey(objectKey)}
          >
            {value}
          </div>
        </>
      )}
    </div>
  )
}

export default SettingBlock
