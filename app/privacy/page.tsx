import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | MyGymSkills',
  description: 'Privacy policy for the MyGymSkills mobile app and presentation site.',
};

const sections = [
  {
    title: 'Data stored by the app',
    body: 'MyGymSkills is designed as a local-first workout tracker. Workout plans, logged sets, exercise history, settings, and exported backups are stored on your device unless you choose to share or back them up yourself.',
  },
  {
    title: 'Data we collect',
    body: 'The mobile app does not require an account and does not send your workout data to a MyGymSkills server. The presentation site may generate standard hosting logs such as IP address, browser, requested page, and timestamp for security and reliability.',
  },
  {
    title: 'Backups and sharing',
    body: 'If you export a JSON backup, the file is created on your device and shared only through the destination you choose in the system share sheet.',
  },
  {
    title: 'Third-party services',
    body: 'The app may be distributed through Apple App Store, Google Play, Expo, or similar platforms. Those services may process their own diagnostics, crash, purchase, or store-account data according to their privacy policies.',
  },
  {
    title: 'Children',
    body: 'MyGymSkills is not directed to children under 13. If you believe a child has provided personal information through support channels, contact us so it can be handled promptly.',
  },
  {
    title: 'Contact',
    body: 'For privacy questions, support, or deletion requests related to support messages, contact us at https://thehnh.tech/contact.',
  },
];

export default function PrivacyPage() {
  return (
    <main className="policyPage">
      <header className="policyHeader">
        <a className="backLink" href="/">MyGymSkills</a>
        <p className="eyebrow">Privacy Policy</p>
        <h1>Privacy Policy</h1>
        <p>
          Last updated: May 13, 2026. This policy explains how MyGymSkills handles data in the mobile app and on this presentation site.
        </p>
      </header>

      <section className="policyContent" aria-label="Privacy policy details">
        {sections.map((section) => (
          <article key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
