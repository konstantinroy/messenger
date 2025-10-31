import { MantineProvider } from '@mantine/core'
import { ActionIcon, CopyButton, Tooltip } from '@mantine/core'
import { FaCheck, FaCopy } from 'react-icons/fa'

interface Props {
  id: string
  userLogin?: string
  userNumber?: string
}

const CopyBtn: React.FC<Props> = ({ id, userLogin, userNumber }) => {
  // Функция копирования текста в буфер обмена
  const copiedText = id === 'login' ? userLogin || '' : userNumber || ''

  return (
    <>
      <MantineProvider>
        <CopyButton value={copiedText} timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip
              label={copied ? 'Copied' : 'Copy'}
              withArrow
              position="right"
            >
              <ActionIcon
                color={copied ? 'teal' : 'gray'}
                variant="subtle"
                onClick={copy}
              >
                {copied ? <FaCheck size={16} /> : <FaCopy size={16} />}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </MantineProvider>
    </>
  )
}

export default CopyBtn
