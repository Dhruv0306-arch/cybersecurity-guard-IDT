import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Shield, Mail, Lock, Globe, Wifi, Users,
  ChevronRight, Play, BookOpen, Target, CheckCircle,
  AlertTriangle, Zap, ArrowRight
} from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Learn Center',
    description: 'Master 5 essential cybersecurity topics through clear explanations, real-world examples, and actionable tips.',
    to: '/learn',
    color: 'text-cyber-accent',
    bg: 'bg-cyber-accent/10',
  },
  {
    icon: Mail,
    title: 'Phishing Simulator',
    description: 'Train your eye to detect fake emails and SMS messages before falling for them in real life.',
    to: '/phishing-simulator',
    color: 'text-cyber-red',
    bg: 'bg-cyber-red/10',
  },
  {
    icon: Target,
    title: 'Safety Quiz',
    description: 'Test your cybersecurity knowledge with scenario-based multiple-choice questions and instant feedback.',
    to: '/quiz',
    color: 'text-cyber-yellow',
    bg: 'bg-cyber-yellow/10',
  },
  {
    icon: Lock,
    title: 'Password Checker',
    description: 'Analyze your password strength in real time. Get suggestions to create unbreakable passwords.',
    to: '/password-checker',
    color: 'text-cyber-green',
    bg: 'bg-cyber-green/10',
  },
]

const stats = [
  { value: '3.4B', label: 'Phishing emails sent daily' },
  { value: '81%', label: 'Breaches use stolen passwords' },
  { value: '₹1.76L Cr', label: 'Annual cybercrime costs (India)' },
  { value: '300%', label: 'Rise in cyberattacks post-2020' },
]

