import './index.scss'
import PropTypes from 'prop-types'

const GenreTag = ({ genre }) => {
  const themeColor = 'green'
  return (
    <div className={`genre-tag ${themeColor}`}>
      <p>{genre}</p>
    </div>
  )
}

GenreTag.propTypes = {
  genre: PropTypes.string,
}

export default GenreTag
