import { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import Color from './Color'

const themes = [
  { name: 'yellow', color: '#ffd369' },
  { name: 'green', color: '#b0e162' },
  { name: 'blue', color: '#00adb5' },
  { name: 'purple', color: '#b473bb' },
  { name: 'red', color: '#f05454' },
]

const variants = {
  open: {
    transition: { staggerChildren: 0.07, staggerDirection: -1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: 1 },
  },
}

const ColorPalette = () => {
  const [selected, setSelected] = useState(themes[0].name)

  const handleClick = (themeName) => () => {
    setSelected(themeName)
  }

  return (
    <AnimateSharedLayout>
      <motion.ul
        key='color-palette'
        className='color-palette'
        variants={variants}
        exit={variants.closed}
      >
        {themes.map((theme) => (
          <Color
            key={theme.color}
            theme={theme}
            isSelected={selected === theme.name}
            onClick={handleClick(theme.name)}
          />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  )
}

export default ColorPalette
