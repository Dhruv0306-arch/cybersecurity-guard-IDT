export const phishingScenarios = [
  {
    id: 1,
    type: 'email',
    isPhishing: true,
    difficulty: 'Easy',
    from: 'security-alert@paypa1-support.com',
    subject: '⚠️ URGENT: Your PayPal account has been limited!',
    time: '9:47 AM',
    body: `Dear Valued Customer,

We have detected unusual activity on your PayPal account. Your account has been temporarily LIMITED.

To restore full access to your account, you must verify your information IMMEDIATELY by clicking the link below:

👉 CLICK HERE TO VERIFY NOW → http://paypal-account-restore.xyz/verify

You have 24 hours to complete verification or your account will be permanently suspended.

Thank you for your cooperation.

PayPal Security Team`,
    tells: [
      'Sender domain is "paypa1-support.com" — note the "1" instead of "l" in PayPal',
      'Urgent, threatening language ("account permanently suspended") creates panic',
      'The link goes to "paypal-account-restore.xyz" — NOT paypal.com',
      'Legitimate PayPal emails address you by your full name, not "Valued Customer"',
    ],
    explanation: 'This is a classic phishing email. The misspelled sender domain, generic greeting, false urgency, and suspicious link are all hallmarks of a phishing attempt designed to steal your PayPal credentials.',
  },
  {
    id: 2,
    type: 'email',
    isPhishing: false,
    difficulty: 'Medium',
    from: 'no-reply@github.com',
    subject: 'Your GitHub password has been reset',
    time: '2:15 PM',
    body: `Hi @username,

This is a confirmation that the password for your GitHub account was recently changed.

If you changed your password, you can disregard this email.

If you did not change your password, please reset your password immediately:
https://github.com/password_reset

You can also visit https://github.com/settings/security to review your security settings.

Thanks,
The GitHub Team

You're receiving this because your account is registered at github.com. If you believe this email was sent in error, contact support at support@github.com`,
    tells: [
      'Sender is the official @github.com domain — legitimate',
      'The link goes to github.com — the official domain, not a lookalike',
      'No urgency or threatening language — just informational',
      'Offers clear next steps and real contact information',
    ],
    explanation: 'This is a legitimate security notification email. The official domain, non-threatening tone, real GitHub links, and helpful information are all signs of an authentic email. GitHub sends these automatically when passwords are changed.',
  },
  {
    id: 3,
    type: 'sms',
    isPhishing: true,
    difficulty: 'Easy',
    from: '+91-9876543210',
    subject: 'SMS Message',
    time: '11:02 AM',
    body: `SBI ALERT: Dear Customer, your SBI account is BLOCKED due to KYC non-compliance. Update NOW at: bit.ly/sbi-kyc-update2025 or your account will be deactivated within 2 hours. -SBI Team`,
    tells: [
      'Banks send official SMS from registered short codes, not random 10-digit mobile numbers',
      'The link uses a URL shortener (bit.ly) which hides the real destination',
      'Extreme urgency ("2 hours") is a classic manipulation tactic',
      'Official KYC updates happen through your bank\'s app or physical branch — never SMS links',
    ],
    explanation: 'This is SMS phishing (smishing). Your real bank will never ask you to update KYC by clicking a link in an SMS. Always use your official banking app or visit a branch. The shortened URL hides a malicious site.',
  },
  {
    id: 4,
    type: 'email',
    isPhishing: false,
    difficulty: 'Hard',
    from: 'accounts-noreply@google.com',
    subject: 'Security alert for your linked Google Account',
    time: '8:20 AM',
    body: `Security alert

Your Google Account was just signed in to from a new Windows device.

rahul.sharma@gmail.com

Windows · Mumbai, Maharashtra, India
Thursday, January 16, 8:18 AM (IST)

If this was you, you don't need to do anything.

If not, we'll help you secure your account.
Check activity

You received this email to let you know about important changes to your Google Account and services.
© 2025 Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA`,
    tells: [
      'Sender is "accounts-noreply@google.com" — an official Google domain',
      'No suspicious links — the "Check activity" would point to myaccount.google.com',
      'Includes specific details: time, device type, and approximate location',
      'No urgency or threats — just informational, asking you to verify if it was you',
    ],
    explanation: 'This is a legitimate Google security notification. The official sender domain, specific device/location details, non-threatening tone, and reference to Google\'s real address are all signs of authenticity. Google sends these when new sign-ins are detected.',
  },
  {
    id: 5,
    type: 'email',
    isPhishing: true,
    difficulty: 'Hard',
    from: 'hr.department@yourcompany-hr-portal.com',
    subject: 'Important: Updated Salary Structure - Action Required',
    time: '10:30 AM',
    body: `Dear Employee,

The HR department has finalized the updated salary structure for Q1 2025. Please review and acknowledge the new compensation details at your earliest convenience.

Access the confidential salary portal using your employee credentials:
Portal: https://company-hr-portal-2025.net/salary-review

You MUST log in within the next 48 hours to confirm your acceptance of the new terms. Failure to do so may result in processing delays for your next paycheck.

Please do not reply to this email.

Best regards,
HR Department
Human Resources`,
    tells: [
      'Sender domain "yourcompany-hr-portal.com" — contains generic "yourcompany" instead of real company name',
      'Link goes to "company-hr-portal-2025.net" — not your company\'s actual domain',
      'Targets employees with financial stakes (salary) to create urgency',
      'Real HR portals are accessed through your company\'s official intranet, not external sites',
    ],
    explanation: 'This is a sophisticated spear-phishing email targeting employees. The attacker uses knowledge of corporate HR processes to create believable urgency. The tell-tale signs are the non-company domains and the external portal link. Always verify through official internal channels.',
  },
  {
    id: 6,
    type: 'sms',
    isPhishing: false,
    difficulty: 'Medium',
    from: 'HDFC-BK',
    subject: 'SMS Message',
    time: '3:45 PM',
    body: `HDFC Bank: Rs.2,500 debited from A/c XX1234 on 16-01-25 at AMAZON. Avl Bal Rs.42,311. Not you? Call 18002586161. -HDFC Bank`,
    tells: [
      'Sender is "HDFC-BK" — a registered bank SMS sender ID (not a random number)',
      'No links in the message — just transaction details and an official helpline number',
      'Shows masked account number (XX1234) — not asking you to reveal information',
      'The helpline number matches HDFC Bank\'s official customer care number',
    ],
    explanation: 'This is a legitimate transaction alert from HDFC Bank. Real bank SMSes come from registered sender IDs, contain masked account details, include no suspicious links, and provide official contact numbers. They never ask you to click links or share OTPs.',
  },
  {
    id: 7,
    type: 'email',
    isPhishing: true,
    difficulty: 'Medium',
    from: 'netflix-billing@streaming-notifications.com',
    subject: 'Your Netflix membership is on hold',
    time: '7:12 PM',
    body: `Your Netflix membership is on hold

We're having some trouble with your current billing information. We'll try again, but in the meantime, you may want to update your payment details.

UPDATE PAYMENT INFO
→ http://netflix-billing-update.co/payment

If you believe you received this message in error, simply ignore it and your service will continue as normal.

The Netflix Team`,
    tells: [
      'Sender domain is "streaming-notifications.com" — Netflix would email from @netflix.com',
      'The update link goes to "netflix-billing-update.co" — not netflix.com',
      'Payment issue emails from Netflix include your name and last 4 digits of the card on file',
      'Legitimate Netflix links always point to netflix.com, never third-party domains',
    ],
    explanation: 'This is a phishing email impersonating Netflix. The non-Netflix sender domain and payment link destination are the key red flags. Real Netflix billing emails come from info@mailer.netflix.com and link only to netflix.com.',
  },
  {
    id: 8,
    type: 'email',
    isPhishing: false,
    difficulty: 'Hard',
    from: 'do-not-reply@coursera.org',
    subject: 'Certificate of Completion: Introduction to Cybersecurity',
    time: '4:55 PM',
    body: `Hi Priya,

Congratulations! You've earned your certificate.

Course: Introduction to Cybersecurity
Completed: January 15, 2025
Instructor: Dr. Charles Harry

Your certificate is now available on your Coursera profile.

VIEW CERTIFICATE → https://coursera.org/verify/ABCD1234

Share your achievement:
LinkedIn · Twitter · Facebook

Questions? Visit our Help Center at learner.coursera.help or contact support@coursera.org

Coursera | 381 E Evelyn Ave, Mountain View, CA 94041`,
    tells: [
      'Sender is official @coursera.org domain',
      'Uses your real name ("Hi Priya") — not a generic greeting',
      'Certificate verification link goes to coursera.org — the official domain',
      'Contains real address and support contact — consistent with legitimate communications',
    ],
    explanation: 'This is a legitimate course completion email from Coursera. The official sender domain, personalized greeting, authentic verification link, and real business details all confirm this is genuine. Coursera does send these automated completion emails.',
  },
]
