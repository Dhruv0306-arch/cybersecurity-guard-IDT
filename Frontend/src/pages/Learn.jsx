import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, AlertTriangle, CheckCircle, Lightbulb, BookOpen, Video } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Badge from '../components/Badge'
import { learnModules } from '../data/learnData'

function ModuleCard({ module, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        expanded
          ? `border-opacity-70 ${module.borderColor} bg-cyber-card`
          : 'border-cyber-border bg-cyber-card hover:border-cyber-accent/30'
      }`}
    >
      {/* Module Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-4 p-6 text-left group"
        aria-expanded={expanded}
      >
        <div className={`w-12 h-12 rounded-xl ${module.bgColor} flex items-center justify-center flex-shrink-0`}>
          <module.icon className={`w-6 h-6 ${module.color}`} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="text-white font-semibold text-lg">{module.title}</h3>
            <Badge variant={module.badgeVariant}>{module.badge}</Badge>
          </div>
          <p className="text-cyber-muted text-sm">{module.summary}</p>
        </div>

        <div className="flex-shrink-0 ml-4">
          {expanded
            ? <ChevronUp className="w-5 h-5 text-cyber-muted" />
            : <ChevronDown className="w-5 h-5 text-cyber-muted group-hover:text-cyber-accent transition-colors" />
          }
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-cyber-border pt-5 space-y-6">
              {/* Description */}
              <p className="text-cyber-muted leading-relaxed">{module.description}</p>

              {/* Video Player */}
              {module.videoUrl && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Video className="w-4 h-4 text-cyber-accent" />
                    <h4 className="text-white font-semibold text-sm uppercase tracking-wide">Educational Video</h4>
                  </div>
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-cyber-border">
                    <iframe
                      src={module.videoUrl}
                      title={`${module.title} Video`}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}

              {/* Real-Life Examples */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-4 h-4 text-cyber-yellow" />
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wide">Real-Life Examples</h4>
                </div>
                <div className="space-y-3">
                  {module.examples.map((ex, i) => (
                    <div key={i} className="bg-cyber-bg rounded-lg p-4 border border-cyber-border">
                      <p className="text-white text-sm font-medium mb-2">📌 {ex.title}</p>
                      <p className="text-cyber-muted text-sm mb-2 italic leading-relaxed">"{ex.scenario}"</p>
                      <div className="flex items-start gap-2 bg-cyber-red/10 border border-cyber-red/20 rounded-lg p-2.5 mt-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-cyber-red flex-shrink-0 mt-0.5" />
                        <p className="text-cyber-red text-xs leading-relaxed"><strong>Red Flag:</strong> {ex.redFlag}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prevention Tips */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-4 h-4 text-cyber-green" />
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wide">Prevention Tips</h4>
                </div>
                <ul className="space-y-2">
                  {module.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-cyber-muted">
                      <CheckCircle className="w-4 h-4 text-cyber-green flex-shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Learn() {
  return (
    <div>
      <PageHeader
        icon={BookOpen}
        badge="Learn Center"
        title="Cybersecurity Fundamentals"
        subtitle="Five essential modules covering the most common threats every internet user faces. Click any topic to expand and start learning."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {learnModules.map((module, index) => (
            <ModuleCard key={module.id} module={module} index={index} />
          ))}
        </div>

        {/* Quick Reference */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 cyber-card border-cyber-accent/30"
        >
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-cyber-accent" />
            <h3 className="text-white font-semibold">The Golden Rules of Cyber Safety</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Never click links in unsolicited emails or SMS',
              'Use a unique password for every important account',
              'Enable two-factor authentication (2FA) everywhere',
              'Verify before you trust — even if the message seems urgent',
              'Keep software and operating systems updated',
              'Use a VPN on public Wi-Fi networks',
              'Back up important data regularly',
              'When in doubt, don\'t — pause and verify first',
            ].map((rule, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-cyber-muted">
                <div className="w-5 h-5 rounded-full bg-cyber-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-cyber-accent text-xs font-bold terminal-text">{i + 1}</span>
                </div>
                {rule}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
