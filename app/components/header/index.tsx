'use client'
import Link from 'next/link'
import { NavItem } from './nav-item';
import { motion } from 'framer-motion'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: "/"
  },
  {
    label: 'Projects',
    href: '/projects'
  }
]

export const Header = () => {
  return (
    <motion.header
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          Logo
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </motion.header>
  );
}