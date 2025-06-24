import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from './constants/routepath'
import Home from './features/home/Home'
import PrivacyPolicy from './pages/login/PrivacyPolicy'
import TermsAndConditions from './pages/login/TermsAndConditions'
import CookiePolicy from './pages/login/CP'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
        <Route path={ROUTES.TERMS_AND_CONDITIONS} element={<TermsAndConditions />} />
        <Route path={ROUTES.COOKIE_POLICY} element={<CookiePolicy />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App