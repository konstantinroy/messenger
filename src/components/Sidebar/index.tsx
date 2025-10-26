'use client'
import { useContext } from 'react'
import { FaSun } from 'react-icons/fa6'
import { TbMessage2Filled } from 'react-icons/tb'

import { ThemeContext } from 'src/providers/ThemeProvider'
import SidebarButton from './SidebarButton/index'
import { ISidebarButtons } from '../../info/sidebar-buttons-array'
import styles from './styles.module.scss'
import { useMessenger } from '@/src/providers/useMessenger'

const Sidebar = () => {
  const { sidebarButtons } = useMessenger()

  const { theme, setTheme } = useContext(ThemeContext) || {
    theme: 'light',
    setTheme: () => {},
  }
  const toggleTheme = theme === 'light' ? 'dark' : 'light'
  
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarLogo}>
        <TbMessage2Filled />
      </div>

      <div className={styles.sidebarActions}>
        {sidebarButtons.map((button: ISidebarButtons) => {
          return (
            <SidebarButton
              key={button.id as string}
              id={button.id}
              title={button.title}
              icon={button.icon}
              active={button.active}
            />
          )
        })}
      </div>

      <div className={styles.sidebarThemeIcon}>
        <FaSun onClick={() => setTheme(toggleTheme)} size={30} title="Тема" />
      </div>
    </div>
  )
}

export default Sidebar
