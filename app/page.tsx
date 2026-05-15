import Image from 'next/image';

const features = [
  {
    code: '01',
    title: 'Plan the session',
    body: 'Create the workout, choose exercises, and set targets before training starts.',
  },
  {
    code: '02',
    title: 'Log each set',
    body: 'Update reps and weight with compact controls, then mark completed sets in place.',
  },
  {
    code: '03',
    title: 'Review progress',
    body: 'See completion, volume, weekly trend, and personal records from local workout data.',
  },
];

const workouts = [
  ['Push Strength', '6 exercises', '74%'],
  ['Leg Day', '5 exercises', 'Planned'],
  ['Upper Volume', '7 exercises', 'Done'],
];

const settings = [
  ['Appearance', 'System'],
  ['Units', 'kg'],
  ['Default rest', '90s'],
  ['Backup', 'JSON'],
];

export default function HomePage() {
  return (
    <main className="siteShell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="MyGymSkills home">
          <Image src="/app-icon.png" alt="" width={34} height={34} priority />
          <span>MyGymSkills</span>
        </a>
        <nav className="navLinks" aria-label="Main navigation">
          <a href="#today">Today</a>
          <a href="#features">Flow</a>
          <a href="#settings">Settings</a>
          <a href="/privacy">Privacy</a>
        </nav>
      </header>

      <section id="top" className="hero pageBand" aria-label="MyGymSkills app preview">
        <div className="heroHeader">
          <p className="eyebrow">Local-first gym tracker</p>
          <h1>MyGymSkills</h1>
          <p className="heroLead">
            A simple mobile workout log for planning sessions, recording sets, and reviewing progress without accounts or cloud sync.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#today">View app flow</a>
            <a className="button secondary" href="/privacy">Privacy policy</a>
          </div>
        </div>

        <div id="today" className="appSurface">
          <section className="phoneFrame" aria-label="Today screen preview">
            <div className="phoneStatus">
              <span>9:41</span>
              <span>MyGymSkills</span>
            </div>
            <div className="screenBody">
              <p className="screenDate">Friday, May 15</p>
              <h2 className="screenTitle">Today</h2>

              <article className="completionCard">
                <span className="miniLabel">Today&apos;s goal completion</span>
                <div className="progressRing" aria-label="74 percent complete">
                  <span>
                    <strong>74%</strong>
                    <span>of planned</span>
                  </span>
                </div>
                <p className="screenDate">Keep the plan tight and finish strong.</p>
              </article>

              <div className="cardGrid">
                <article className="statCard">
                  <span className="miniLabel">Planned Vol</span>
                  <strong>8.4k</strong>
                  <span>kg</span>
                </article>
                <article className="statCard">
                  <span className="miniLabel">Actual Vol</span>
                  <strong>6.2k</strong>
                  <span>kg</span>
                </article>
                <article className="statCard">
                  <span className="miniLabel">Exercises</span>
                  <strong>4/6</strong>
                  <span>completed</span>
                </article>
                <article className="statCard">
                  <span className="miniLabel">Duration</span>
                  <strong>52m</strong>
                  <span>logged today</span>
                </article>
              </div>
            </div>
            <div className="phoneTabs" aria-label="Mobile tab bar preview">
              <span>Today</span>
              <span>Log</span>
              <span>Library</span>
              <span>Stats</span>
              <span>More</span>
            </div>
          </section>

          <section className="dashboardPanel" aria-label="Workout and progress preview">
            <div className="segment" aria-label="Workout filters">
              <span>All</span>
              <span>Planned</span>
              <span>Done</span>
            </div>

            <div className="workoutList">
              {workouts.map(([title, meta, status]) => (
                <article className="workoutItem" key={title}>
                  <div>
                    <h3>{title}</h3>
                    <p>{meta}</p>
                  </div>
                  <span className="pill">{status}</span>
                </article>
              ))}
            </div>

            <article className="chartPanel">
              <span className="miniLabel">Last 7 days completion</span>
              <div className="barChart" aria-label="Weekly completion bar chart">
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
              </div>
            </article>
          </section>
        </div>
      </section>

      <section id="features" className="pageBand">
        <div className="sectionHeader">
          <p className="sectionKicker">Training flow</p>
          <h2>Built around the same screens as the mobile app.</h2>
          <p className="sectionLead">
            The site now uses the same neutral palette, compact cards, segmented controls, and progress surfaces as the Expo app.
          </p>
        </div>
        <div className="featureGrid">
          {features.map((feature) => (
            <article className="featureCard" key={feature.title}>
              <div className="featureIcon">{feature.code}</div>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="settings" className="settingsBand pageBand">
        <div className="settingsGrid">
          <div className="sectionHeader">
            <p className="sectionKicker">Offline by default</p>
            <h2>Settings stay simple and readable.</h2>
            <p className="sectionLead">
              App preferences, units, rest timers, and backups follow a quiet settings-list pattern instead of a marketing layout.
            </p>
          </div>
          <div className="settingsList" aria-label="Settings preview">
            {settings.map(([label, value]) => (
              <div className="settingRow" key={label}>
                <strong>{label}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ctaBand pageBand">
        <div className="ctaPanel">
          <div>
            <h2>Ready for public deployment.</h2>
            <p>The web app remains separate from the Expo mobile app and deploys independently on Vercel.</p>
          </div>
          <a className="button" href="/privacy">Privacy</a>
        </div>
      </section>
    </main>
  );
}
