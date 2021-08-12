import { useQuery } from 'react-query'

export const useGames = () => {
  const query = useQuery('games', () =>
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST,
      },
    }).then((resp) => resp.json())
  )

  return query
}
