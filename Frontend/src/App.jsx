import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Learn from './pages/Learn'
import PhishingSimulator from './pages/PhishingSimulator'
import Quiz from './pages/Quiz'
import PasswordChecker from './pages/PasswordChecker'
import EmergencyHelp from './pages/EmergencyHelp'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-cyber-bg">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/phishing-simulator" element={<PhishingSimulator />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/password-checker" element={<PasswordChecker />} />
            <Route path="/emergency-help" element={<EmergencyHelp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
