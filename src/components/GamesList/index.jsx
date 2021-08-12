import { useQuery } from 'react-query'

const GameList = ({}) => {
  const { isLoading, data, error } = useQuery('games', () =>
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST,
      },
    }).then((resp) => resp.json())
  )

  if (isLoading) {
    return 'Loading...'
  }

  if (error) {
    return <pre>{JSON.stringify(error, '', 2)}</pre>
  }

  return (
    <div>
      <h3>Games</h3>
      <pre>{JSON.stringify(data, '', 2)}</pre>
    </div>
  )
}

GameList.propTypes = {}

export default GameList
