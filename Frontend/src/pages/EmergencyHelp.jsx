import { motion } from 'framer-motion'
import {
  AlertTriangle, Phone, Globe, Mail, Shield, Users, BookOpen,
  CheckCircle, ExternalLink, ChevronRight, Info, Lock,
  Laptop, FileText, Clock, Heart
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Badge from '../components/Badge'

const incidentSteps = [
  {
    step: 1,
    icon: Laptop,
    title: 'Disconnect Immediately',
    description: 'If you suspect your device is compromised, disconnect it from the internet and your local network immediately. This stops any ongoing data theft.',
    urgency: 'Do this FIRST',
    urgencyColor: 'text-cyber-red',
  },
  {
    step: 2,
    icon: Lock,
    title: 'Change Your Passwords',
    description: 'From a DIFFERENT, trusted device, change the passwords of all important accounts — especially email, banking, and social media. Enable 2FA wherever possible.',
    urgency: 'Within 1 hour',
    urgencyColor: 'text-cyber-yellow',
  },
  {
    step: 3,
    icon: Phone,
    title: 'Contact Your Bank',
    description: 'If financial information may have been compromised, call your bank immediately using the number on the back of your card. Request to freeze your account or block suspicious transactions.',
    urgency: 'If financial data exposed',
    urgencyColor: 'text-cyber-yellow',
  },
  {
    step: 4,
    icon: FileText,
    title: 'Document Everything',
    description: 'Take screenshots of suspicious messages, emails, or transactions. Note the time and date of when you noticed the issue. This evidence is crucial for filing a report.',
    urgency: 'Before reporting',
    urgencyColor: 'text-cyber-accent',
  },
  {
    step: 5,
    icon: Globe,
    title: 'Report the Cybercrime',
    description: 'File a formal complaint with the National Cybercrime Reporting Portal (cybercrime.gov.in) or call 1930. This helps authorities track patterns and protect others.',
    urgency: 'Within 24 hours',
    urgencyColor: 'text-cyber-accent',
  },
  {
    step: 6,
    icon: Shield,
    title: 'Scan & Secure Your Device',
    description: 'Run a full antivirus scan on the affected device. Update your operating system and all software. Consider a factory reset if the infection is severe.',
    urgency: 'Before reconnecting',
    urgencyColor: 'text-cyber-green',
  },
]

const reportingResources = [
  {
    name: 'National Cybercrime Reporting Portal',
    description: 'Official government portal for reporting all types of cybercrime in India',
    link: 'https://cybercrime.gov.in',
    phone: '1930',
    badge: 'Govt. of India',
    badgeVariant: 'default',
  },
  {
    name: 'Cyber Dost (MHA)',
    description: 'Ministry of Home Affairs cybercrime awareness and reporting initiative',
    link: 'https://cyberdost.in',
    phone: null,
    badge: 'Official',
    badgeVariant: 'default',
  },
  {
    name: 'CERT-In (Cybersecurity Authority)',
    description: 'Indian Computer Emergency Response Team — report incidents affecting organizations',
    link: 'https://cert-in.org.in',
    phone: '1800-11-4949',
    badge: 'Enterprise',
    badgeVariant: 'muted',
  },
  {
    name: 'RBI Helpline (Banking Fraud)',
    description: 'Reserve Bank of India helpline specifically for banking and financial fraud',
    link: 'https://rbi.org.in',
    phone: '14440',
    badge: 'Financial Fraud',
    badgeVariant: 'yellow',
  },
]

const safetyHygiene = [
  'Keep all software and operating systems updated — updates patch security vulnerabilities',
  'Use unique, strong passwords for every account and store them in a password manager',
  'Enable two-factor authentication (2FA) on email, banking, and social media accounts',
  'Never click links in unsolicited emails or SMS messages — go directly to the website',
  'Back up important data regularly to an external drive or secure cloud storage',
  'Be skeptical of anyone asking for personal information, passwords, or OTPs — even if they seem official',
  'Review app permissions regularly — many apps request access they don\'t need',
  'Use a VPN when connecting to public Wi-Fi networks',
  'Check if your accounts have been exposed in breaches at haveibeenpwned.com',
  'Educate family members, especially seniors, about common online scams and threats',
]

const teamMembers = [
  { name: 'Team Member 1', role: 'Frontend Developer / UI Design', avatar: 'TM' },
  { name: 'Team Member 2', role: 'Backend & Data Architecture', avatar: 'TM' },
  { name: 'Team Member 3', role: 'Content Research & Documentation', avatar: 'TM' },
]

export default function EmergencyHelp() {
  return (
    <div>
      <PageHeader
        icon={AlertTriangle}
        badge="Emergency Help & About"
        title="Help & Project Information"
        subtitle="Incident response guide, reporting resources, and details about the CyberGuard project."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Incident Response */}
        <section id="incident">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-cyber-red" />
              <h2 className="text-2xl font-bold text-white">Incident Response Guide</h2>
            </div>
            <p className="text-cyber-muted mb-8">Been hacked or scammed? Stay calm and follow these steps in order.</p>

            <div className="space-y-4">
              {incidentSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="cyber-card flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-cyber-accent/10 border border-cyber-accent/30 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-cyber-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                      <h3 className="text-white font-semibold">
                        <span className="text-cyber-muted terminal-text text-sm mr-2">0{step.step}</span>
                        {step.title}
                      </h3>
                      <span className={`text-xs font-medium terminal-text ${step.urgencyColor}`}>{step.urgency}</span>
                    </div>
                    <p className="text-cyber-muted text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Reporting Resources */}
        <section id="report">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-5 h-5 text-cyber-accent" />
              <h2 className="text-2xl font-bold text-white">Reporting Resources</h2>
            </div>
            <p className="text-cyber-muted mb-8">Official channels to report cybercrime in India. Reporting helps protect others.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reportingResources.map((resource, i) => (
                <motion.div
                  key={resource.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="cyber-card hover:border-cyber-accent/40 transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-white font-semibold text-sm leading-snug">{resource.name}</h3>
                    <Badge variant={resource.badgeVariant}>{resource.badge}</Badge>
                  </div>
                  <p className="text-cyber-muted text-sm mb-4 leading-relaxed">{resource.description}</p>
                  <div className="flex items-center gap-3 flex-wrap">
                    {resource.phone && (
                      <div className="flex items-center gap-1.5 text-cyber-green text-sm font-semibold terminal-text">
                        <Phone className="w-3.5 h-3.5" />
                        {resource.phone}
                      </div>
                    )}
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-cyber-accent text-sm hover:underline"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      {resource.link.replace('https://', '')}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emergency Banner */}
            <div className="mt-6 bg-cyber-red/10 border border-cyber-red/40 rounded-xl p-5 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-cyber-red flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-bold mb-1">National Cybercrime Helpline</p>
                <p className="text-cyber-red text-3xl font-bold terminal-text mb-1">1930</p>
                <p className="text-cyber-muted text-sm">Available 24/7 for reporting financial cybercrime, fraud, and online scams in India. Keep all evidence ready before calling.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Safety Hygiene */}
        <section>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-cyber-green" />
              <h2 className="text-2xl font-bold text-white">Essential Safety Habits</h2>
            </div>
            <p className="text-cyber-muted mb-6">Prevention is always better than cure. These habits dramatically reduce your risk.</p>
            <div className="cyber-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {safetyHygiene.map((habit, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-cyber-muted">
                    <CheckCircle className="w-4 h-4 text-cyber-green flex-shrink-0 mt-0.5" />
                    {habit}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-5 h-5 text-cyber-accent" />
              <h2 className="text-2xl font-bold text-white">About CyberSecurity Guard</h2>
            </div>
            <p className="text-cyber-muted mb-8">This project, developed as part of an IDT (Integrated Digital Transformation) course, aims to democratize cybersecurity education.</p>

            {/* Project Objective */}
            <div className="cyber-card mb-6">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-cyber-accent" />
                <h3 className="text-white font-semibold">Project Objective</h3>
              </div>
              <p className="text-cyber-muted text-sm leading-relaxed mb-4">
                CyberSecurity Guard was built to address a critical gap in digital literacy: everyday internet users, especially seniors and beginners, face escalating cyber threats but lack access to simple, interactive educational resources. Traditional cybersecurity training is often too technical and inaccessible.
              </p>
              <p className="text-cyber-muted text-sm leading-relaxed">
                Our platform provides five comprehensive learning modules, an interactive phishing simulator, a scenario-based quiz, and a real-time password analyzer — all designed for accessibility, clarity, and practical impact. The goal is to reduce successful cyberattacks through awareness, not just technology.
              </p>
            </div>

            {/* Key Features */}
            <div className="cyber-card mb-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-4 h-4 text-cyber-green" />
                <h3 className="text-white font-semibold">What We Built</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Interactive Learn Center with 5 core modules',
                  'Phishing Simulator with 8 realistic scenarios',
                  'Cyber Safety Quiz with 12 expert-level questions',
                  'Real-time Password Strength Analyzer',
                  'Emergency Incident Response Guide',
                  'Cybercrime Reporting Resource Directory',
                  'Fully responsive mobile & desktop design',
                  'WCAG-compliant accessible UI',
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-cyber-muted">
                    <ChevronRight className="w-3.5 h-3.5 text-cyber-accent flex-shrink-0" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className="cyber-card mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-4 h-4 text-cyber-accent" />
                <h3 className="text-white font-semibold">Team Members</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {teamMembers.map((member, i) => (
                  <div key={i} className="text-center bg-cyber-bg border border-cyber-border rounded-xl p-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyber-accent/30 to-purple-600/30 border border-cyber-accent/30 flex items-center justify-center mx-auto mb-3">
                      <span className="text-cyber-accent font-bold text-sm terminal-text">{member.avatar}</span>
                    </div>
                    <p className="text-white font-medium text-sm">{member.name}</p>
                    <p className="text-cyber-muted text-xs mt-0.5">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Faculty Guide */}
            <div className="cyber-card mb-6">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-cyber-yellow" />
                <h3 className="text-white font-semibold">Faculty Guide</h3>
              </div>
              <div className="bg-cyber-bg border border-cyber-border rounded-xl p-4">
                <p className="text-white font-medium">Faculty Name</p>
                <p className="text-cyber-muted text-sm">Department of [Your Department]</p>
                <p className="text-cyber-muted text-sm">[Your Institution Name]</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="cyber-card">
              <div className="flex items-center gap-2 mb-3">
                <Laptop className="w-4 h-4 text-cyber-muted" />
                <h3 className="text-white font-semibold">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Vite', 'Tailwind CSS', 'React Router', 'Framer Motion', 'Lucide React', 'Vercel'].map(tech => (
                  <span key={tech} className="bg-cyber-bg border border-cyber-border rounded-lg px-3 py-1.5 text-cyber-accent text-xs terminal-text">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer Note */}
        <div className="text-center py-6 border-t border-cyber-border">
          <p className="text-cyber-muted text-sm flex items-center justify-center gap-1.5">
            Built with <Heart className="w-4 h-4 text-cyber-red" /> for digital safety education — IDT Project 2025
          </p>
        </div>

      </div>
    </div>
  )
}
