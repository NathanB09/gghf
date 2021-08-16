import { motion } from 'framer-motion'
import { IoGameControllerOutline, IoShuffle } from 'react-icons/io5'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'
import ColorPicker from '../ColorPicker'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, staggerDirection: -1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: 1 },
  },
}

const Navigation = ({ menuIsOpen }) => (
  <motion.ul className='menu-ul' variants={variants}>
    <MenuItem>
      <IoGameControllerOutline />
    </MenuItem>
    <MenuItem>
      <IoShuffle />
    </MenuItem>
    <ColorPicker menuIsOpen={menuIsOpen} />
  </motion.ul>
)

Navigation.propTypes = {
  menuIsOpen: PropTypes.bool,
}

export default Navigation