const topicsPreview = [
  { icon: Mail, label: 'Phishing Attacks', color: 'text-cyber-red' },
  { icon: Lock, label: 'Password Security', color: 'text-cyber-yellow' },
  { icon: Globe, label: 'Safe Browsing', color: 'text-cyber-accent' },
  { icon: Wifi, label: 'Public Wi-Fi', color: 'text-cyber-green' },
  { icon: Users, label: 'Social Engineering', color: 'text-purple-400' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-grid overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-cyber-accent/10 border border-cyber-accent/30 rounded-full px-4 py-1.5 mb-6">
                <div className="w-2 h-2 bg-cyber-accent rounded-full animate-pulse" />
                <span className="text-cyber-accent text-sm font-medium terminal-text">IDT Project 2025 — Cybersecurity Education</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Stay Safe.<br />
                <span className="text-cyber-accent glow-text">Stay Smart.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-cyber-muted text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                CyberSecurity Guard is your personal training ground for digital safety. Learn to recognize threats, test your skills, and protect yourself online — no technical background needed.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link to="/learn" className="cyber-btn-primary flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" /> Start Learning Free
                </Link>
                <Link to="/phishing-simulator" className="cyber-btn-secondary flex items-center justify-center gap-2">
                  Try Phishing Sim <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-8">
                {topicsPreview.map(topic => (
                  <span key={topic.label} className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-xs text-cyber-muted">
                    <topic.icon className={`w-3 h-3 ${topic.color}`} />
                    {topic.label}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Animated Shield */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-cyber-accent/20 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-4 rounded-full border border-cyber-accent/15 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />

                {/* Shield container */}
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyber-accent/20 to-purple-600/20 border border-cyber-accent/30 flex items-center justify-center glow-border">
                    <Shield className="w-24 h-24 text-cyber-accent drop-shadow-[0_0_20px_rgba(0,212,255,0.6)]" />
                  </div>

                  {/* Orbiting icons */}
                  {[
                    { icon: Mail, color: 'text-cyber-red', bg: 'bg-cyber-red/20', angle: 0 },
                    { icon: Lock, color: 'text-cyber-yellow', bg: 'bg-cyber-yellow/20', angle: 72 },
                    { icon: Globe, color: 'text-cyber-accent', bg: 'bg-cyber-accent/20', angle: 144 },
                    { icon: Wifi, color: 'text-cyber-green', bg: 'bg-cyber-green/20', angle: 216 },
                    { icon: Users, color: 'text-purple-400', bg: 'bg-purple-500/20', angle: 288 },
                  ].map(({ icon: Icon, color, bg, angle }) => {
                    const rad = (angle * Math.PI) / 180
                    const x = 110 * Math.cos(rad)
                    const y = 110 * Math.sin(rad)
                    return (
                      <motion.div
                        key={angle}
                        className={`absolute w-10 h-10 rounded-full ${bg} border border-white/20 flex items-center justify-center`}
                        style={{ left: `calc(50% + ${x}px - 20px)`, top: `calc(50% + ${y}px - 20px)` }}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, delay: angle / 360 * 2, repeat: Infinity }}
                      >
                        <Icon className={`w-5 h-5 ${color}`} />
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-cyber-surface border-y border-cyber-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-cyber-accent terminal-text mb-1">{stat.value}</div>
                <div className="text-cyber-muted text-xs md:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-cyber-surface border border-cyber-border rounded-full px-4 py-1.5 mb-4">
            <Zap className="w-4 h-4 text-cyber-accent" />
            <span className="text-cyber-muted text-sm terminal-text">Four powerful tools</span>
          </div>
          <h2 className="section-header">Everything You Need to Stay Protected</h2>
          <p className="section-sub max-w-2xl mx-auto">From learning the basics to testing yourself under simulated attack conditions, CyberGuard has you covered.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={feature.to}
                className="cyber-card flex gap-5 hover:border-cyber-accent/50 hover:glow-border transition-all duration-300 group block"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2 group-hover:text-cyber-accent transition-colors duration-200 flex items-center gap-2">
                    {feature.title}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                  </h3>
                  <p className="text-cyber-muted text-sm leading-relaxed">{feature.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why CyberSecurity Matters */}
      <section className="py-20 bg-cyber-surface border-y border-cyber-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-cyber-red/10 border border-cyber-red/30 rounded-full px-4 py-1.5 mb-5">
                <AlertTriangle className="w-4 h-4 text-cyber-red" />
                <span className="text-cyber-red text-sm font-medium terminal-text">The Threat is Real</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Cyber Attacks Target <span className="text-cyber-accent">Ordinary People</span> — Not Just Companies
              </h2>
              <p className="text-cyber-muted leading-relaxed mb-6">
                Senior citizens, students, and first-time internet users are among the most targeted. Attackers exploit a lack of awareness, not a lack of intelligence. The good news? A few simple habits dramatically reduce your risk.
              </p>
              <ul className="space-y-3">
                {[
                  'India saw over 1.3 million cybercrime complaints in 2023 alone',
                  'Phishing is responsible for 90% of all data breaches',
                  'Most attacks succeed due to human error, not software vulnerabilities',
                  'Awareness training reduces successful attacks by over 70%',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-cyber-muted">
                    <CheckCircle className="w-4 h-4 text-cyber-green flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { label: 'Phishing awareness', value: 85, color: 'bg-cyber-accent' },
                { label: 'Password best practices', value: 72, color: 'bg-cyber-green' },
                { label: 'Social engineering detection', value: 68, color: 'bg-cyber-yellow' },
                { label: 'Public Wi-Fi risks known', value: 55, color: 'bg-purple-400' },
              ].map((item, i) => (
                <div key={item.label} className="cyber-card">
                  <div className="flex justify-between mb-2">
                    <span className="text-white text-sm font-medium">{item.label}</span>
                    <span className="text-cyber-muted text-sm terminal-text">{item.value}% of users unaware</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${item.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.15 }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-accent/5 via-transparent to-purple-600/5 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto relative"
        >
          <Shield className="w-16 h-16 text-cyber-accent mx-auto mb-6 drop-shadow-[0_0_20px_rgba(0,212,255,0.4)]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Ready to Become Cyber-Smart?
          </h2>
          <p className="text-cyber-muted text-lg mb-8 leading-relaxed">
            It takes less than 30 minutes to learn the habits that protect you from 90% of cyber threats. Start with any tool — no account required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/learn" className="cyber-btn-primary flex items-center justify-center gap-2">
              <BookOpen className="w-4 h-4" /> Start with Learn Center
            </Link>
            <Link to="/quiz" className="cyber-btn-secondary flex items-center justify-center gap-2">
              Take the Safety Quiz <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
