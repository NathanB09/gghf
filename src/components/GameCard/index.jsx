import './index.scss'
import PropTypes from 'prop-types'
import GenreTag from '../GenreTag'

const GameCard = ({ game }) => {
  return (
    <div className='card'>
      <img src={game.thumbnail} alt='' />
      <div className='card-body'>
        <div className='card-header'>
          <div className='card-title'>
            <h3>{game.title}</h3>
            <p>{game.release_date}</p>
          </div>
          <p className='card-description'>{game.short_description}</p>
        </div>
        <div className='card-footer'>
          <GenreTag genre={game.genre} />
          <p>{game.platform}</p>
        </div>
      </div>
    </div>
  )
}

GameCard.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    short_description: PropTypes.string,
    genre: PropTypes.string,
    platform: PropTypes.string,
    release_date: PropTypes.string,
  }).isRequired,
}

export default GameCard
