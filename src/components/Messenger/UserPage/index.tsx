import { FaCircle, FaPhone } from 'react-icons/fa'
import { IoIosChatbubbles, IoMdClose } from 'react-icons/io'
import { BsThreeDots } from 'react-icons/bs'
import { useState } from 'react'
import { useMessenger } from 'src/providers/useMessenger'
import Image from 'next/image'
import CopyBtn from './CopyBtn'

import styles from './styles.module.scss'

const UserPage: React.FC = () => {
  const [isPopupPhoto, setIsPopupPhoto] = useState(false)
  const { humansArray, viewedUserId, openDialogHandler } = useMessenger()
  const viewedUser = humansArray.find((user) => user.id === viewedUserId)

  const userId = viewedUser?.id || 'user'
  const isOnline = viewedUser?.isOnline
  const userPhoto = viewedUser?.avatar
  const userName = viewedUser?.name
  const userSecondName = viewedUser?.secondName
  const userLogin = '@' + viewedUser?.login
  const userNumber = viewedUser?.number || 'number'

  const viewUserPhoto = () => {
    setIsPopupPhoto(true)
  }

  const closeUserPhoto = () => {
    setIsPopupPhoto(false)
  }

  if (viewedUserId === null) {
    return null
  }

  return (
    <div className={styles.userPage}>
      <div className={styles.header}>
        <h2>Information</h2>
      </div>
      <div className={styles.userInfoBlock}>
        <div className={styles.userPhoto}>
          <div className={styles.userPhotoImg} onClick={viewUserPhoto}>
            <Image
              className={styles.userPhotoIcon}
              src={userPhoto}
              alt="avatar"
            />
          </div>
          {isPopupPhoto && (
            <div className={styles.userPhotoPopup}>
              <Image src={userPhoto} alt="avatar" />
              <IoMdClose
                className={styles.userPhotoPopupClose}
                onClick={closeUserPhoto}
              />
            </div>
          )}
          {isOnline && (
            <div className={styles.isOnlineIcon}>
              <FaCircle />
            </div>
          )}
        </div>
        <div className={styles.userName}>
          <h2 className={styles.userNameHeading}>
            {userName + ' ' + userSecondName}
          </h2>
          <h3 className={styles.userNameAdditionalInfo}>
            {isOnline ? 'Online' : 'Was online...'}
          </h3>
        </div>
      </div>
      <div className={styles.actionsBlock}>
        <div
          className={styles.actionBlock}
          onClick={() => openDialogHandler(userId)}
        >
          <IoIosChatbubbles />
          <p>Chat</p>
        </div>
        <div className={styles.actionBlock}>
          <FaPhone />
          <p>Call</p>
        </div>
        <div className={styles.actionBlock}>
          <BsThreeDots />
          <p>More</p>
        </div>
      </div>
      <div className={styles.userFullInfo}>
        <div className={styles.userFullInfoContainer}>
          <div className={styles.userInfoList}>
            <h3>User login</h3>
            <p>{userLogin}</p>
          </div>
          <CopyBtn id="login" userLogin={userLogin} />

          {/* <div className={styles.userCopyInfoBtn}>
            <FaCopy onClick={() => copyTextToClipboard(userLogin)} />
          </div>
          <div className={styles.bubble}>
            {'login' + ' copied'}
          </div> */}
        </div>
        <div className={styles.userFullInfoContainer}>
          <div className={styles.userInfoList}>
            <h3>User phone</h3>
            <p>8-977-777-77-77</p>
          </div>
          <CopyBtn id="number" userNumber={userNumber} />
          {/* <div className={styles.userCopyInfoBtn}>
            <FaCopy onClick={() => copyTextToClipboard(userNumber)} />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default UserPage
