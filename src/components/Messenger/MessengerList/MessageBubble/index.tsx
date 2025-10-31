'use client'
import styles from './styles.module.scss'

interface Props {
  type: string
  message: string
  time: string
}

const MessageBubble: React.FC<Props> = ({ type, message, time }) => {
  // Стили для сообщения (если оно больше 50 символов, то время показываем снизу текста)
  const longTextStyle = message.length > 50 ? styles.messageBubbleLong : ''
  // Стили для времени сообщения, если оно больше 50 символов
  const longTextTimeStyle = message.length > 50 ? styles.timestampLongText : ''
  // Стили для позиции сообщений (входящий-исхадящий)
  const bubblePositionStyle = type === 'in' ? styles.inText : styles.sentText
  // Стили для цвета сообщений (входящий-исхадящий)
  const bubbleColorStyle =
    type === 'in' ? styles.messageBubbleIn : styles.messageBubbleSent

  return (
    <div className={`${bubblePositionStyle}`}>
      <div className={`${styles.messageBlock} ${bubblePositionStyle}`}>
        <div
          className={`${styles.messageBubble} ${bubbleColorStyle} ${longTextStyle}`}
        >
          <p>{message}</p>
          <div className={`${styles.timestamp} ${longTextTimeStyle}`}>
            {time}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageBubble
