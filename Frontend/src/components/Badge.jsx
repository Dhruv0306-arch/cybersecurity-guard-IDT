export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-cyber-accent/10 text-cyber-accent border-cyber-accent/30',
    green: 'bg-cyber-green/10 text-cyber-green border-cyber-green/30',
    red: 'bg-cyber-red/10 text-cyber-red border-cyber-red/30',
    yellow: 'bg-cyber-yellow/10 text-cyber-yellow border-cyber-yellow/30',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    muted: 'bg-white/5 text-cyber-muted border-white/10',
  }
  return (
    <span className={`cyber-badge terminal-text ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
