"use client"

import React, { useState, useEffect } from 'react'

const targetDate = new Date('2024-12-14T12:00:00Z')

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date()
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  return (
    <div className="min-h-screen bg-[#F6F6EF]">
      {/* Header */}
      <div className="bg-[#FF6600] px-2 py-1">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm">
            <span className="font-bold">Countdown Timer</span>
            <span className="text-xs">|</span>
            <a href="#" className="hover:underline">about</a>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto p-4">
        <div className="flex items-baseline gap-2 mb-4">
          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[10px] border-b-[#828282]"></div>
          <h1 className="text-xl font-normal">
            Time remaining until DemoDay (December 14, 2024 12:00 GMT)
          </h1>
        </div>

        <div className="pl-7 font-mono text-[#828282]">
          <div className="mb-1">
            <span className="tabular-nums text-lg">{formatNumber(timeLeft.days)}</span>
            <span className="ml-1">days</span>
          </div>
          <div className="mb-1">
            <span className="tabular-nums text-lg">{formatNumber(timeLeft.hours)}</span>
            <span className="ml-1">hours</span>
          </div>
          <div className="mb-1">
            <span className="tabular-nums text-lg">{formatNumber(timeLeft.minutes)}</span>
            <span className="ml-1">minutes</span>
          </div>
          <div>
            <span className="tabular-nums text-lg">{formatNumber(timeLeft.seconds)}</span>
            <span className="ml-1">seconds</span>
          </div>
        </div>

        <div className="mt-2 pl-7 text-xs text-[#828282]">
          by <a href="#" className="hover:underline">demoday.live</a> | <a href="#" className="hover:underline">0 comments</a>
        </div>
      </div>
    </div>
  )
}

