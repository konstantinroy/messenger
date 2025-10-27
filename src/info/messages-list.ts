import uuid from 'react-uuid'

export interface IMessagesList {
  id: string;
  type: string;
  message: string;
  time: string;
}

export const MessagesList = [
  {
    id: uuid(),
    type: 'sent',
    message: 'readable content of a page when looking at its layout',
    time: '15:34',
  },
  {
    id: uuid(),
    type: 'in',
    message: 'a page when looking',
    time: '15:34',
  },
  {
    id: uuid(),
    type: 'sent',
    message: 'content of a page when looking at ',
    time: '15:34',
  },
  {
    id: uuid(),
    type: 'in',
    message: 'content of a page when looking at ',
    time: '15:34',
  },
  {
    id: uuid(),
    type: 'in',
    message: 'a page when looking',
    time: '15:34',
  },
  {
    id: uuid(),
    type: 'in',
    message:
      'readable content of a page when looking at its layout readable content of a page when looking at its layout readable content of a page when looking at its layout readable content of a page when looking at its layout',
    time: '15:34',
  },
  {
    id: uuid(),
    type: 'sent',
    message: 'content of a page when looking at ',
    time: '15:34',
  },
  {
    id: uuid(),
    type: 'in',
    message: 'a page when looking',
    time: '15:34',
  },
  {
    id: uuid(),
    type: 'in',
    message:
      'readable content of a page when looking at its layout readable content of a page when looking at its layout readable content of a page when looking at its layout readable content of a page when looking at its layout',
    time: '15:34',
  },
  {
    id: uuid(),
    type: 'sent',
    message: 'a page when looking',
    time: '15:34',
  },
  {
    id: uuid(),
    type: 'in',
    message: 'content of a page when looking at ',
    time: '15:34',
  },
  {
    id: uuid(),
    type: 'sent',
    message:
      'readable content of a page when looking at its layout readable content of a page when looking at its layout readable content of a page when looking at its layout readable content of a page when looking at its layout',
    time: '15:34',
  },
]
