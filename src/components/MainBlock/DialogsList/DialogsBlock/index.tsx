import Dialog from './Dialog/index'
import { HumansTypes } from '@/src/info/humans-array'
import { useMessenger } from '@/src/providers/useMessenger'

import styles from './styles.module.scss'

const DialogsBlock: React.FC = () => {
  const { humansArray } = useMessenger()
  const data = [...humansArray]

  return (
    <div className={styles.dialogs}>
      {data?.map((human: HumansTypes) => (
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
