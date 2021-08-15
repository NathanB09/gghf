import './index.scss'
import { motion } from 'framer-motion'

const loaderVariants = {
  animationOne: {
    x: [-40, 40],
    y: [0, -40],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 0.5,
      },
      y: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },
}

const Loader = () => {
  return (
    <motion.div className='loader' variants={loaderVariants} animate='animationOne'></motion.div>
  )
}

export default Loader