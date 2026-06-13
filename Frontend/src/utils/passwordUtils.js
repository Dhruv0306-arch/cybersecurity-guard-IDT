export function analyzePassword(password) {
  if (!password) {
    return {
      score: 0,
      label: '',
      color: '',
      barColor: '',
      percentage: 0,
      feedback: [],
      passed: [],
    }
  }

  const checks = {
    length8: password.length >= 8,
    length12: password.length >= 12,
    length16: password.length >= 16,
    hasLower: /[a-z]/.test(password),
    hasUpper: /[A-Z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSymbol: /[^a-zA-Z0-9]/.test(password),
    noCommon: !['password', '123456', 'qwerty', 'abc123', 'password1', 'admin', 'letmein', 'welcome'].includes(password.toLowerCase()),
    noRepeat: !/(.)\1{2,}/.test(password),
    noSequential: !/(?:012|123|234|345|456|567|678|789|890|abc|bcd|cde|def)/i.test(password),
  }

  let score = 0
  const feedback = []
  const passed = []

  if (checks.length8) { score += 1; passed.push('At least 8 characters') } else { feedback.push('Use at least 8 characters') }
  if (checks.length12) { score += 1; passed.push('At least 12 characters') } else if (checks.length8) { feedback.push('Consider using 12+ characters for better security') }
  if (checks.length16) { score += 1; passed.push('16+ characters — excellent length!') }
  if (checks.hasLower) { score += 1; passed.push('Contains lowercase letters') } else { feedback.push('Add lowercase letters (a-z)') }
  if (checks.hasUpper) { score += 1; passed.push('Contains uppercase letters') } else { feedback.push('Add uppercase letters (A-Z)') }
  if (checks.hasNumber) { score += 1; passed.push('Contains numbers') } else { feedback.push('Add numbers (0-9)') }
  if (checks.hasSymbol) { score += 2; passed.push('Contains special characters') } else { feedback.push('Add special characters (!@#$%^&*)') }
  if (!checks.noCommon) { score -= 3; feedback.push('Avoid common passwords') } else { passed.push('Not a common password') }
  if (!checks.noRepeat) { score -= 1; feedback.push('Avoid repeating characters (e.g. "aaa")') } else { passed.push('No repeated character sequences') }
  if (!checks.noSequential) { score -= 1; feedback.push('Avoid sequential characters (e.g. "123", "abc")') } else { passed.push('No sequential patterns') }

  score = Math.max(0, Math.min(score, 10))

  let label, color, barColor, percentage

  if (score <= 2) {
    label = 'Very Weak'; color = 'text-cyber-red'; barColor = 'bg-cyber-red'; percentage = 15
  } else if (score <= 4) {
    label = 'Weak'; color = 'text-orange-400'; barColor = 'bg-orange-400'; percentage = 30
  } else if (score <= 6) {
    label = 'Fair'; color = 'text-cyber-yellow'; barColor = 'bg-cyber-yellow'; percentage = 55
  } else if (score <= 8) {
    label = 'Strong'; color = 'text-lime-400'; barColor = 'bg-lime-400'; percentage = 78
  } else {
    label = 'Very Strong'; color = 'text-cyber-green'; barColor = 'bg-cyber-green'; percentage = 100
  }

  return { score, label, color, barColor, percentage, feedback, passed }
}

export function estimateCrackTime(password) {
  if (!password) return ''

  const hasLower = /[a-z]/.test(password)
  const hasUpper = /[A-Z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSymbol = /[^a-zA-Z0-9]/.test(password)

  let charsetSize = 0
  if (hasLower) charsetSize += 26
  if (hasUpper) charsetSize += 26
  if (hasNumber) charsetSize += 10
  if (hasSymbol) charsetSize += 32

  if (charsetSize === 0) return 'instantly'

  const combinations = Math.pow(charsetSize, password.length)
  const guessesPerSecond = 1e10 // 10 billion guesses/second for modern hardware

  const seconds = combinations / guessesPerSecond

  if (seconds < 1) return 'instantly'
  if (seconds < 60) return `${Math.round(seconds)} seconds`
  if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`
  if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`
  if (seconds < 2592000) return `${Math.round(seconds / 86400)} days`
  if (seconds < 31536000) return `${Math.round(seconds / 2592000)} months`
  if (seconds < 3153600000) return `${Math.round(seconds / 31536000)} years`
  if (seconds < 315360000000) return `${Math.round(seconds / 3153600000)} centuries`
  return 'millions of years'
}
