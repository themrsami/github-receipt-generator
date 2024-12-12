import { Navbar } from '@/components/navbar'
import { ReceiptGenerator } from '@/components/receipt-generator'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ReceiptGenerator />
      </main>
      <Footer />
    </div>
  )
}

