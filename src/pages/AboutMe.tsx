'use client'

import { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react'
import emailjs from '@emailjs/browser';

// --- Revised useWordGenerator Hook ---
const useWordGenerator = (text: string, initialDelay: number, wordDelay: number) => {
  const [displayedText, setDisplayedText] = useState('');

  const words = text.trim().split(/\s+/);

  useEffect(() => {

    let wordTimeoutId: NodeJS.Timeout | null = null;
    let initialTimeoutId: NodeJS.Timeout | null = null;
    let currentIndex = 0;

    const generateWord = () => {

      if (currentIndex < words.length) {
        const currentWord = words[currentIndex]; // Get the word


        setDisplayedText(prev => {
          const newState = `${prev} ${currentWord}`.trim();
          return newState;
        });

        currentIndex++;

        if (currentIndex < words.length) {
          wordTimeoutId = setTimeout(generateWord, wordDelay);
        } else {
        }
      } else {
      }
    };

    initialTimeoutId = setTimeout(() => {
      if (words.length > 0 && words[0] !== "") {
        generateWord();
      }
    }, initialDelay);

    return () => {
      if (initialTimeoutId) clearTimeout(initialTimeoutId);
      if (wordTimeoutId) clearTimeout(wordTimeoutId);
    };
  }, [text, initialDelay, wordDelay]);

  return displayedText;
};
// --- End of Revised Hook ---

export default function AboutMe() {
  const videoRef = useRef<HTMLVideoElement>(null)
  // Removed showText state as the hook now handles initial delay
  // const [showText, setShowText] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true) // State to track play/pause status

  // --- Initialize EmailJS here (recommended) ---
  useEffect(() => {
    // Initialize EmailJS once when the component mounts
    emailjs.init("bhY0J6jLEjXIsab4E");
  }, []);
  // --- End of EmailJS Init ---

  const pov = "Pov: It is always the low quality videos."

  const aboutMeText = "Hi, I am Ujjwal Jha. I'm a passionate web developer with expertise in Spring Boot and ReactJS. I love creating beautiful and functional websites that make a difference."; // Removed trailing space for cleaner split

  // --- Use the revised hook with desired delays ---
  // 2500ms (2.5s) initial delay, 1000ms (1s) delay between words
  const generatedText = useWordGenerator(aboutMeText, 6000, 650);
  const generatedPov = useWordGenerator(pov, 2000, 500);
  // --- ---

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
      const result = await emailjs.send(
        'service_mk1stmp', // Replace with your EmailJS service ID
        'template_dpndbom', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'bhY0J6jLEjXIsab4E' // YOUR EMAILJS USER_ID
      )
      console.log('SUCCESS!', result.status, result.text);
      alert("Message sent successfully!")
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('FAILED to send email:', error)
      // Check if 'error' has a specific structure you can log
      if (typeof error === 'object' && error !== null && 'text' in error) {
        console.error('EmailJS error text:', (error as { text: string }).text);
      }
      alert("Failed to send message. Please try again.")
    }
  }

  // Removed useEffect for showText

  // Automatically play the video when the component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Autoplay might be blocked by the browser, especially if not muted initially
        console.error('Error attempting to play video automatically:', error);
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
          console.error('Error attempting to play video:', error);
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
          loop
        >
          <source src="Sonic Jude2K - Made with Clipchamp.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        {generatedText && (
          <div className="absolute inset-0 flex items-center justify-start bg-black bg-opacity-30 p-4 pointer-events-none">

            <div className="text-left w-1/2 lg:w-1/3 xl:w-1/4"> {/* Example: 50% width on small screens, 33% on large, 25% on xl */}

              <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl animate-fade-in mb-2">
                {generatedPov}
              </p>
              <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl animate-fade-in">
                {generatedText}
              </p>
            </div>
          </div>
        )}

        <button
          onClick={togglePlayPause}
          className="absolute top-4 right-4 px-3 py-1 sm:px-4 sm:py-2 bg-white text-black text-sm sm:text-base rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white z-10" // Added z-index
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

