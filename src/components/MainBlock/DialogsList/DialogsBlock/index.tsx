import Dialog from './Dialog/index'
import { HumansTypes } from '../../../../info/humans-array'
import { useMessenger } from '@/src/providers/useMessenger'

import styles from './styles.module.scss'

const DialogsBlock: React.FC = () => {
  const { humansArray } = useMessenger()

  return (
    <div className={styles.dialogs}>
      {humansArray?.map((human: HumansTypes) => (
        <Dialog
          key={human.id as string}
          id={human.id}
          avatar={human.avatar}
          name={human.name}
          secondName={human.secondName}
          status={human.status}
          isOnline={human.isOnline}
          timeOfLastMessage={human.timeOfLastMessage}
          newMessageQty={human.newMessageQty}
        />
      ))}
    </div>
  )
}

export default DialogsBlock
