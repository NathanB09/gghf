import { useGames } from '../../hooks/use-games'

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
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default GameList
