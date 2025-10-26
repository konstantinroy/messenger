import { StaticImageData } from 'next/image'
import uuid from 'react-uuid'

import BaranovAvatar from '@/public/avatars/Baranov.jpg'
import AngelinaAvatar from '@/public/avatars/Angelina.jpg'
import FedorovAvatar from '@/public/avatars/Fedorov.jpg'

export interface HumansTypes {
  id: string;
  avatar: string | StaticImageData;
  name: string;
  secondName: string;
  login: string;
  number: string;
  status: string;
  isOnline: boolean;
  timeOfLastMessage: string;
  newMessageQty: number;
  calls: {
    call: boolean;
    timeOfLastCall: string;
    callDuration: string;
  };
  missedCalls: {
      status: boolean;
      qty: number;
      timeOfLastCall: string;
    };
}

export const Humans: HumansTypes[] = [
  {
    id: uuid(),
    avatar: AngelinaAvatar,
    name: 'Angelina',
    secondName: 'Korneluk',
    login: 'angelinakorneluk',
    number: '8-999-777-77-77',
    status: 'Home...',
    isOnline: true,
    timeOfLastMessage: '16:28',
    newMessageQty: 6,
    calls: {
      call: true,
      timeOfLastCall: '12:54',
      callDuration: '00:00:37',
    },
    missedCalls: {
      status: true,
      qty: 4,
      timeOfLastCall: '12:48',
    },
  },
  {
    id: uuid(),
    avatar: BaranovAvatar,
    name: 'Oleg',
    secondName: 'Baranov',
    login: 'olegbaranov7',
    number: '8-999-777-77-77',
    status: 'War',
    isOnline: false,
    timeOfLastMessage: '13:51',
    newMessageQty: 2,
    calls: {
      call: true,
      timeOfLastCall: '',
      callDuration: '00:04:37',
    },
    missedCalls: {
      status: true,
      qty: 1,
      timeOfLastCall: '18:21',
    },
  },
  {
    id: uuid(),
    avatar: FedorovAvatar,
    name: 'Aleksandr',
    secondName: 'Fedorov',
    login: 'afedorov',
    number: '8-999-777-77-77',
    status: 'On chile',
    isOnline: true,
    timeOfLastMessage: '10:14',
    newMessageQty: 0,
    calls: {
      call: true,
      timeOfLastCall: '5.10.25',
      callDuration: '01:54:37',
    },
    missedCalls: {
      status: false,
      qty: 0,
      timeOfLastCall: '',
    },
  },
]
