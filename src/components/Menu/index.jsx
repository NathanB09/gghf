import { useState } from 'react'
import { motion } from 'framer-motion'
import MenuButton from './MenuButton'

const Menu = ({}) => {
  const [isOpen, toggleOpen] = useState(false)

  const handleToggle = () => toggleOpen((prevSate) => !prevSate)

  return (
    <motion.nav
      // initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <MenuButton toggle={handleToggle} />
    </motion.nav>
  )
}

Menu.propTypes = {}

export default Menu
