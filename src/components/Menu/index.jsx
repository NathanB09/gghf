import { useState } from 'react'
import { motion } from 'framer-motion'
import MenuButton from './MenuButton'
import Navigation from './Navigation'

const menuVariants = {
  open: {
    width: '50px',
    height: '195px',
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 12,
    },
  },
  closed: {
    width: '50px',
    height: '50px',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      delay: 0.4,
    },
  },
}

const Menu = () => {
  const [isOpen, toggleOpen] = useState(false)

  const handleToggle = () => toggleOpen((prevSate) => !prevSate)

  return (
    <motion.nav animate={isOpen ? 'open' : 'closed'}>
      <motion.div className='menu-background' variants={menuVariants} />
      <Navigation />
      <MenuButton toggle={handleToggle} />
    </motion.nav>
  )
}

export default Menu
