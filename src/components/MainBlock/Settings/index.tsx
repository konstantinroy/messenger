import { useMessenger } from 'src/providers/useMessenger'
import { useState } from 'react'
import SettingBlock from './SettingBlock'
import { USER_INFO_OBJECT } from 'src/info/user-info-object'
import { IUserInfo } from 'src/info/user-info-object'

import styles from './styles.module.scss'

const Settings: React.FC = () => {
  const { activeButton } = useMessenger()

  // Информация пользователя аккаунта
  const [userInfo, setUserInfo] = useState<IUserInfo>(USER_INFO_OBJECT)
  // Ключ изменяемого поля ввода
  const [currentEditingKey, setCurrentEditingKey] = useState<
    keyof IUserInfo | null
  >(null)

  if (activeButton === null) {
    return null
  }

  return (
    <>
      {activeButton.title === 'Настройки' && (
        <div className={styles.settings}>
          {Object.entries(userInfo).map(([key, value]) => {
            if (key !== 'isOnline') {
              const isEditing = currentEditingKey === key

              return (
                <SettingBlock
                  key={key}
                  objectKey={key as keyof IUserInfo}
                  value={value}
                  userInfo={userInfo}
                  setUserInfo={setUserInfo}
                  setCurrentEditingKey={setCurrentEditingKey}
                  isEditing={isEditing}
                />
              )
            }
          })}
        </div>
      )}
    </>
  )
}

export default Settings
