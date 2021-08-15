import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 500 },
    },
  },
}

const MenuItem = ({ children }) => {
  return (
    <motion.li variants={menuItemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <div className='menu-item'>{children}</div>
    </motion.li>
  )
}

MenuItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.elementType]),
}

export default MenuItem
