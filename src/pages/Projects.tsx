// 'use client'

// import {  motion, useAnimation } from 'framer-motion'
// import { useEffect } from 'react'
// import { Link } from 'react-router-dom'

// interface Project {
//   id: number
//   title: string
//   description: string
//   link: string
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     title: 'EMPLOYEE MANAGEMENT SYSTEM',
//     description: 'This is a basic CRUD application project with languages used Spring Boot for Backend and Reactjs for Frontend.',
//     link: 'https://ems-frontend-henna.vercel.app/employees',
//   },
//   {
//     id: 2,
//     title: 'Ecommerce Website',
//     description: 'A Manually Maintained prototype of an Ecommerce Website. Built with SpringBoot and ReactJs.',
//     link: 'https://ecom-frontend-git-main-ujjwaljha03s-projects.vercel.app/',
//   },
//   {
//     id: 3,
//     title: 'Movie Reviews',
//     description: 'Project 3 Home page is not showing.',
//     link: 'https://movies-reviews-omega.vercel.app/watchlist',
//   },
// ]

// export default function Component() {
//   const controls = useAnimation()

//   useEffect(() => {
//     // Initial animation to fade in and slide down
//     controls.start({
//       opacity: 1,
//       y: 0,
//       transition: { duration: 1 }
//     }).then(() => {
//       // Start the floating effect after the initial animation completes
//       controls.start({
//         y: [0, -10, 0],
//         transition: {
//           duration: 2,
//           repeat: Infinity,
//           repeatType: 'mirror',
//         },
//       })
//     })
//   }, [controls])

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-8">My Projects</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.id}
//             initial={{ opacity: 0, y: -50 }}
//             transition={{
//               delay: 1*index
//             }}
//             animate={controls}  // Control both entry and floating animations with controls
//             className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden transition-shadow duration-300 ease-in-out 
//                        hover:shadow-xl dark:hover:shadow-gray-700 transform hover:-translate-y-1"
//           >
//             <div className="p-6">
//               <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
//               <Link
//                 to={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block px-4 py-2 bg-violet-500 text-white rounded-md hover:bg-purple-600 transition-colors duration-300"
//               >
//                 Learn More
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }
                    // with this cards will float

                    // with below cards content will float due to nested motion.div tag


'use client'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface Project {
  id: number
  title: string
  description: string
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'EMPLOYEE MANAGEMENT SYSTEM',
    description: 'This is a basic CRUD application project with languages used Spring Boot for Backend and Reactjs for Frontend.',
    link: 'https://ems-frontend-henna.vercel.app/employees',
  },
  {
    id: 2,
    title: 'Ecommerce Website',
    description: 'A Manually Maintained prototype of an Ecommerce Website. Build with SpringBoot and ReactJs.',
    link: 'https://ecom-frontend-git-main-ujjwaljha03s-projects.vercel.app/',
  },
  {
    id: 3,
    title: 'Movie Reviews',
    description: 'Project 3 Home page is not showing.',
    link: 'https://movies-reviews-omega.vercel.app/watchlist',
  },
]

export default function Component() {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl dark:hover:shadow-gray-700 transition-shadow duration-300 ease-in-out"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 1.4,
                delay: index * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="p-4 sm:p-6"
            >
              <h2 className="text-lg font-bold sm:text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm sm:text-base text-black-900 dark:text-gray-300 mb-4">{project.description}</p>
              <Link
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base bg-violet-500 text-white rounded-md hover:bg-purple-600 transition-colors duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
