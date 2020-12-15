import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="flex justify-center md:justify-between items-center py-2 md:py-4">
      <Image src="/img/one-piece-logo-png-image.png" width={150} height={33} />

      <nav className="hidden md:block space-x-8 ">
        <Link href="/onePiece">
          <a className="tracking-wide hover:text-gray-300">OnePiece</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
