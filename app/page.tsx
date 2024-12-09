import CountdownTimer from "@/components/countdown-timer";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'DemoDay - Pitch Perfect',
  description: 'DemoDay is a global event for startups to showcase their products',
}
 

export default function Home() {
  
  return (
    <CountdownTimer/>
     );
}
