import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail, MessageSquare, CheckCircle, XCircle, ChevronRight,
  Trophy, RotateCcw, AlertTriangle, Info, Fish
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Badge from '../components/Badge'
import { phishingScenarios } from '../data/phishingData'

function EmailDisplay({ scenario }) {
  return (
    <div className="bg-cyber-bg border border-cyber-border rounded-xl overflow-hidden">
      {/* Email Header */}
      <div className="bg-cyber-surface border-b border-cyber-border p-4 space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-cyber-accent/20 flex items-center justify-center flex-shrink-0">
            <Mail className="w-4 h-4 text-cyber-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-white text-sm font-medium">From:</span>
              <span className="text-cyber-yellow text-sm terminal-text break-all">{scenario.from}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyber-muted text-xs">Time:</span>
              <span className="text-cyber-muted text-xs">{scenario.time}</span>
            </div>
          </div>
        </div>
        <div className="pl-12">
          <div className="flex items-center gap-2">
            <span className="text-white text-sm font-medium">Subject:</span>
            <span className="text-white text-sm font-semibold">{scenario.subject}</span>
          </div>
        </div>
      </div>

      {/* Email Body */}
      <div className="p-5">
        <pre className="text-cyber-muted text-sm leading-relaxed whitespace-pre-wrap font-sans">{scenario.body}</pre>
      </div>
    </div>
  )
}

