import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/health - проверка состояния API и базы данных
export async function GET() {
  try {
    // Проверяем подключение к базе данных
    await prisma.$queryRaw`SELECT 1`

    // Получаем статистику
    const [userCount, dialogCount, messageCount] = await Promise.all([
      prisma.user.count(),
      prisma.dialog.count(),
      prisma.message.count(),
    ])

    return NextResponse.json({
      status: 'healthy',
      database: 'connected',
      timestamp: new Date().toISOString(),
      stats: {
        users: userCount,
        dialogs: dialogCount,
        messages: messageCount,
      },
    })
  } catch (error) {
    console.error('Health check failed:', error)
    return NextResponse.json(
      {
        status: 'unhealthy',
        database: 'disconnected',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
