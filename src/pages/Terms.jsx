import LegalLayout from './LegalLayout';

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    blocks: [
      { type: 'p', text: 'By downloading, accessing, or using Handi ("the Service"), you agree to be bound by these Terms of Service. If you do not agree, you may not use the Service.' },
    ],
  },
  {
    id: 'eligibility',
    title: 'Eligibility',
    blocks: [
      { type: 'list', items: [
        'You must be 18 years old or older to use Handi.',
        'You must be a resident of Nigeria (initially Lagos).',
        'You are responsible for maintaining account security.',
      ] },
    ],
  },
  {
    id: 'user-responsibilities',
    title: 'User Responsibilities',
    blocks: [
      { type: 'subheading', text: 'Customers' },
      { type: 'list', items: [
        'Provide accurate, truthful information.',
        'Communicate clearly with professionals about job requirements.',
        'Pay for services as agreed.',
        'Release payment only when satisfied with work completed.',
        'Rate professionals honestly.',
      ] },
      { type: 'subheading', text: 'Professionals' },
      { type: 'list', items: [
        'Provide accurate qualifications and credentials.',
        'Show up on time or notify customers promptly.',
        'Perform services as quoted.',
        'Treat customers with respect.',
        'Maintain professional standards.',
      ] },
    ],
  },
  {
    id: 'payment-billing',
    title: 'Payment & Billing',
    blocks: [
      { type: 'subheading', text: 'Payment Processing' },
      { type: 'list', items: [
        'Payments are processed through Monnify (a third-party processor).',
        'Handi does not store your payment information.',
        'You authorize Handi to deduct fees and commissions from transactions.',
      ] },
      { type: 'subheading', text: 'Refunds' },
      { type: 'list', items: [
        'Refunds are processed within 5–7 business days.',
        'Non-refundable fees (if applicable) will be clearly disclosed.',
      ] },
      { type: 'subheading', text: 'Fees' },
      { type: 'list', items: [
        'Handi charges a service fee and/or commission on transactions.',
        'Fees are displayed before booking.',
        'Fees may vary based on service type and user tier.',
      ] },
    ],
  },
  {
    id: 'prohibited',
    title: 'Prohibited Activities',
    blocks: [
      { type: 'p', text: 'You may not:' },
      { type: 'list', items: [
        'Misrepresent your identity or qualifications.',
        'Engage in harassment, discrimination, or abuse.',
        'Attempt to bypass payment or dispute resolution.',
        'Solicit users outside the platform.',
        'Post false or misleading information.',
        'Violate any applicable laws.',
      ] },
    ],
  },
  {
    id: 'dispute-resolution',
    title: 'Dispute Resolution',
    blocks: [
      { type: 'subheading', text: 'Process' },
      { type: 'list', items: [
        'Customer and professional attempt to resolve via in-app communication.',
        'If unresolved, either party can escalate to Handi support.',
        'Handi investigates and makes a determination.',
        'Decision is final (subject to legal review).',
      ] },
      { type: 'subheading', text: 'Refund Policy' },
      { type: 'list', items: [
        'If a professional fails to complete work, the customer can request a refund.',
        'If a customer disputes a charge without cause, the professional can appeal.',
      ] },
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    blocks: [
      { type: 'p', text: 'Handi provides the Service "as is" without warranties. To the maximum extent permitted by law, Handi is not liable for:' },
      { type: 'list', items: [
        'Indirect, incidental, or consequential damages.',
        'Loss of data, profits, or business.',
        'Actions of users (customers or professionals).',
        'Third-party services (payment processors, verification services).',
      ] },
    ],
  },
  {
    id: 'indemnification',
    title: 'Indemnification',
    blocks: [
      { type: 'p', text: 'You agree to indemnify Handi against claims arising from:' },
      { type: 'list', items: [
        'Your use of the Service.',
        'Your violation of these Terms.',
        'Your infringement of third-party rights.',
        'Your conduct or interactions with other users.',
      ] },
    ],
  },
  {
    id: 'termination',
    title: 'Termination',
    blocks: [
      { type: 'p', text: 'Handi may suspend or terminate your account if you:' },
      { type: 'list', items: [
        'Violate these Terms.',
        'Engage in prohibited activities.',
        'Repeatedly receive poor ratings or complaints.',
        'Fail to pay fees or resolve disputes fairly.',
      ] },
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    blocks: [
      { type: 'p', text: "These Terms are governed by the laws of Nigeria, specifically the jurisdiction of Lagos State. Disputes shall be resolved through Handi's internal dispute process first, then through legal channels if necessary." },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to Terms',
    blocks: [
      { type: 'p', text: "Handi may update these Terms. Continued use of the Service constitutes acceptance of updated Terms. We'll notify you of material changes." },
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

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="The terms that govern your access to and use of the Handi platform."
      sections={sections}
    />
  );
}
