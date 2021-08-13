import './index.scss'
import PropTypes from 'prop-types'

const GenreTag = ({ genre }) => {
  return (
    <div className='genre-tag'>
      <p>{genre}</p>
    </div>
  )
}

GenreTag.propTypes = {
  genre: PropTypes.string,
}

export default GenreTag
