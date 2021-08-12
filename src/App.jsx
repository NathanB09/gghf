import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import GamesList from './components/GamesList'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <GamesList />
      </div>
    </QueryClientProvider>
  )
}

export default App
