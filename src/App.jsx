import './App.scss'
import { QueryClient, QueryClientProvider } from 'react-query'
import GamesList from './components/GamesList'
import Header from './components/Header'
import Footer from './components/Footer'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Header />
        <GamesList />
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default App
