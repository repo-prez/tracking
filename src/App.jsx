import { AppProvider } from "./context/AppContext"
import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/home/HomePage"
import ResultadosPage from "./pages/resultados/ResultadosPage"
import Ui from "./pages/resultados/Ui"


function App() {

  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/estudio-opinion" element={<ResultadosPage />} />
      </Routes>
    </AppProvider>
  )
}

export default App
