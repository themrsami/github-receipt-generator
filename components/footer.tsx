import { Github, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <div className="flex justify-center my-4">
      <footer className="bg-white dark:bg-gray-800 rounded-full shadow-md px-6 py-2 flex items-center space-x-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Made by Usama
        </p>
        <div className="flex space-x-2">
          <a href="https://github.com/themrsami" target="_blank"  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://twitter.com/themrsami" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com/in/usama-nazir" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </footer>
    </div>
  )
}

