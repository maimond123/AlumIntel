import Image from "'next/image'"
import Link from "'next/link'"

export default function Footer() {
  return (
    <footer className="bg-emerald-green text-forest-green py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image src="/icons8-atom-24.png" alt="AlumIntel Logo" width={32} height={32} className="mr-2" />
            <span className="text-xl font-bold">AlumIntel</span>
          </div>
          <div className="flex space-x-4">
            <Link href="/privacy-policy" className="hover:text-golden-yellow transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-golden-yellow transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
