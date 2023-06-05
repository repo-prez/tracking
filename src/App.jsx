import { AppProvider } from "./context/AppContext"
import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/home/HomePage"
import ResultadosPage from "./pages/resultados/ResultadosPage"
import Ui from "./pages/resultados/Ui"
import ResultadosPage2 from "./pages/resultados/ResultadosPage2"


function App() {

  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/estudio-opinion" element={<ResultadosPage2 />} />
      </Routes>
    </AppProvider>
  )
}

export default App
