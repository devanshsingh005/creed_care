import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from './constants/routepath'

import PrivacyPolicy from './pages/legal/PrivacyPolicy/PrivacyPolicy'
import CookiePolicy from './pages/legal/cookie_policy/CookiePolicy'
import TermsAndConditions from './pages/legal/TermsAndConditions/TermsAndConditions'
import { MainLayout } from './layout/Mainlayout'
import HomePage from './pages/HomePage'
import NutritionPage from './pages/NutritionPage'
  import Nutrition from './features/nutrition/Nutrition'

function App() {
  return (
    <Router>
      <Routes>
        <Route  element={<MainLayout />} > 
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
        <Route path={ROUTES.TERMS_AND_CONDITIONS} element={<TermsAndConditions />} />
        <Route path={ROUTES.COOKIE_POLICY} element={<CookiePolicy />} />
        <Route path={ROUTES.NUTRITION} element={<NutritionPage />} />
        <Route path={"*"} element={<Navigate to="/" />} />
        {/* Add other routes here as needed */}
        </Route>
    </Routes>
    </Router>
  )
}

export default App