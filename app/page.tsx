import CountdownTimer from "@/components/countdown";
import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"
 
export const metadata: Metadata = {
  title: 'DemoDay - Pitch Perfect',
  description: 'DemoDay is a global event for startups to showcase their products',
}
 

export default function Home() {
  
  return (
    <>
        <CountdownTimer/>
        <Analytics />
      </>
     );
}
