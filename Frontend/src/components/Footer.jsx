import { Link } from 'react-router-dom'
import { Shield, Github, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-cyber-surface border-t border-cyber-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-6 h-6 text-cyber-accent" />
              <span className="font-bold text-white">Cyber<span className="text-cyber-accent">Guard</span></span>
            </div>
            <p className="text-cyber-muted text-sm leading-relaxed max-w-xs">
              Empowering everyday internet users with practical cybersecurity knowledge. Stay safe, stay smart.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Tools</h4>
            <ul className="space-y-2">
              {[
                { to: '/learn', label: 'Learn Center' },
                { to: '/phishing-simulator', label: 'Phishing Simulator' },
                { to: '/quiz', label: 'Safety Quiz' },
                { to: '/password-checker', label: 'Password Checker' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-cyber-muted hover:text-cyber-accent text-sm transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              {[
                { to: '/emergency-help', label: 'Emergency Help' },
                { to: '/emergency-help#about', label: 'About Project' },
                { to: '/emergency-help#report', label: 'Report Cybercrime' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-cyber-muted hover:text-cyber-accent text-sm transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cyber-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cyber-muted text-xs terminal-text">
            &gt; CyberGuard v1.0 — IDT Project 2025
          </p>
          <p className="text-cyber-muted text-xs flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-cyber-red" /> for digital safety education
          </p>
        </div>
      </div>
    </footer>
  )
}
