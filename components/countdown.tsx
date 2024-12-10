"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const targetDate = new Date('2024-12-14T12:00:00Z')

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

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

  const faqs = [
    {
      question: "What is demoday.live?",
      answer: "DemoDay is a 4-week log software demonstration event organized for indiehackers and startup teams to gain traction and share their yearly journeys. Each weekend there is a set of launches scheduled and broadcasted live from various parts of the world, upto 20 companies and products per day.\n Investors all over the world cn contact and invest in the showcased companies"
    },
    {
      question: "When is the 'next day'?",
      answer: "The clock above is synchronized for the next DemoDay"
    },
    {
      question: "How do I apply for DemoDay?",
      answer: "To apply for DemoDay, you can fill out the form here https://tally.so/r/mD01VE and our team will contact you with further instructions to join."
    },
    {
      question: "Why did you start DemoDay?",
      answer: "We are a startup itself, working on solving technical implementations, problems and also had applied to various accelerators.\n Since,there are limited risk taking capacities at accelerators, we believe a lot of startups get left out, to share and tap into vast network of investors and growth potential. We wanted to bring the YC Demo Day experience to everyone."
    }
  ]

  return (
    <div className="min-h-screen bg-[#F6F6EF]">
      {/* Header */}
      <div className="bg-[#FF6600] px-2 py-1">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/">
            <span className="font-bold">Countdown Timer</span>
            </Link>
            <span className="text-xs">|</span>
            <a href="#" className="hover:underline">about</a>
            <span className="text-xs">|</span>
            <Link href="/faq" className="hover:underline">FAQs</Link>
            | <a href="https://ggl.link/demoday" className="hover:underline"> Google Calendar</a> | <a href="https://dub.sh/demoday-yahoo" className="hover:underline"> Yahoo Calendar</a> | <a href="https://dub.sh/demoday-outlook" className="hover:underline"> Outlook</a> | <a href="https://dub.sh/demoday-aol" className="hover:underline">AOL</a>

          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto p-4">
        <div className="flex items-baseline gap-2 mb-4">
          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[10px] border-b-[#828282]"></div>
          <h1 className="text-xl font-normal">
            Time remaining until December 14, 2024 12:00 GMT
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
          by <a href="#" className="hover:underline">user</a> | <a href="#" className="hover:underline">0 comments</a> | <a href="https://dub.sh/demoday-entry" className="hover:underline">Get entry pass for event</a>
        </div>

        {/* FAQs Section */}
        <div id="faqs" className="mt-8 hidden">
          <h2 className="text-xl font-normal mb-4">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div 
                className="flex items-baseline gap-2 cursor-pointer" 
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                {/* <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[10px] border-b-[#828282]"></div> */}
                <h3 className="text-base font-normal hover:underline text-gray-800">{faq.question}</h3>
              </div>
              {expandedFaq === index && (
                <p className="pl-7 mt-2 text-sm text-[#828282]">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

