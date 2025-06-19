import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ROUTES } from './constants/routepath'
import Home from './features/home/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  )
}

export default App
