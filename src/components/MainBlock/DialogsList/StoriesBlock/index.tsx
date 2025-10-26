import { FaPlus, FaUser } from 'react-icons/fa'
import Image from 'next/image'
import { Humans } from '@/src/info/humans-array'
import { HumansTypes } from '@/src/info/humans-array'
import styles from './styles.module.scss'

const StoriesBlock = () => {
  const storiesArray = [...Humans.slice(0, 3)]

  return (
    <div className={styles.storiesBlock}>
      <div className={styles.userPhoto}>
        <div className={styles.userPhotoImg}>
          <FaPlus className={styles.addStorie} />
        </div>
        <h2 className={styles.userNameHeading}>My story</h2>
      </div>
      {storiesArray.map((human: HumansTypes) => (
        <div key={human.id} className={styles.userPhoto}>
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
          <h2 className={styles.userNameHeading}>{human.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default StoriesBlock
