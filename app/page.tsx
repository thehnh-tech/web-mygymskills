import Image from 'next/image';

const highlights = [
  {
    title: 'Session planning',
    body: 'Build a workout with planned sets, reps, weight, and rest targets before you train.',
  },
  {
    title: 'Fast set logging',
    body: 'Adjust each set during the workout and mark completed work with one tap.',
  },
  {
    title: 'Progress review',
    body: 'Track completion, weekly consistency, volume, duration, and personal records.',
  },
];

const stats = [
  ['90+', 'exercise entries'],
  ['100%', 'offline-first'],
  ['iOS', 'ready with EAS'],
];

export default function HomePage() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="MyGymSkills home">
          <Image src="/app-icon.png" alt="" width={32} height={32} priority />
          <span>MyGymSkills</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#flow">Flow</a>
          <a href="#download">Build</a>
          <a href="/privacy">Privacy</a>
        </nav>
      </header>

      <section id="top" className="hero" aria-label="MyGymSkills presentation">
        <div className="heroContent">
          <p className="eyebrow">Local-first gym tracker</p>
          <h1>MyGymSkills</h1>
          <p className="heroText">
            Plan workouts, log every set, and review progress with a simple mobile app built for repeat training.
          </p>
          <div className="heroActions">
            <a className="primaryAction" href="#download">Prepare iOS build</a>
            <a className="secondaryAction" href="#features">Explore features</a>
          </div>
        </div>
      </section>

      <section className="statBand" aria-label="Product facts">
        {stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="features" className="section">
        <div className="sectionIntro">
          <p className="eyebrow">What it does</p>
          <h2>Everything needed for a clean workout log.</h2>
        </div>
        <div className="featureGrid">
          {highlights.map((item) => (
            <article className="featureCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="flow" className="splitSection">
        <div>
          <p className="eyebrow">Training flow</p>
          <h2>From plan to completed session.</h2>
          <p>
            MyGymSkills keeps the daily workflow direct: create the session, log the work, then review what changed.
          </p>
        </div>
        <ol className="flowList">
          <li><span>01</span>Pick exercises and targets.</li>
          <li><span>02</span>Record reps and weight set by set.</li>
          <li><span>03</span>Save the workout and review progress.</li>
        </ol>
      </section>

      <section id="download" className="ctaSection">
        <p className="eyebrow">Separate presentation site</p>
        <h2>Ready for a public landing page.</h2>
        <p>
          This Next.js site is separate from the Expo app, so it can be deployed independently while the mobile app goes through EAS.
        </p>
        <div className="commandBlock">
          <code>npm run build</code>
          <span>inside the site folder</span>
        </div>
        <p className="footerLink">
          <a href="/privacy">Privacy Policy</a>
        </p>
      </section>
    </main>
  );
}
