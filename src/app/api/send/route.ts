
export const dynamic = 'force-dynamic'; // ensures it's not an edge function

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { firstName, lastName, email, message } = body
    const fullName = `${firstName} ${lastName}`

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New contact from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 })
  }
}
