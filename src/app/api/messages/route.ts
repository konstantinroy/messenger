import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/messages - получить сообщения с фильтрацией
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const dialogId = searchParams.get('dialogId')
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

    if (!dialogId) {
      return NextResponse.json(
        { error: 'Dialog ID is required' },
        { status: 400 },
      )
    }

    const messages = await prisma.message.findMany({
      where: { dialogId },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip: offset,
    })

    const totalCount = await prisma.message.count({
      where: { dialogId },
    })

    return NextResponse.json({
      messages,
      pagination: {
        total: totalCount,
        limit,
        offset,
        hasMore: offset + limit < totalCount,
      },
    })
  } catch (error) {
    console.error('Error fetching messages:', error)
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 },
    )
  }
}

// POST /api/messages - создать новое сообщение
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { content, authorId, dialogId } = body

    if (!content || !authorId || !dialogId) {
      return NextResponse.json(
        { error: 'Content, authorId, and dialogId are required' },
        { status: 400 },
      )
    }

    const message = await prisma.message.create({
      data: {
        content,
        authorId,
        dialogId,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
    })

    return NextResponse.json({ message }, { status: 201 })
  } catch (error) {
    console.error('Error creating message:', error)
    return NextResponse.json(
      { error: 'Failed to create message' },
      { status: 500 },
    )
  }
}
