import { useGames } from '../../hooks/use-games'
import GameCard from '../GameCard'

const GameList = () => {
  const { isLoading, data, error } = useGames()

  if (isLoading) {
    return 'Loading...'
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }

  return (
    <div>
      <h3>Games</h3>
      {data.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}

export default GameList
