

import { MoviesList } from './Componets/MoviesList/MoviesList'

import { MovieContextProvider } from './Context/MovieContext'

import './App.css'

function App() {
  return (
    <MovieContextProvider>
      <MoviesList/>
    </MovieContextProvider>
  )
}

export default App
