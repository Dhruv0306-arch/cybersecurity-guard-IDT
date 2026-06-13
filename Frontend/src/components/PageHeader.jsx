import { motion } from 'framer-motion'

export default function PageHeader({ icon: Icon, badge, title, subtitle, accentColor = 'text-cyber-accent' }) {
  return (
    <div className="bg-grid py-16 md:py-20 border-b border-cyber-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {badge && (
            <div className="inline-flex items-center gap-2 bg-cyber-accent/10 border border-cyber-accent/30 rounded-full px-4 py-1.5 mb-5">
              {Icon && <Icon className="w-4 h-4 text-cyber-accent" />}
              <span className="text-cyber-accent text-sm font-medium terminal-text">{badge}</span>
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-cyber-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
