import './index.scss'
import PropTypes from 'prop-types'

const GenreTag = ({ genre }) => {
  const themeName = 'green'
  return (
    <div className={`genre-tag ${themeName}`}>
      <p>{genre}</p>
    </div>
  )
}

GenreTag.propTypes = {
  genre: PropTypes.string,
}

export default GenreTag
