'use client'

import { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react'
import emailjs from '@emailjs/browser';



const useWordGenerator = (text: string, delay: number) => {
  const [displayedText, setDisplayedText] = useState(''); // Holds the currently displayed text
  const words = text.split(" "); // Splitting the text into individual words

  useEffect(() => {
    emailjs.init("bhY0J6jLEjXIsab4E");
    let timeoutId: NodeJS.Timeout; // Variable to hold the timeout ID
    let currentIndex = 0;

    const generateWord = () => {
      if (currentIndex < words.length) {
        setDisplayedText(prev => `${prev} ${words[currentIndex]}`.trim()); //Append word and trim spaces
        currentIndex++;
        timeoutId = setTimeout(generateWord, delay); // Store the timeout ID
      }
    };

    generateWord(); // Start word generation

    return () => clearTimeout(timeoutId); // Clean up the timeout on component unmount
  }, [text, delay]); // Dependencies: run effect when `text` or `delay` changes

  return displayedText;
};



export default function AboutMe() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showText, setShowText] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true) // State to track play/pause status
  const aboutMeText = "Hi, I am Ujjwal Jha. I'm a passionate web developer with expertise in Spring Boot and ReactJS. I love creating beautiful and functional websites that make a difference.   "
  const generatedText = useWordGenerator(aboutMeText, 500) // .5s delay between words

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const result = await emailjs.send(         // emails will be send to fretime account.
        'service_mk1stmp', // Replace with your EmailJS service ID
        'template_dpndbom', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'bhY0J6jLEjXIsab4E' // Replace with your EmailJS user ID
      )
      console.log(result.text)
      alert("Message sent successfully!")
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Failed to send email:', error)
      alert("Failed to send message. Please try again.")
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowText(true)
    }, 10000)

    return () => clearTimeout(timeoutId)
  }, [])

  // Automatically play the video when the component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Error attempting to play:', error);
      });
    }
  }, [])

  // Play or pause the video
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch((error) => {
          console.error('Error attempting to play:', error);
        });
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 p-4">About Me</h1>
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted={false}
          loop
        >
          <source src="Sonic Jude2K - Made with Clipchamp.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {showText && (
          <div className="absolute inset-0 flex items-center justify-end bg-black bg-opacity-30 p-4">
            <div className="text-right">
              <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl animate-fade-in max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] mb-2">
                Pov: It is always the low quality videos.
              </p>
              <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl animate-fade-in max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%]">
                {generatedText}
              </p>
            </div>
          </div>
        )}
        <button
          onClick={togglePlayPause}
          className="absolute top-4 right-4 px-3 py-1 sm:px-4 sm:py-2 bg-white text-black text-sm sm:text-base rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>

      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md bg-white text-black dark:bg-gray-800 dark:text-white text-sm sm:text-base"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md bg-white text-black dark:bg-gray-800 dark:text-white text-sm sm:text-base"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 text-sm sm:text-base">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md bg-white text-black dark:bg-gray-800 dark:text-white text-sm sm:text-base"
              rows={4}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="px-4 py-2 bg-violet-500 text-white rounded-md hover:bg-purple-600 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}