function SMSDisplay({ scenario }) {
  return (
    <div className="max-w-sm mx-auto">
      <div className="bg-cyber-surface border border-cyber-border rounded-2xl overflow-hidden">
        <div className="bg-cyber-card border-b border-cyber-border p-3 flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-cyber-accent" />
          <span className="text-white text-sm font-medium">SMS Message</span>
          <span className="ml-auto text-cyber-muted text-xs terminal-text">{scenario.time}</span>
        </div>
        <div className="p-4">
          <div className="text-cyber-muted text-xs mb-2 terminal-text">From: {scenario.from}</div>
          <div className="bg-cyber-accent/10 border border-cyber-accent/20 rounded-xl rounded-tl-sm p-3">
            <p className="text-white text-sm leading-relaxed">{scenario.body}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PhishingSimulator() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [userChoice, setUserChoice] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [showTells, setShowTells] = useState(false)

  const scenario = phishingScenarios[currentIdx]
  const total = phishingScenarios.length
  const isCorrect = userChoice === (scenario.isPhishing ? 'phishing' : 'safe')

  const handleAnswer = (choice) => {
    if (answered) return
    setUserChoice(choice)
    setAnswered(true)
    if (choice === (scenario.isPhishing ? 'phishing' : 'safe')) {
      setScore(s => s + 1)
    }
  }

  const handleNext = () => {
    if (currentIdx + 1 >= total) {
      setDone(true)
    } else {
      setCurrentIdx(i => i + 1)
      setAnswered(false)
      setUserChoice(null)
      setShowTells(false)
    }
  }

  const handleRestart = () => {
    setCurrentIdx(0)
    setAnswered(false)
    setUserChoice(null)
    setScore(0)
    setDone(false)
    setShowTells(false)
  }

  const getScoreFeedback = () => {
    const pct = score / total
    if (pct === 1) return { label: 'Perfect Score!', sub: 'You\'re a phishing detection expert!', color: 'text-cyber-green' }
    if (pct >= 0.75) return { label: 'Excellent!', sub: 'You have a sharp eye for phishing attempts.', color: 'text-cyber-accent' }
    if (pct >= 0.5) return { label: 'Good Effort!', sub: 'You caught most threats. Review the ones you missed.', color: 'text-cyber-yellow' }
    return { label: 'Keep Practicing!', sub: 'Phishing can be tricky. Review the Learn section and try again.', color: 'text-cyber-red' }
  }

  if (done) {
    const fb = getScoreFeedback()
    return (
      <div>
        <PageHeader icon={Fish} badge="Phishing Simulator" title="Simulation Complete!" subtitle="Here's how you performed." />
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="cyber-card mb-8">
            <Trophy className="w-16 h-16 text-cyber-yellow mx-auto mb-4" />
            <div className="text-6xl font-bold text-white terminal-text mb-2">{score}<span className="text-cyber-muted text-3xl">/{total}</span></div>
            <div className={`text-2xl font-semibold mb-2 ${fb.color}`}>{fb.label}</div>
            <p className="text-cyber-muted">{fb.sub}</p>
          </motion.div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="cyber-card text-center">
              <div className="text-2xl font-bold text-cyber-green terminal-text">{score}</div>
              <div className="text-cyber-muted text-xs mt-1">Correct</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-2xl font-bold text-cyber-red terminal-text">{total - score}</div>
              <div className="text-cyber-muted text-xs mt-1">Missed</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-2xl font-bold text-cyber-accent terminal-text">{Math.round(score/total*100)}%</div>
              <div className="text-cyber-muted text-xs mt-1">Accuracy</div>
            </div>
          </div>

          <button onClick={handleRestart} className="cyber-btn-primary flex items-center gap-2 mx-auto">
            <RotateCcw className="w-4 h-4" /> Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <PageHeader
        icon={Fish}
        badge="Phishing Simulator"
        title="Can You Spot the Phish?"
        subtitle="Analyze each message and decide: Is it Safe or Phishing? Study the clues carefully."
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-cyber-muted text-sm terminal-text">Scenario {currentIdx + 1} of {total}</span>
          <div className="flex items-center gap-3">
            <Badge variant="muted">{scenario.type === 'sms' ? 'SMS' : 'Email'}</Badge>
            <Badge variant={scenario.difficulty === 'Easy' ? 'green' : scenario.difficulty === 'Hard' ? 'red' : 'yellow'}>
              {scenario.difficulty}
            </Badge>
            <span className="text-cyber-accent font-semibold terminal-text">{score} pts</span>
          </div>
        </div>
        <div className="h-2 bg-cyber-surface rounded-full mb-8 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyber-accent to-cyber-green rounded-full"
            animate={{ width: `${((currentIdx) / total) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Message Display */}
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          {scenario.type === 'sms'
            ? <SMSDisplay scenario={scenario} />
            : <EmailDisplay scenario={scenario} />
          }
        </motion.div>

        {/* Answer Buttons */}
        {!answered && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswer('safe')}
              className="flex items-center justify-center gap-2 bg-cyber-green/10 border-2 border-cyber-green/40 hover:border-cyber-green hover:bg-cyber-green/20 text-cyber-green font-semibold py-4 rounded-xl transition-all duration-200"
            >
              <CheckCircle className="w-5 h-5" />
              Looks Safe
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswer('phishing')}
              className="flex items-center justify-center gap-2 bg-cyber-red/10 border-2 border-cyber-red/40 hover:border-cyber-red hover:bg-cyber-red/20 text-cyber-red font-semibold py-4 rounded-xl transition-all duration-200"
            >
              <XCircle className="w-5 h-5" />
              This is Phishing!
            </motion.button>
          </div>
        )}

        {/* Feedback */}
        <AnimatePresence>
          {answered && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4 mb-6"
            >
              {/* Result Banner */}
              <div className={`rounded-xl p-5 border-2 flex items-start gap-4 ${
                isCorrect
                  ? 'bg-cyber-green/10 border-cyber-green/50'
                  : 'bg-cyber-red/10 border-cyber-red/50'
              }`}>
                {isCorrect
                  ? <CheckCircle className="w-6 h-6 text-cyber-green flex-shrink-0 mt-0.5" />
                  : <XCircle className="w-6 h-6 text-cyber-red flex-shrink-0 mt-0.5" />
                }
                <div>
                  <div className={`font-bold mb-1 ${isCorrect ? 'text-cyber-green' : 'text-cyber-red'}`}>
                    {isCorrect ? '✓ Correct!' : '✗ Incorrect'} — This was {scenario.isPhishing ? 'a PHISHING attempt' : 'a LEGITIMATE message'}
                  </div>
                  <p className="text-cyber-muted text-sm leading-relaxed">{scenario.explanation}</p>
                </div>
              </div>

              {/* Red Flags / Green Flags */}
              <div className="cyber-card">
                <button
                  onClick={() => setShowTells(!showTells)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-cyber-accent" />
                    <span className="text-white font-medium text-sm">
                      {scenario.isPhishing ? 'Red Flags to Notice' : 'Why This is Legitimate'}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-cyber-muted transition-transform ${showTells ? 'rotate-90' : ''}`} />
                </button>
                <AnimatePresence>
                  {showTells && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-3 space-y-2 overflow-hidden"
                    >
                      {scenario.tells.map((tell, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          {scenario.isPhishing
                            ? <AlertTriangle className="w-3.5 h-3.5 text-cyber-red flex-shrink-0 mt-0.5" />
                            : <CheckCircle className="w-3.5 h-3.5 text-cyber-green flex-shrink-0 mt-0.5" />
                          }
                          <span className="text-cyber-muted">{tell}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={handleNext}
                className="cyber-btn-primary w-full flex items-center justify-center gap-2"
              >
                {currentIdx + 1 >= total ? 'See Final Results' : 'Next Scenario'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
