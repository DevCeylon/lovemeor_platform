import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/logol.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <p> 2024 Devinda Rukshan. All Rights reverved.</p>
      </div>
    </footer>
  )
}

export default Footer
