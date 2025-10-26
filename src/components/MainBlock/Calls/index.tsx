import { useMessenger } from 'src/providers/useMessenger'
import { useState, useCallback } from 'react'
import CallsList from './CallsList'

import styles from './styles.module.scss'

export interface IFilterButtons {
  id: string;
  text: string;
  active: boolean;
}

const FILTER_BUTTONS = [
  {
    id: 'all',
    text: 'All',
    active: true,
  },
  {
    id: 'missed',
    text: 'Missed',
    active: false,
  },
]

const Calls: React.FC = () => {
  const { activeButton } = useMessenger()
  const [isMissedButton, setIsMissedButton] = useState<boolean>(false)

  const missedButtonHandler = useCallback((id: string) => {
    return setIsMissedButton(id === 'missed' ? true : false)
  }, [])

  const filterButtonStyles = useCallback(
    (id: string) => {
      if (isMissedButton && id === 'missed') {
        return styles.filterMissedButtonActive
      }
      if (!isMissedButton && id === 'all') {
        return styles.filterAllButtonActive
      }
    },
    [isMissedButton],
  )

  if (activeButton === null) {
    return null
  }

  return (
    <>
      {activeButton.title === 'Звонки' && <div className={styles.calls}>
        <div className={styles.callsHeading}>
          <h2 className={styles.callsHeadingText}>Calls</h2>
        </div>

        <div className={styles.filterButtons}>
          {FILTER_BUTTONS.map((button: IFilterButtons) => (
            <div
              key={button.id}
              className={`${styles.filterButton}
              ${filterButtonStyles(button.id)}`}
              onClick={() => missedButtonHandler(button.id)}
            >
              {button.text}
            </div>
          ))}
        </div>

        <CallsList
          isMissedButton={isMissedButton}
        />
      </div>}
    </>
    
  )
}

export default Calls
