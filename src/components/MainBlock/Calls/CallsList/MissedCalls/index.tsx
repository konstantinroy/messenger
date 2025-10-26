import { FaUser, FaPhoneVolume } from 'react-icons/fa'

import Image from 'next/image'
import { HumansTypes } from '@/src/info/humans-array'
import { useMessenger } from '@/src/providers/useMessenger'

import styles from './styles.module.scss'

interface IisMissedButton {
    isMissedButton: boolean;
}

const MissedCalls: React.FC<IisMissedButton> = ({ isMissedButton }) => {
  const { humansArray } = useMessenger()
  const userNameHeadingMissed = `${styles.userNameHeading}
                      ${isMissedButton ? styles.userNameHeadingMissed : ''}`
  return (
    <>
      {isMissedButton &&
        humansArray
          .filter((human) => human.missedCalls.status)
          .map((human: HumansTypes) => (
            <div key={human.id} className={styles.callsBlock}>
              <div className={styles.userInfo}>
                {human.avatar ? (
                  <Image
                    className={styles.userPhotoIcon}
                    src={human.avatar}
                    alt="Avatar"
                  />
                ) : (
                  <FaUser className={styles.userPhotoIcon} />
                )}
                <div className={styles.userName}>
                  <h2 className={userNameHeadingMissed}>{human.name}</h2>
                  <div className={styles.additionalInfoBlock}>
                    <FaPhoneVolume />
                    <h3 className={styles.userNameAdditionalInfo}>
                      Пропущенный
                    </h3>
                  </div>
                </div>
              </div>

              <div className={styles.dateOfCall}>
                {human.missedCalls.timeOfLastCall}
              </div>
            </div>
          ))}
    </>
  )
}

export default MissedCalls
