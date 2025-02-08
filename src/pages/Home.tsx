import { ArrowRight, Github, Instagram, Linkedin } from 'lucide-react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8 dark:bg-gray-900 dark:text-white">
      <header>
        <h1 className="text-4xl font-bold mb-4 dark:text-gray-100">Welcome to My Portfolio</h1>
        <p className="text-xl text-muted-foreground">Software Developer</p>
        <p>DAMNNNNNNNNNN!!!</p>
      </header>
      <section className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
        <img
          src='MY pic.jpeg'
          alt="Your Name"
          width={200}
          height={200}
          className="rounded-b-full"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-2 dark:text-gray-100">Hey, I'm Ujjwal Jha</h2>
          <p className="text-muted-foreground dark:text-gray-300 mb-4">
            I specialize in creating responsive and user-friendly web applications
            using modern technologies like React and SpringBoot.
          </p>
          <Link
            to="/about"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base bg-violet-500 text-white rounded-md hover:bg-purple-600 transition-colors duration-300">
            Learn More About Me
            <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="shadow-xl dark:border-gray-700 rounded-lg p-6 text-center dark:bg-gray-800 hover:shadow-xl dark:hover:shadow-gray-700 transition-shadow duration-300 ease-in-out">
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 1.4,
              delay: 0.4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="p-4 sm:p-6"
          >
            <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">My Projects</h3>
            <p className="text-muted-foreground dark:text-gray-300 mb-4">
              Explore my latest web development projects and applications.
            </p>
            <Link
              to="/projects"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base bg-violet-500 text-white rounded-md hover:bg-purple-600 transition-colors duration-300">
              See Projects
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }} className=" shadow-xl dark:border-gray-700 rounded-lg p-6 text-center dark:bg-gray-800 hover:shadow-xl dark:hover:shadow-gray-700 transition-shadow duration-300 ease-in-out">
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 1.4,
              delay: 0.4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="p-4 sm:p-6"
          >
            <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">My Skills</h3>
            <p className="text-muted-foreground dark:text-gray-300 mb-4">
              Discover the technologies and tools I work with.
            </p>
            <Link
              to="/about"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base bg-violet-500 text-white rounded-md hover:bg-purple-600 transition-colors duration-300">
              View Skills
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4 dark:text-gray-100">Let's Connect</h2>
        <p className="text-muted-foreground dark:text-gray-300 mb-4">
          Interested in working together? Feel free to reach out!
        </p>
        <Link
          to="/about"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base bg-violet-500 text-white rounded-md hover:bg-purple-600 transition-colors duration-300">
          Get In Touch
          <ArrowRight className="ml-2" size={16} />
        </Link>

      </section>

      <section className="py-8">
        <h2 className="text-2xl text-center font-semibold mb-4 text-foreground dark:text-gray-100">Get in Touch</h2>
        <div className="flex space-x-4 justify-center">
          <Link to={"https://github.com/ujjwaljha03"} target='_blank'>
            <Button variant="outline-primary" className="p-2 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white">
              <Github size={16} />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link to={"https://www.linkedin.com/in/ujjwal-jha-0a499a26a"} target='_blank'>
          <Button variant="outline-primary" className="p-2 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white">
            <Linkedin size={16} />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </Link>
        <Link to={"https://www.instagram.com/u.jj.wal_/"} target='_blank'>
          <Button variant="outline-primary" className="p-2 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white">
            <Instagram size={16} />
            <span className="sr-only">Instagram</span>
          </Button>
        </Link>
    </div>
      </section >
    </div >
  )
}
