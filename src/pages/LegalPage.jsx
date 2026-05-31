import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    number: '1',
    title: 'What Information Do We Collect?',
    content: (
      <>
        <p className="font-body text-sm text-gray-600 leading-relaxed mb-4">
          <span className="font-semibold text-gray-800">Personal information you disclose to us</span>
        </p>
        <p className="font-body text-sm text-gray-600 leading-relaxed mb-4">
          We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
        </p>
        <p className="font-body text-sm text-gray-600 leading-relaxed mb-4">
          The personal information we collect may include:{' '}
          <span className="text-gray-800">names, phone numbers, email addresses, usernames, passwords, photos, and addresses.</span>
        </p>
        <p className="font-body text-sm text-gray-600 leading-relaxed">
          <span className="font-semibold text-gray-800">Sensitive Information:</span> We process payment data (handled by Paystack) and Application Data such as Geolocation Information, Mobile Device Access (camera, microphone, photos), and Push Notifications if you grant permission.
        </p>
      </>
    ),
  },
  {
    number: '2',
    title: 'How Do We Process Your Information?',
    content: (
      <ul className="space-y-2">
        {[
          'To facilitate account creation and authentication.',
          'To deliver and facilitate delivery of services to the user.',
          'To respond to user inquiries and offer support.',
          'To send administrative and marketing communications.',
          'To fulfill and manage your orders and requests.',
          'To evaluate and improve our Services and your experience.',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 font-body text-sm text-gray-600 leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0C9348] shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: '3',
    title: 'When and With Whom Do We Share Your Personal Information?',
    content: (
      <div className="space-y-4">
        {[
          { label: 'Business Transfers', desc: 'In connection with any merger, sale of assets, or financing.' },
          { label: 'Google Maps Platform APIs', desc: 'To provide location-based services (GPS, Wi-Fi, etc.).' },
          { label: 'Affiliates', desc: 'With our parent company or subsidiaries who will honor this notice.' },
        ].map((item, i) => (
          <div key={i} className="flex gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0C9348] shrink-0" />
            <p className="font-body text-sm text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-800">{item.label}:</span> {item.desc}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: '4',
    title: 'Do We Use Cookies?',
    content: (
      <p className="font-body text-sm text-gray-600 leading-relaxed">
        We may use cookies and similar tracking technologies to gather information when you interact with our Services. These help us maintain security, fix bugs, and assist with site functions. We also permit third-party analytics and advertising technologies.
      </p>
    ),
  },
  {
    number: '5',
    title: 'How Long Do We Keep Your Information?',
    content: (
      <p className="font-body text-sm text-gray-600 leading-relaxed">
        We keep your information for as long as necessary to fulfill the purposes outlined in this notice, unless a longer period is required by law. When we have no ongoing legitimate business need, we will either delete or anonymize your data.
      </p>
    ),
  },
  {
    number: '6',
    title: 'How Do We Keep Your Information Safe?',
    content: (
      <p className="font-body text-sm text-gray-600 leading-relaxed">
        We have implemented appropriate technical and organizational security measures. However, despite our efforts, no electronic transmission or storage is 100% secure. Although we do our best, transmission to and from our Services is at your own risk.
      </p>
    ),
  },
  {
    number: '7',
    title: 'Do We Collect Information From Minors?',
    content: (
      <p className="font-body text-sm text-gray-600 leading-relaxed">
        We do not knowingly collect data from or market to children under 18 years of age. If we learn that personal information from users less than 18 has been collected, we will deactivate the account and take measures to delete the data.
      </p>
    ),
  },
  {
    number: '8',
    title: 'What Are Your Privacy Rights?',
    content: (
      <p className="font-body text-sm text-gray-600 leading-relaxed">
        You may review, change, or terminate your account at any time. You also have the right to withdraw your consent or opt out of marketing communications at any time by contacting us.
      </p>
    ),
  },
  {
    number: '9',
    title: 'Updates to This Notice',
    content: (
      <p className="font-body text-sm text-gray-600 leading-relaxed">
        We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date. We encourage you to review this notice frequently.
      </p>
    ),
  },
  {
    number: '10',
    title: 'How Can You Contact Us?',
    content: (
      <div className="font-body text-sm text-gray-600 leading-relaxed space-y-1">
        <p>
          If you have questions or comments, you may email us at{' '}
          <a href="mailto:support@tryhandi.com" className="text-[#0C9348] font-medium hover:underline">
            support@tryhandi.com
          </a>{' '}
          or by post at:
        </p>
        <div className="mt-4 pl-4 border-l-2 border-gray-200 space-y-0.5">
          <p className="font-semibold text-gray-800">Handi Digital Services LTD</p>
          <p>290a Ajose Adeogun St</p>
          <p>Lagos, Lagos 106104</p>
          <p>Nigeria</p>
        </div>
      </div>
    ),
  },
];

const summaryPoints = [
  { label: 'What personal information do we process?', desc: 'We may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.' },
  { label: 'Do we process any sensitive personal information?', desc: 'We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.' },
  { label: 'Do we collect any information from third parties?', desc: 'We do not collect any information from third parties.' },
  { label: 'How do we process your information?', desc: 'We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.' },
];

export default function LegalPage({ title }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white">

      <header className="bg-[#0C9348] py-5 px-6">
        <div className="max-w-[800px] mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/images/handi-logo-light-green.png" alt="Handi" className="h-6 w-auto object-contain brightness-[10]" />
            <span className="text-white font-body font-semibold text-lg">handi</span>
          </Link>
          <Link to="/" className="font-body text-xs text-white/70 hover:text-white transition-colors">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-[800px] mx-auto px-6 py-16">

        <div className="mb-12 pb-10 border-b border-gray-100">
          <span className="inline-block font-body text-[11px] font-semibold uppercase tracking-widest text-[#0C9348] mb-4">
            Legal
          </span>
          <h1 className="font-heading font-medium text-4xl md:text-[48px] text-gray-900 tracking-[-0.02em] leading-tight mb-4">
            {title}
          </h1>
          <p className="font-body text-sm text-gray-400">
            Handi Digital Services LTD (doing business as Handi) · Last updated 2026
          </p>
        </div>

        <p className="font-body text-sm text-gray-600 leading-relaxed mb-12">
          This Privacy Notice for Handi Digital Services LTD describes how and why we might access, collect, store, use, and/or share your personal information when you use our services, including when you visit{' '}
          <a href="https://www.tryhandi.com" className="text-[#0C9348] hover:underline">tryhandi.com</a>,
          use our mobile application, or engage with us in other related ways.
          Questions or concerns? Contact us at{' '}
          <a href="mailto:support@tryhandi.com" className="text-[#0C9348] hover:underline">support@tryhandi.com</a>.
        </p>

        <div className="bg-[#F5FFF9] border border-[#0C9348]/15 rounded-2xl p-6 md:p-8 mb-14">
          <h2 className="font-heading font-semibold text-lg text-gray-900 mb-6">Summary of Key Points</h2>
          <div className="space-y-5">
            {summaryPoints.map((point, i) => (
              <div key={i} className="flex gap-4">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0C9348] shrink-0" />
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-800">{point.label} </span>
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-0 divide-y divide-gray-100">
          {sections.map((section) => (
            <div key={section.number} className="py-10">
              <div className="flex gap-5 items-start mb-5">
                <span className="w-8 h-8 rounded-full bg-[#0C9348]/10 text-[#0C9348] font-heading font-bold text-sm flex items-center justify-center shrink-0">
                  {section.number}
                </span>
                <h2 className="font-heading font-semibold text-xl text-gray-900 leading-tight pt-0.5">
                  {section.title}
                </h2>
              </div>
              <div className="pl-13">{section.content}</div>
            </div>
          ))}
        </div>

      </main>

      <footer className="border-t border-gray-100 py-8 mt-8">
        <div className="max-w-[800px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-body text-gray-400">
          <span>© 2026 Handi Digital Services LTD. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
