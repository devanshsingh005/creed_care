import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from './constants/routepath'

import LegalPage from './pages/LegalPage'
import { MainLayout } from './layout/MainLayout'
import HomePage from './pages/HomePage'
import NutritionPage from './pages/NutritionPage'

import Nutrition from './features/nutrition/Nutrition'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />} >
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.LEGAL}element={<LegalPage/>}/>
          <Route path={ROUTES.NUTRITION} element={<NutritionPage />} />
          <Route path={"*"} element={<Navigate to="/" />} />
          {/* Add other routes here as needed */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App