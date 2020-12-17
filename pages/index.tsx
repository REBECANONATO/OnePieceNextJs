import Link from 'next/link'
import { motion, Variants } from 'framer-motion'

interface CardProps {
  href: string
  imgSrc: string
  layoutId: string
}

const Card: React.FC<CardProps> = ({ href, imgSrc, layoutId }) => {
  return (
    <Link href={href}>
      <motion.div
        className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition"
        variants={variants}
      >
        <motion.img
          src={imgSrc}
          className="w-full h-full"
          layoutId={layoutId}
        />
      </motion.div>
    </Link>
  )
}

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.7
    }
  }
}

export default function Home() {
  return (
    <div>
      <motion.h1
        className="text-4xl mt-10 leading-none font-time tracking-tight text-gray-900 sm:text-6xl lg:text-7xl md:mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        "Conhecendo tanto a derrota quanto a vitória, andando por aí derramando lágrimas, é assim que você se torna um verdadeiro homem." (Shanks)
      </motion.h1>

      <motion.div
        className="w-full grid grid-cols-1 grid-rows-1 gap-6 mt-10 md:grid-cols-1 md:grid-rows-1 md:mt-24"
        transition={{
          delay: 2
        }}
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <Card
          href={'/onePiece'}
          imgSrc={'/img/one-piece-logo-18B460B23A-seeklogo.com.png'}
          layoutId={'OnePiece'}
        />
      </motion.div>
    </div>
  )
}
