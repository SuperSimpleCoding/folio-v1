"use client"

import { blogDetails } from "../../blog-section/blogDetails"
import { useParams } from "next/navigation"
import Image from "next/image"
import { notFound } from "next/navigation"
import { useEffect, useState } from "react"
import TTSButton from '../../components/TTSButton'

export default function BlogPost() {
  const [currentPosition, setCurrentPosition] = useState(0)
  
  const { id } = useParams()
  const blog = blogDetails.find((blog) => blog.id === id)
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const handleClose = () => {
    if (window.opener) {
      // If it's a popup window
      window.close()
    } else {
      // If opened directly, try to close
      window.close()
      // Fallback to history back if close fails
      if (!window.closed) {
        window.history.back()
      }
    }
  }
  
  if (!blog) {
    notFound()
  }
  
  const renderContent = (content: string) => {
    if (currentPosition === 0) return content
  
    return (
      <>
        <span className="bg-[#64ffda]/20">{content.slice(0, currentPosition)}</span>
        {content.slice(currentPosition)}
      </>
    )
  }
  
  return (
    <article className="min-h-screen bg-[#0E1016] text-[#e4ded7] py-20 px-4 md:px-8 lg:px-16">
      <div className="fixed top-8 left-8 z-50">
        <button
          onClick={handleClose}
          className="flex items-center gap-2 text-[#e4ded7] hover:text-white transition-colors"
        >
          <span className="text-sm font-medium transform transition-all duration-300 hover:translate-x-[-8px] hover:text-[#64ffda] inline-block animate-sparkle relative">
            <span className="absolute inset-0 animate-sparkle-particle" />
            Back To Portofolio
          </span>
        </button>
      </div>
      <div className="max-w-3xl mx-auto">
        <Image
          src={blog.image || "/placeholder.svg"}
          alt={blog.title}
          width={1600}
          height={840}
          className="rounded-xl w-full h-[400px] object-cover mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
        <p className="text-[#95979D] mb-8">{blog.date}</p>
        <div className="prose prose-invert max-w-none mb-8">
          <div className="text-lg leading-relaxed space-y-6">
            {blog.content.split("\n").map((paragraph, index) => (
              <p key={index} className="text-[#e4ded7]">
                {renderContent(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </div>
      <TTSButton 
        text={blog.content} 
        onPositionChange={setCurrentPosition} 
      />
    </article>
  )
}

// Remove generateStaticParams from this file

