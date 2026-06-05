import LegalLayout from './LegalLayout';

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    blocks: [
      { type: 'p', text: 'At Handi, we respect your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (the "Service").' },
      { type: 'p', text: 'Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Service. By using Handi, you consent to the practices described in this policy.' },
    ],
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    blocks: [
      { type: 'p', text: 'This section covers the categories of information Handi collects — account details, task and booking data, payment information processed by our partners, device and usage data, and communications.' },
    ],
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    blocks: [
      { type: 'p', text: 'We may use the information we collect to provide, maintain, and improve our services, to develop new services, and to protect Handi and our users.' },
    ],
  },
  {
    id: 'disclosure',
    title: 'Disclosure of Your Information',
    blocks: [
      { type: 'p', text: 'We may share information with third parties in the following situations: with your consent, to comply with legal obligations, or to protect our rights.' },
    ],
  },
  {
    id: 'data-security',
    title: 'Data Security',
    blocks: [
      { type: 'p', text: 'Handi uses administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.' },
    ],
  },
  {
    id: 'user-rights',
    title: 'User Rights',
    blocks: [
      { type: 'p', text: 'Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or restrict the processing of your data.' },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies and Tracking Technologies',
    blocks: [
      { type: 'p', text: 'Handi may use cookies, web beacons, and similar tracking technologies to enhance your experience on our Service. These technologies help us understand user behavior, personalize content, and improve our services.' },
    ],
  },
  {
    id: 'third-party',
    title: 'Third-Party Services',
    blocks: [
      { type: 'p', text: 'Our Service may contain links to third-party websites and services. We do not control these third parties and are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party services you interact with.' },
    ],
  },
  {
    id: 'childrens-privacy',
    title: "Children's Privacy",
    blocks: [
      { type: 'p', text: 'Handi does not knowingly collect personal information from children under the age of 13. If we become aware that we have collected personal information from a child without verification of parental consent, we will take steps to remove that information.' },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Privacy Policy',
    blocks: [
      { type: 'p', text: 'Handi may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date. We encourage you to review this Privacy Policy periodically for any changes.' },
    ],
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    blocks: [
      { type: 'p', text: 'Data Protection Officer: privacy@tryhandi.com' },
      { type: 'p', text: 'Address: 290A Ajose Adeogun Victoria Island Lagos' },
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How we collect, use, disclose, and safeguard your information when you use Handi."
      sections={sections}
    />
  );
}
