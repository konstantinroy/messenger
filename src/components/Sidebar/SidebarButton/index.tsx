import { ISidebarButtons } from '../../../info/sidebar-buttons-array'
import { useMessenger } from 'src/providers/useMessenger'
import styles from './styles.module.scss'

const SidebarButton: React.FC<ISidebarButtons> = ({
  id,
  title,
  icon: IconComponent,
  active,
}) => {
  const { sidebarActionsHandler } = useMessenger()
  const sidebarActiveButton = active && styles.sidebarButtonActive

  return (
    <div
      className={`${styles.sidebarButton}
      ${sidebarActiveButton}
      `}
      title={title}
      onClick={() => sidebarActionsHandler(id)}
    >
      <IconComponent />
    </div>
  )
}

export default SidebarButton
