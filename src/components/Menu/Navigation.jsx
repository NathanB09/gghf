import { motion } from 'framer-motion'
import { IoGameControllerOutline, IoColorPaletteOutline, IoShuffle } from 'react-icons/io5'
import MenuItem from './MenuItem'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, staggerDirection: -1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: 1 },
  },
}

const Navigation = () => (
  <motion.ul variants={variants}>
    <MenuItem>
      <IoGameControllerOutline />
    </MenuItem>
    <MenuItem>
      <IoShuffle />
    </MenuItem>
    <MenuItem>
      <IoColorPaletteOutline />
    </MenuItem>
  </motion.ul>
)

export default Navigation
