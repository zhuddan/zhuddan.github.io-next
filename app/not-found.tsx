import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2 className="text-5xl text-primary font-[var(--font-geist-sans)]">Not Found</h2>
      <p className="text-2xl mt-2">Could not find requested resource</p>
      <Link href="/" className="text-primary">Return Home</Link>
      <Image
        className="dark:invert"
        src="/logo.png"
        alt="Next.js logo"
        width={0}
        height={300}
        priority
      />
    </div>
  )
}
