"use client"
import Link from 'next/link';

import { logo } from "../app/assets/images/index";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname()
  return (
    <header className='header'>
      <Link href='/' className="px-2 h-10 rounded-lg bg-white 
      items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">MJ</p>
      </Link>
      <nav className='flex text-lg gap-7 font-medium'>
        <Link href='/about' className={ "/about" === pathname ? "text-blue-600" : "text-black" }>
          About
        </Link>
        <Link href='/projects' className={"/projects" === pathname ? "text-blue-600" : "text-black" }>
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
