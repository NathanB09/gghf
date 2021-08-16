import './index.scss'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { IoColorPaletteOutline } from 'react-icons/io5'
import PropTypes from 'prop-types'
import ColorPalette from './ColorPalette'
import MenuItem from '../Menu/MenuItem'

const colorPickerVariants = {
  open: {
    width: '228px',
    height: '40px',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 12,
    },
  },
  closed: {
    width: '40px',
    height: '40px',
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      delay: 0.4,
    },
  },
}

const ColorPicker = ({ menuIsOpen }) => {
  const [isOpen, toggleOpen] = useState(false)

  useEffect(() => {
    if (!menuIsOpen) {
      toggleOpen(false)
    }
  }, [menuIsOpen])

  const handleToggle = () => toggleOpen((prevSate) => !prevSate)

  return (
    <>
      <MenuItem onClick={handleToggle}>
        <IoColorPaletteOutline />
      </MenuItem>
      <motion.nav
        key='color-picker'
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        exit={colorPickerVariants.closed}
      >
        <motion.div className='color-picker' variants={colorPickerVariants} />
        <ColorPalette menuIsOpen={menuIsOpen} />
      </motion.nav>
    </>
  )
}

ColorPicker.propTypes = {
  menuIsOpen: PropTypes.bool,
}

export default ColorPicker
