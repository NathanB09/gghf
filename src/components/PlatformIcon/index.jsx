import './index.scss'
import { FaWindows, FaRegWindowMaximize, FaLayerGroup } from 'react-icons/fa'
import PropTypes from 'prop-types'

const PlatformIcon = ({ platform }) => {
  const themeColor = 'green'
  const platforms = platform.split(', ')

  const getPlatformIcon = (plat, index) => {
    switch (plat) {
      case 'PC (Windows)':
        return <FaWindows key={index} />
      case 'Web Browser':
        return <FaRegWindowMaximize key={index} />
      default:
        return <FaLayerGroup key={index} />
    }
  }

  return <div className={`platform-icon ${themeColor}`}>{platforms.map(getPlatformIcon)}</div>
}

PlatformIcon.propTypes = {
  platform: PropTypes.string,
}

export default PlatformIcon
