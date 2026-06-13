import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Eye, EyeOff, CheckCircle, XCircle, AlertTriangle, Shield, Info, Clock } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { analyzePassword, estimateCrackTime } from '../utils/passwordUtils'

function StrengthBar({ percentage, barColor }) {
  return (
    <div className="h-3 bg-cyber-surface rounded-full overflow-hidden border border-cyber-border">
      <motion.div
        className={`h-full rounded-full transition-all duration-500 ${barColor}`}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ boxShadow: percentage > 0 ? `0 0 10px currentColor` : 'none' }}
      />
    </div>
  )
}

function CriteriaItem({ met, label }) {
  return (
    <div className={`flex items-center gap-2 text-sm transition-colors duration-200 ${met ? 'text-cyber-green' : 'text-cyber-muted'}`}>
      {met
        ? <CheckCircle className="w-4 h-4 text-cyber-green flex-shrink-0" />
        : <div className="w-4 h-4 rounded-full border border-cyber-border flex-shrink-0" />
      }
      {label}
    </div>
  )
}

const criteria = [
  { key: 'length8', label: 'At least 8 characters', test: p => p.length >= 8 },
  { key: 'length12', label: 'At least 12 characters (recommended)', test: p => p.length >= 12 },
  { key: 'hasLower', label: 'Contains lowercase letters (a-z)', test: p => /[a-z]/.test(p) },
  { key: 'hasUpper', label: 'Contains uppercase letters (A-Z)', test: p => /[A-Z]/.test(p) },
  { key: 'hasNumber', label: 'Contains numbers (0-9)', test: p => /[0-9]/.test(p) },
  { key: 'hasSymbol', label: 'Contains special characters (!@#$%^&*)', test: p => /[^a-zA-Z0-9]/.test(p) },
  { key: 'noCommon', label: 'Not a common/dictionary password', test: p => !['password', '123456', 'qwerty', 'abc123', 'password1', 'admin', 'letmein', 'welcome', '12345678'].includes(p.toLowerCase()) },
]

const goodExamples = [
  { password: 'Tr0ub4dor&3', strength: 'Strong', note: 'Mixed case, numbers & symbols' },
  { password: 'Correct-Horse-Battery-Staple', strength: 'Very Strong', note: 'Long passphrase, easy to remember' },
  { password: 'M@ngoes_2025_Blue!', strength: 'Very Strong', note: 'Personal phrase with substitutions' },
]

export default function PasswordChecker() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const analysis = analyzePassword(password)
  const crackTime = estimateCrackTime(password)

  return (
    <div>
      <PageHeader
        icon={Lock}
        badge="Password Strength Checker"
        title="How Strong is Your Password?"
        subtitle="Analyze your password's strength in real time. No data is ever stored or sent anywhere."
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Privacy Notice */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-3 bg-cyber-accent/10 border border-cyber-accent/30 rounded-xl p-4 mb-8"
        >
          <Shield className="w-5 h-5 text-cyber-accent flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-cyber-accent text-sm font-semibold mb-0.5">Your Privacy is Guaranteed</p>
            <p className="text-cyber-muted text-sm">
              This tool runs entirely in your browser. Your password is <strong className="text-white">never sent to any server</strong>, stored in any database, or transmitted over the network. Analysis happens locally on your device only.
            </p>
          </div>
        </motion.div>

        {/* Password Input */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="cyber-card mb-6"
        >
          <label className="block text-white font-semibold mb-3">Enter a Password to Analyze</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Type a password to analyze..."
              className="w-full bg-cyber-bg border border-cyber-border rounded-xl px-4 py-3.5 pr-12 text-white placeholder-cyber-muted focus:outline-none focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent/30 transition-all duration-200 terminal-text text-lg"
              autoComplete="new-password"
              spellCheck="false"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-cyber-muted hover:text-white transition-colors"
              type="button"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          <p className="text-cyber-muted text-xs mt-2 flex items-center gap-1">
            <Info className="w-3 h-3" />
            Try a password you'd actually consider using — it's safe to test here
          </p>
        </motion.div>

        <AnimatePresence>
          {password && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-6"
            >
              {/* Strength Meter */}
              <div className="cyber-card">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-semibold">Password Strength</span>
                  <span className={`text-xl font-bold terminal-text ${analysis.color}`}>
                    {analysis.label}
                  </span>
                </div>
                <StrengthBar percentage={analysis.percentage} barColor={analysis.barColor} />

                <div className="flex items-center justify-between mt-3 text-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-cyber-muted">Length: <span className="text-white terminal-text">{password.length} chars</span></span>
                  </div>
                  {crackTime && (
                    <div className="flex items-center gap-1.5 bg-cyber-bg border border-cyber-border rounded-lg px-3 py-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyber-muted" />
                      <span className="text-cyber-muted text-xs">Est. crack time: </span>
                      <span className={`text-xs font-semibold terminal-text ${analysis.color}`}>{crackTime}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Criteria Checklist */}
              <div className="cyber-card">
                <h3 className="text-white font-semibold mb-4">Password Criteria</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {criteria.map(c => (
                    <CriteriaItem key={c.key} met={c.test(password)} label={c.label} />
                  ))}
                </div>
              </div>

              {/* Feedback */}
              {(analysis.feedback.length > 0 || analysis.passed.length > 0) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {analysis.feedback.length > 0 && (
                    <div className="cyber-card border-cyber-red/30">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="w-4 h-4 text-cyber-red" />
                        <span className="text-white text-sm font-semibold">Improve With</span>
                      </div>
                      <ul className="space-y-2">
                        {analysis.feedback.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-cyber-muted">
                            <XCircle className="w-3.5 h-3.5 text-cyber-red flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {analysis.passed.length > 0 && (
                    <div className="cyber-card border-cyber-green/30">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="w-4 h-4 text-cyber-green" />
                        <span className="text-white text-sm font-semibold">What's Good</span>
                      </div>
                      <ul className="space-y-2">
                        {analysis.passed.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-cyber-muted">
                            <CheckCircle className="w-3.5 h-3.5 text-cyber-green flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tips & Examples */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 space-y-6"
        >
          <div className="cyber-card">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyber-green" />
              Strong Password Examples
            </h3>
            <div className="space-y-3">
              {goodExamples.map((ex, i) => (
                <div key={i} className="bg-cyber-bg border border-cyber-border rounded-lg p-3 flex items-center justify-between gap-3">
                  <div>
                    <span className="terminal-text text-cyber-accent text-sm">{ex.password}</span>
                    <p className="text-cyber-muted text-xs mt-0.5">{ex.note}</p>
                  </div>
                  <span className={`text-xs font-semibold terminal-text whitespace-nowrap ${
                    ex.strength === 'Very Strong' ? 'text-cyber-green' : 'text-lime-400'
                  }`}>{ex.strength}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="cyber-card">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-cyber-accent" />
              Best Practices
            </h3>
            <ul className="space-y-2">
              {[
                'Use a password manager (Bitwarden, 1Password) to generate and store unique passwords',
                'Never reuse the same password across multiple websites',
                'Enable two-factor authentication (2FA) as an extra layer of protection',
                'Change passwords immediately if you hear about a breach on a site you use',
                'A long passphrase (4+ random words) is often more secure than a short complex password',
                'Check if your email has been in a breach at haveibeenpwned.com',
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-cyber-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber-accent mt-2 flex-shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
