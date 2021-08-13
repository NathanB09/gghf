import './App.scss'
import { QueryClient, QueryClientProvider } from 'react-query'
import GamesList from './components/GamesList'
import Header from './components/Header'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Header />
        <GamesList />
      </div>
    </QueryClientProvider>
  )
}

export default App
