"use server"

import {NextResponse} from 'next/server'

export async function POST(request: Request) {
  try {
    const {name, phone, message} = await request.json()

    if (!name || !phone) {
      return NextResponse.json(
        {error: 'Missing required fields'},
        {status: 400}
      )
    }

    const response = await fetch(`${process.env.BACK_URL}/api/partner-requests/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_SECRET_KEY}`
      },
      body: JSON.stringify({data: {name, phone, message}})
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Ошибка от бэкенда:', errorText)
      throw new Error('Backend request failed')
    }

    const data = await response.json()
    return NextResponse.json(data, {status: 200})

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      {error: 'Internal server error'},
      {status: 500}
    )
  }
}