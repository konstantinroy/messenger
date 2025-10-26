import styles from './styles.module.scss'
import AllCalls from './AllCalls'
import MissedCalls from './MissedCalls'

const CallsList: React.FC<{ isMissedButton: boolean }> = ({
  isMissedButton,
}) => {
  return (
    <div className={styles.callsList}>
      <AllCalls isMissedButton={isMissedButton} />

      <MissedCalls isMissedButton={isMissedButton} />
    </div>
  )
}

export default CallsList
