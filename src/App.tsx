import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [text] = useState('Augment Human Intelligence')
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  return (
    <div 
      className="w-screen h-screen bg-gray-100 flex justify-center items-center m-0 p-0 relative overflow-hidden" 
      ref={containerRef}
    >
      {/* Top Bar */}
      <div className="absolute top-[5%] left-0 w-full h-[2px] bg-black z-20"></div>
      
      {/* Bottom Bar */}
      <div className="absolute bottom-[5%] left-0 w-full h-[2px] bg-black z-20"></div>
      
      <div 
        className="text-outline relative z-10 w-[90vw] text-transparent text-[min(15vw,12vh)] font-sans font-black tracking-[0.1em] cursor-pointer text-center md:text-[min(12vw,8vh)] md:tracking-[0.05em] sm:text-[min(10vw,6vh)] sm:tracking-[0.03em]"
        ref={textRef} 
        data-text={text}
      >
        {text}
      </div>
    </div>
  )
}

export default App