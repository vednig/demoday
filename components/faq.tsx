"use client"

import Link from 'next/link'
import React, { useState } from 'react'


export default function FAQ() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)



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
            <Link href="/" className="hover:underline">about</Link>
            <span className="text-xs">|</span>
            <Link href="/faqs" className="hover:underline">FAQs</Link>
            | <a href="https://ggl.link/demoday" className="hover:underline"> Google Calendar</a> | <a href="https://dub.sh/demoday-yahoo" className="hover:underline"> Yahoo Calendar</a> | <a href="https://dub.sh/demoday-outlook" className="hover:underline"> Outlook</a> | <a href="https://dub.sh/demoday-aol" className="hover:underline">AOL</a>

          </nav>
        </div>
      </div>
<div className="max-w-5xl mx-auto p-4">

              {/* FAQs Section */}
              <div id="faqs" className="mt-8">
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
        <footer>
      <sub className="pl-7 mt-2 text-sm text-[#828282]">
      ©2024 DemoDay
<br/>
       <sup>  DemoDay™ is in no way related to YC or it&apos;s companies</sup>
          </sub>
      </footer>
        </div>

    </div>
  )
}

