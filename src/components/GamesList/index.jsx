import './index.scss'
import { useGames } from '../../hooks/use-games'
import GameCard from '../GameCard'
import Loader from '../Loader'
import Error from '../Error'

const GameList = () => {
  const { isLoading, data, error } = useGames()

  if (error) {
    return <Error />
  }

  return isLoading ? (
    <Loader />
  ) : (
    <div className='list-wrapper'>
      {data.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}

export default GameList
