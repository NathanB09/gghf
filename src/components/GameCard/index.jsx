import './index.scss'
import PropTypes from 'prop-types'

const GameCard = ({ game }) => {
  return (
    <div className='card'>
      <img src={game.thumbnail} alt='' />
      {/* <div className='card-header'>
        <h3>{game.title}</h3>
        <p>{game.release_date}</p>
      </div>
      <div className='card-body'>
        <p>{game.short_description}</p>
      </div>
      <div className='card-footer'>
        <p>{game.genre}</p>
        <p>{game.platform}</p>
      </div> */}

      <div className='card-body'>
        <div className='card-header'>
          <div className='card-title'>
            <h3>{game.title}</h3>
            <p>{game.release_date}</p>
          </div>
          <p>{game.short_description}</p>
        </div>
        <div className='card-footer'>
          <p>{game.genre}</p>
          <p>{game.platform}</p>
        </div>
      </div>
    </div>
  )
}

GameCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    short_description: PropTypes.string,
    game_url: PropTypes.string,
    genre: PropTypes.string,
    platform: PropTypes.string,
    publisher: PropTypes.string,
    developer: PropTypes.string,
    release_date: PropTypes.string,
    freetogame_profile_url: PropTypes.string,
  }).isRequired,
}

export default GameCard
