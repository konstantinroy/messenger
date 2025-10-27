import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/dialogs - получить все диалоги
export async function GET() {
  try {
    const dialogs = await prisma.dialog.findMany({
      include: {
        participants: {
          select: {
            id: true,
            email: true,
            name: true,
            avatar: true,
          },
        },
        messages: {
          take: 1,
          orderBy: { createdAt: 'desc' },
          include: {
            author: {
              select: {
                id: true,
                name: true,
                avatar: true,
              },
            },
          },
        },
        _count: {
          select: {
            messages: true,
          },
        },
      },
    })

    return NextResponse.json({ dialogs })
  } catch (error) {
    console.error('Error fetching dialogs:', error)
    return NextResponse.json(
      { error: 'Failed to fetch dialogs' },
      { status: 500 },
    )
  }
}

// POST /api/dialogs - создать новый диалог
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, type, participantIds } = body

    if (!participantIds || !Array.isArray(participantIds) || participantIds.length === 0) {
      return NextResponse.json(
        { error: 'At least one participant is required' },
        { status: 400 },
      )
    }

    const dialog = await prisma.dialog.create({
      data: {
        name,
        type: type || 'PRIVATE',
        participants: {
          connect: participantIds.map((id: string) => ({ id })),
        },
      },
      include: {
        participants: {
          select: {
            id: true,
            email: true,
            name: true,
            avatar: true,
          },
        },
      },
    })

    return NextResponse.json({ dialog }, { status: 201 })
  } catch (error) {
    console.error('Error creating dialog:', error)
    return NextResponse.json(
      { error: 'Failed to create dialog' },
      { status: 500 },
    )
  }
}
