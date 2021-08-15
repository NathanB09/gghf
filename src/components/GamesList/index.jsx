import './index.scss'
import { useGames } from '../../hooks/use-games'
import GameCard from '../GameCard'
import Loader from '../Loader'

const GameList = () => {
  const { isLoading, data, error } = useGames()

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
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
