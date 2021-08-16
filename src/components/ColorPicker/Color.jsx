import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
}

const varients = {
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

const Color = ({ theme, isSelected, onClick }) => {
  return (
    <motion.li className={`color ${theme.name}`} onClick={onClick} variants={varients}>
      {isSelected && (
        <motion.div
          layoutId='outline'
          className='outline'
          initial={false}
          animate={{ borderColor: theme.color }}
          transition={spring}
        />
      )}
    </motion.li>
  )
}

Color.propTypes = {
  theme: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  }),
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Color
