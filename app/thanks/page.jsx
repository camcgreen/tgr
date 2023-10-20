'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Thanks() {
  const router = useRouter()
  return (
    <div className='thanks'>
      <img src='/images/landing-bg.jpg' />
      <div className='thanks__message'>
        <h3>Thanks!</h3>
        <p>Your message was sent successfully.</p>
        <button onClick={() => router.push('/')}>Back to site</button>
      </div>
    </div>
  )
}
