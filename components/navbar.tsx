import Link from 'next/link'
import { ModeToggle } from '@/components/mode-toggle'
import { Github } from 'lucide-react'

export function Navbar() {
  return (
    <div className="flex justify-center my-4">
      <nav className="bg-white dark:bg-gray-800 rounded-full shadow-md px-6 py-2 flex items-center space-x-12">
        <Link href="https://www.github.com/themrsami" className="flex items-center space-x-2">
          <Github className="h-6 w-6 text-primary" />
        </Link>
        <div className="text-lg font-semibold text-primary">GitHub Receipt Generator</div>
        <div className="flex items-center space-x-4">
          <ModeToggle />
        </div>
      </nav>
    </div>
  )
}

