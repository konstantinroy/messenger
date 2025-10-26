import uuid from 'react-uuid'
import { FaUsers, FaPhone } from 'react-icons/fa6'
import { BsChatSquareDotsFill } from 'react-icons/bs'
import { IoMdSettings } from 'react-icons/io'

export interface ISidebarButtons {
  id: string;
  title: string;
  icon: React.ComponentType; 
  active: boolean;
}

export const SidebarButtons = [
  {
    id: uuid(),
    title: 'Друзья',
    icon: FaUsers,
    active: false,
  },
  {
    id: uuid(),
    title: 'Звонки',
    icon: FaPhone,
    active: false,
  },
  {
    id: uuid(),
    title: 'Сообщения',
    icon: BsChatSquareDotsFill,
    active: true,
  },
  {
    id: uuid(),
    title: 'Настройки',
    icon: IoMdSettings,
    active: false,
  },
]
