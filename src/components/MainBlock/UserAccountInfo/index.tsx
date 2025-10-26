import { IoMdClose } from 'react-icons/io'
import { BsThreeDots } from 'react-icons/bs'
import { FaCircle } from 'react-icons/fa'
import { useState } from 'react'
import Image from 'next/image'
import RoyAvatar from '@/public/avatars/Roy.jpeg'
import { USER_INFO_OBJECT } from 'src/info/user-info-object'

import styles from './styles.module.scss'

const UserInfo = () => {
  const [isPopupPhoto, setIsPopupPhoto] = useState(false)

  const [isDotsPopup, setIsDotsPopup] = useState<boolean>(false)

  const isOnline = USER_INFO_OBJECT.isOnline

  const viewUserPhoto = () => {
    setIsPopupPhoto(true)
  }

  const closeUserPhoto = () => {
    setIsPopupPhoto(false)
  }

  const openClosePopup = () => {
    setIsDotsPopup((prevState) => !prevState)
  }

  return (
    <div className={styles.userInfo}>
      <div className={styles.userInfoBlock}>
        <div className={styles.userPhoto}>
          <div className={styles.userPhotoImg} onClick={viewUserPhoto}>
            <Image
              className={styles.userPhotoIcon}
              src={RoyAvatar}
              alt="avatar"
            />
          </div>
          {isPopupPhoto && (
            <div className={styles.userPhotoPopup}>
              <Image src={RoyAvatar} alt="avatar" />
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
          <h2 className={styles.userNameHeading}>Konstantin Roy</h2>
          <h3 className={styles.userNameAdditionalInfo}>Frontend developer</h3>
        </div>
      </div>

      <div className={styles.settings}>
        <BsThreeDots onClick={openClosePopup} />
      </div>
      {isDotsPopup && (
        <div className={styles.dotsPopup}>
          <p>Add photo</p>
          <p>Delete photo</p>
        </div>
      )}
    </div>
  )
}

export default UserInfo
