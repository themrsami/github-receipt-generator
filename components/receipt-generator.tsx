'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Loader2, Search } from 'lucide-react'
import { Receipt } from '@/components/receipt'

export function ReceiptGenerator() {
  const [username, setUsername] = useState('')
  const [userData, setUserData] = useState(null)
  const [topRepos, setTopRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchUserData = async () => {
    setLoading(true)
    setError('')
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`)
      if (!userResponse.ok) {
        throw new Error('User not found')
      }
      const userData = await userResponse.json()
      setUserData(userData)

      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=5`)
      const reposData = await reposResponse.json()
      setTopRepos(reposData)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="p-8 shadow-lg bg-white dark:bg-gray-800 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary">GitHub Receipt Generator</h2>
      <div className="flex flex-col gap-4 mb-6">
        <div className="relative">
          <Input
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="pl-10 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <Button onClick={fetchUserData} disabled={loading || !username} className="w-full">
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Generate Receipt'}
        </Button>
      </div>
      {error && <p className="text-red-500 mb-4 text-center text-sm">{error}</p>}
      {userData && <Receipt userData={userData} topRepos={topRepos} />}
    </Card>
  )
}

