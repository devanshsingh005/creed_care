import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from './constants/routepath'
import Home from './features/home/Home'


function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path="/" element={<Navigate to={ROUTES.HOME} replace />} />
        
      </Routes>
    </Router>
  )
}

export default App
