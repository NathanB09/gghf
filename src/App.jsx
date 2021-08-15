import './App.scss'
import { QueryClient, QueryClientProvider } from 'react-query'
import GamesList from './components/GamesList'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Header />
        <GamesList />
        <Menu />
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default App
