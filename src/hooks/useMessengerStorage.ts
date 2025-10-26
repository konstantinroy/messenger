'use client'
import { useState, useEffect, useCallback } from 'react'
import { SidebarButtons } from '@/src/info/sidebar-buttons-array'
import { ISidebarButtons } from '@/src/info/sidebar-buttons-array'
import { Humans } from '@/src/info/humans-array'
import { HumansTypes } from '@/src/info/humans-array'

export const useMessengerStorage = () => {
  const [humansArray, setHumansArray] = useState<HumansTypes[]>(Humans)
  const [sidebarButtons, setSidebarButtons] =
    useState<ISidebarButtons[]>(SidebarButtons)

  const [activeButton, setActiveButton] = useState<ISidebarButtons | null>(
    null,
  )
  const [viewedUserId, setViewedUserId] = useState<string | null>(null)
  const [viewedDialogId, setViewedDialogId] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

  // Функция кнопок сайдбара
  const sidebarActionsHandler = useCallback((id: string) => {
    setSidebarButtons((prevState) =>
      prevState.map((button) => {
        return {
          ...button,
          active: button.id === id ? true : false,
        }
      }),
    )
  }, [])

  // Функция открытия страницы пользователя
  const openUserPageHandler = (id: string) => {
    setViewedUserId(id)
    setIsDialogOpen(false)
  }

  // Функция открытия диалога
  const openDialogHandler = (id: string) => {
    setIsDialogOpen(true)
    setViewedUserId(null)
    setViewedDialogId(id)
  }
  
  useEffect(() => {
    const foundButton = sidebarButtons.find((button) => button.active === true)
    setActiveButton(foundButton || null)
  }, [sidebarButtons, isDialogOpen])
  // console.log(viewedId)

  return {
    sidebarButtons,
    setSidebarButtons,
    sidebarActionsHandler,
    activeButton,
    humansArray,
    setHumansArray,
    isDialogOpen,
    setIsDialogOpen,
    viewedUserId,
    setViewedUserId,
    viewedDialogId,
    setViewedDialogId,
    openUserPageHandler,
    openDialogHandler,
  }
}
