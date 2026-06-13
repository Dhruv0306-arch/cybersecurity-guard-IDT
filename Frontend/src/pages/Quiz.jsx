import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, ChevronRight, Trophy, RotateCcw, Target, Brain } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Badge from '../components/Badge'
import { quizQuestions } from '../data/quizData'

const categoryColors = {
  'Phishing': 'red',
  'Password Security': 'yellow',
  'Safe Browsing': 'default',
  'Public Wi-Fi': 'green',
  'Social Engineering': 'purple',
  'General': 'muted',
}

export default function Quiz() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [confirmed, setConfirmed] = useState(false)
  const [score, setScore] = useState(0)
  const [results, setResults] = useState([]) // {questionId, correct, selected}
  const [done, setDone] = useState(false)

  const question = quizQuestions[currentIdx]
  const total = quizQuestions.length
  const isCorrect = selected === question.correct

  const handleSelect = (idx) => {
    if (confirmed) return
    setSelected(idx)
  }

  const handleConfirm = () => {
    if (selected === null) return
    setConfirmed(true)
    const correct = selected === question.correct
    if (correct) setScore(s => s + 1)
    setResults(r => [...r, { questionId: question.id, correct, selected }])
  }

  const handleNext = () => {
    if (currentIdx + 1 >= total) {
      setDone(true)
    } else {
      setCurrentIdx(i => i + 1)
      setSelected(null)
      setConfirmed(false)
    }
  }

  const handleRestart = () => {
    setCurrentIdx(0)
    setSelected(null)
    setConfirmed(false)
    setScore(0)
    setResults([])
    setDone(false)
  }

  const getScoreFeedback = () => {
    const pct = score / total
    if (pct === 1) return { label: 'Perfect Score! 🏆', sub: 'Outstanding! You have mastered cybersecurity basics.', color: 'text-cyber-green', emoji: '🛡️' }
    if (pct >= 0.83) return { label: 'Excellent! 🌟', sub: 'You have a strong grasp of cyber safety concepts.', color: 'text-cyber-accent', emoji: '⭐' }
    if (pct >= 0.67) return { label: 'Good Work! 👍', sub: 'Solid knowledge. Review the missed topics to strengthen your skills.', color: 'text-cyber-yellow', emoji: '📚' }
    if (pct >= 0.5) return { label: 'Keep Learning! 📖', sub: 'You\'re on the right track. Visit the Learn section to brush up.', color: 'text-orange-400', emoji: '🔍' }
    return { label: 'More Practice Needed', sub: 'Don\'t worry — visit the Learn Center and try again!', color: 'text-cyber-red', emoji: '💪' }
  }

  if (done) {
    const fb = getScoreFeedback()
    return (
      <div>
        <PageHeader icon={Target} badge="Cyber Safety Quiz" title="Quiz Complete!" subtitle="Review your performance below." />
        <div className="max-w-3xl mx-auto px-4 py-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="cyber-card text-center mb-8"
          >
            <div className="text-5xl mb-4">{fb.emoji}</div>
            <div className="text-6xl font-bold text-white terminal-text mb-2">
              {score}<span className="text-cyber-muted text-3xl">/{total}</span>
            </div>
            <div className={`text-2xl font-semibold mb-2 ${fb.color}`}>{fb.label}</div>
            <p className="text-cyber-muted">{fb.sub}</p>

            <div className="mt-6 h-3 bg-cyber-bg rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyber-accent to-cyber-green rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(score / total) * 100}%` }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
            <div className="mt-1 text-right text-cyber-muted text-sm terminal-text">{Math.round(score/total*100)}%</div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="cyber-card text-center">
              <CheckCircle className="w-5 h-5 text-cyber-green mx-auto mb-2" />
              <div className="text-2xl font-bold text-cyber-green terminal-text">{score}</div>
              <div className="text-cyber-muted text-xs mt-1">Correct</div>
            </div>
            <div className="cyber-card text-center">
              <XCircle className="w-5 h-5 text-cyber-red mx-auto mb-2" />
              <div className="text-2xl font-bold text-cyber-red terminal-text">{total - score}</div>
              <div className="text-cyber-muted text-xs mt-1">Incorrect</div>
            </div>
            <div className="cyber-card text-center">
              <Brain className="w-5 h-5 text-cyber-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-cyber-accent terminal-text">{Math.round(score/total*100)}%</div>
              <div className="text-cyber-muted text-xs mt-1">Score</div>
            </div>
          </div>

          {/* Question Review */}
          <div className="mb-8">
            <h3 className="text-white font-semibold mb-4">Question Review</h3>
            <div className="space-y-3">
              {quizQuestions.map((q, i) => {
                const result = results.find(r => r.questionId === q.id)
                return (
                  <div key={q.id} className={`cyber-card border ${result?.correct ? 'border-cyber-green/30' : 'border-cyber-red/30'}`}>
                    <div className="flex items-start gap-3">
                      {result?.correct
                        ? <CheckCircle className="w-4 h-4 text-cyber-green flex-shrink-0 mt-0.5" />
                        : <XCircle className="w-4 h-4 text-cyber-red flex-shrink-0 mt-0.5" />
                      }
                      <div>
                        <p className="text-white text-sm font-medium mb-1">Q{i+1}. {q.question}</p>
                        {!result?.correct && (
                          <p className="text-cyber-green text-xs">
                            ✓ Correct: {q.options[q.correct]}
                          </p>
                        )}
                        <p className="text-cyber-muted text-xs mt-1 leading-relaxed">{q.explanation}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <button onClick={handleRestart} className="cyber-btn-primary w-full flex items-center justify-center gap-2">
            <RotateCcw className="w-4 h-4" /> Retake Quiz
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <PageHeader
        icon={Target}
        badge="Cyber Safety Quiz"
        title="Test Your Knowledge"
        subtitle="12 scenario-based questions covering all major cybersecurity topics."
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-cyber-muted text-sm terminal-text">Question {currentIdx + 1} of {total}</span>
          <div className="flex items-center gap-3">
            <Badge variant={categoryColors[question.category] || 'muted'}>{question.category}</Badge>
            <span className="text-cyber-accent font-semibold terminal-text">{score} pts</span>
          </div>
        </div>
        <div className="h-2 bg-cyber-surface rounded-full mb-8 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyber-accent to-cyber-green rounded-full"
            animate={{ width: `${(currentIdx / total) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Question */}
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="cyber-card mb-6">
            <p className="text-white text-lg leading-relaxed font-medium">{question.question}</p>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {question.options.map((option, i) => {
              let className = 'w-full flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer '

              if (!confirmed) {
                if (selected === i) {
                  className += 'border-cyber-accent bg-cyber-accent/10 text-white'
                } else {
                  className += 'border-cyber-border bg-cyber-card text-cyber-muted hover:border-cyber-accent/50 hover:text-white'
                }
              } else {
                if (i === question.correct) {
                  className += 'border-cyber-green bg-cyber-green/10 text-cyber-green'
                } else if (selected === i && i !== question.correct) {
                  className += 'border-cyber-red bg-cyber-red/10 text-cyber-red'
                } else {
                  className += 'border-cyber-border bg-cyber-card text-cyber-muted opacity-50'
                }
              }

              return (
                <motion.button
                  key={i}
                  className={className}
                  onClick={() => handleSelect(i)}
                  whileHover={!confirmed ? { scale: 1.01 } : {}}
                  whileTap={!confirmed ? { scale: 0.99 } : {}}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 terminal-text text-xs font-bold ${
                    confirmed && i === question.correct ? 'border-cyber-green bg-cyber-green text-cyber-bg' :
                    confirmed && selected === i && i !== question.correct ? 'border-cyber-red bg-cyber-red text-white' :
                    selected === i && !confirmed ? 'border-cyber-accent bg-cyber-accent text-cyber-bg' :
                    'border-current'
                  }`}>
                    {confirmed && i === question.correct ? '✓' :
                     confirmed && selected === i ? '✗' :
                     String.fromCharCode(65 + i)}
                  </div>
                  <span className="text-sm leading-relaxed">{option}</span>
                </motion.button>
              )
            })}
          </div>

          {/* Feedback */}
          <AnimatePresence>
            {confirmed && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <div className={`rounded-xl p-4 border ${isCorrect ? 'bg-cyber-green/10 border-cyber-green/40' : 'bg-cyber-red/10 border-cyber-red/40'} mb-4`}>
                  <div className={`flex items-center gap-2 font-semibold mb-1.5 ${isCorrect ? 'text-cyber-green' : 'text-cyber-red'}`}>
                    {isCorrect ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </div>
                  <p className="text-cyber-muted text-sm leading-relaxed">{question.explanation}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Buttons */}
          {!confirmed ? (
            <button
              onClick={handleConfirm}
              disabled={selected === null}
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                selected !== null
                  ? 'cyber-btn-primary'
                  : 'bg-cyber-surface border border-cyber-border text-cyber-muted cursor-not-allowed'
              }`}
            >
              Confirm Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="cyber-btn-primary w-full flex items-center justify-center gap-2"
            >
              {currentIdx + 1 >= total ? 'See Results' : 'Next Question'}
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </motion.div>
      </div>
    </div>
  )
}
