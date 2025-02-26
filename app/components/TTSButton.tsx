"use client"

import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'

interface TTSButtonProps {
  text: string;
  onPositionChange: Dispatch<SetStateAction<number>>;
}

const TTSButton = ({ text, onPositionChange }: TTSButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [speech, setSpeech] = useState<SpeechSynthesisUtterance | null>(null)
  const [currentPosition, setCurrentPosition] = useState(0)

  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.8
    utterance.onend = () => {
      setIsPlaying(false)
      onPositionChange(0)
    }
    utterance.onboundary = (event) => {
      onPositionChange(event.charIndex)
    }
    setSpeech(utterance)

    return () => {
      speechSynthesis.cancel()
    }
  }, [text, onPositionChange])

  const handleClick = () => {
    if (isPlaying) {
      speechSynthesis.cancel()
      setIsPlaying(false)
      onPositionChange(0)
    } else {
      if (speech) {
        speechSynthesis.speak(speech)
        setIsPlaying(true)
      }
    }
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 bg-[#64ffda] text-[#0E1016] rounded-lg px-6 py-3 shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-[#4ad3b3] flex items-center gap-2"
    >
      <span className="font-medium">
        {isPlaying ? 'Stop Reading' : 'Listen Article'}
      </span>
      <div className="relative w-4 h-4">
        {isPlaying ? (
          <div className="flex gap-0.5 items-center justify-center h-full">
            <div className="w-1 h-4 bg-[#0E1016] animate-[shrink_1s_ease-in-out_infinite]"></div>
            <div className="w-1 h-4 bg-[#0E1016] animate-[shrink_1s_ease-in-out_infinite] delay-300"></div>
          </div>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
            <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
          </svg>
        )}
      </div>
    </button>
  )
}

export default TTSButton