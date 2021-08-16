import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const Path = (props) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='#222831'
    strokeLinecap='round'
    {...props}
  />
)

const MenuButton = ({ toggle }) => {
  const themeName = 'green'
  return (
    <button onClick={toggle} className={`menu-button ${themeName}`}>
      <svg width='23' height='23' viewBox='0 0 23 23'>
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 19 2.5' },
          }}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 19 16.346' },
          }}
        />
      </svg>
    </button>
  )
}

MenuButton.propTypes = {
  toggle: PropTypes.func,
}

export default MenuButton
