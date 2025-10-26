import { FaUser, FaCircle } from 'react-icons/fa'
import Image from 'next/image'
import { useMessenger } from '@/src/providers/useMessenger'
import { HumansTypes } from '@/src/info/humans-array'
import styles from './styles.module.scss'

interface IisMissedButton {
  isMissedButton: boolean;
}

const AllCalls: React.FC<IisMissedButton> = ({ isMissedButton }) => {
  const { humansArray } = useMessenger()
  return (
    <>
      {!isMissedButton &&
        humansArray
          .filter((human) => human.calls.call === true)
          .map((human: HumansTypes) => (
            <div key={human.id} className={styles.callsBlock}>
              <div className={styles.userInfo}>
                <div className={styles.userPhoto}>
                  <div className={styles.userPhotoImg}>
                    {human.avatar ? (
                      <Image
                        className={styles.userPhotoIcon}
                        src={human.avatar}
                        alt="Avatar"
                      />
                    ) : (
                      <FaUser className={styles.userPhotoIcon} />
                    )}
                  </div>
                  {human.isOnline && (
                    <div className={styles.isOnlineIcon}>
                      <FaCircle />
                    </div>
                  )}
                </div>

                <div className={styles.userName}>
                  <h2 className={styles.userNameHeading}>{human.name}</h2>
                  <h3 className={styles.userNameAdditionalInfo}>
                    {/* {`${'Был(-а) в сети...'}`} */}
                    {human.calls.call && human.calls.callDuration}
                  </h3>
                </div>
              </div>

              <div className={styles.dateOfCall}>
                {human.calls.timeOfLastCall}
              </div>
            </div>
          ))}
    </>
  )
}

export default AllCalls
