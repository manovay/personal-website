import { useCallback, useState } from 'react';
import './portfolio-modern.css';

export default function PortfolioModern() {
  const [miniTab, setMiniTab] = useState('work');

  const onMiniTabKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        setMiniTab((t) => (t === 'work' ? 'edu' : 'work'));
      }
    },
    []
  );

  return (
    <div className="portfolio-modern">
      <a className="skip-link" href="#about">
        Skip to content
      </a>

      <nav className="site-nav" aria-label="Page">
        <a className="site-nav__home" href="/home.html">
          ← Home
        </a>
        <div className="site-nav__links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#academic-timeline">Academic timeline</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero__inner">
          <p className="hero__eyebrow">Portfolio · 2026</p>
          <h1 className="hero__title">
            <span className="hero__title-line">Manovay</span>
            <span className="hero__title-line hero__title-line--accent">Sharma</span>
          </h1>
          <p className="hero__tagline">
            Full-stack &amp; ML · building things that hold up in production
          </p>
          <p className="hero__lede">
            Questions about work, projects, or collaboration?{' '}
            <a href="mailto:you@example.com">Email me</a> — I’m happy to talk.
          </p>
          <div className="hero__social" aria-label="Social links">
            <a
              className="hero__pill"
              href="https://github.com/manovay"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span className="hero__dot" aria-hidden="true">
              ·
            </span>
            <a
              className="hero__pill"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="hero__dot" aria-hidden="true">
              ·
            </span>
            <a className="hero__pill" href="mailto:you@example.com">
              Mail
            </a>
            <span className="hero__dot" aria-hidden="true">
              ·
            </span>
            <a className="hero__pill" href="/resume.html">
              Résumé
            </a>
          </div>
        </div>

        <div className="mini-timeline" id="hero-timeline">
          <div className="mini-timeline__tabs" role="tablist" aria-label="Experience and education">
            <button
              type="button"
              className="mini-timeline__tab"
              role="tab"
              id="tab-work"
              aria-selected={miniTab === 'work'}
              aria-controls="panel-work"
              tabIndex={miniTab === 'work' ? 0 : -1}
              onClick={() => setMiniTab('work')}
              onKeyDown={onMiniTabKeyDown}
            >
              Work
            </button>
            <button
              type="button"
              className="mini-timeline__tab"
              role="tab"
              id="tab-edu"
              aria-selected={miniTab === 'edu'}
              aria-controls="panel-edu"
              tabIndex={miniTab === 'edu' ? 0 : -1}
              onClick={() => setMiniTab('edu')}
              onKeyDown={onMiniTabKeyDown}
            >
              Education
            </button>
          </div>

          <div
            className="mini-timeline__panel"
            id="panel-work"
            role="tabpanel"
            aria-labelledby="tab-work"
            hidden={miniTab !== 'work'}
          >
            <ul className="mini-timeline__list">
              <li className="mini-timeline__item">
                <div className="mini-timeline__node" aria-hidden="true">
                  <span>AM</span>
                </div>
                <div className="mini-timeline__body">
                  <p className="mini-timeline__dates">September 2026 – December 2026</p>
                  <h3 className="mini-timeline__org">AMD — San Jose, CA</h3>
                  <p className="mini-timeline__role">
                    Incoming Masters Artificial Intelligence Frameworks Intern
                  </p>
                </div>
              </li>
              <li className="mini-timeline__item">
                <div className="mini-timeline__node" aria-hidden="true">
                  <span>AR</span>
                </div>
                <div className="mini-timeline__body">
                  <p className="mini-timeline__dates">January 2026 – Current</p>
                  <h3 className="mini-timeline__org">ArcRobotics NYU — Brooklyn, NY</h3>
                  <p className="mini-timeline__role">Computer Vision Engineer</p>
                  <ul className="mini-timeline__bullets">
                    <li>
                      Building a robot perception pipeline using YOLOv8 (PyTorch + Ultralytics) to
                      detect opponent robots for autonomous targeting
                    </li>
                    <li>
                      Training and benchmarking YOLOv8n vs larger variants on a ~1k image dataset,
                      optimizing accuracy vs real-time inference
                    </li>
                    <li>
                      Evaluating oriented bounding box (OBB) vs standard detection models to improve
                      detection robustness for moving targets
                    </li>
                    <li>
                      Deploying models to Jetson AGX and AMD Kria KR260, applying INT8 quantization
                      with Vitis to achieve ~35 FPS edge
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mini-timeline__item">
                <div className="mini-timeline__node" aria-hidden="true">
                  <span>HS</span>
                </div>
                <div className="mini-timeline__body">
                  <p className="mini-timeline__dates">January 2026 – Current</p>
                  <h3 className="mini-timeline__org">
                    NYU High Speed Research Network (HSRN) — Brooklyn, NY
                  </h3>
                  <p className="mini-timeline__role">Research Engineer</p>
                  <ul className="mini-timeline__bullets">
                    <li>
                      Developing a React teleoperation front end for remote data-center robots over
                      video/audio streams
                    </li>
                    <li>
                      {`Implemented real-time bidirectional audio streaming in React using Web Audio API + AudioWorklets with <100 ms target latency`}
                    </li>
                    <li>
                      Integrated Corelink pub/sub streaming (WebSocket transport) for audio, video,
                      and robot-control channels
                    </li>
                    <li>
                      Built the operator UI with Material UI, WASD/arrow-key driving, and multi-axis
                      controls for live demos
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mini-timeline__item">
                <div className="mini-timeline__node" aria-hidden="true">
                  <span>RA</span>
                </div>
                <div className="mini-timeline__body">
                  <p className="mini-timeline__dates">Sep 2025 – December 2025</p>
                  <h3 className="mini-timeline__org">Road Athena — Brooklyn, NY</h3>
                  <p className="mini-timeline__role">Computer Vision Research Intern</p>
                  <ul className="mini-timeline__bullets">
                    <li>
                      Using YOLOv8n/s built a real-time computer vision system for road
                      health/damage analysis (potholes, cracks, anomalies)
                    </li>
                    <li>
                      Trained and fine-tuned models achieving mAP@50 = 0.87, recall = 0.85, and +40%
                      anomaly mAP over baseline
                    </li>
                    <li>
                      Optimized inference to 45 FPS, developed an automated pipeline processing
                      hundreds of frames/video with class-sorted outputs
                    </li>
                    <li>
                      Improved minority-class recall by 25%, enhancing rare road damage detection via
                      reweighting, focal loss, and augmentations.
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mini-timeline__item">
                <div className="mini-timeline__node" aria-hidden="true">
                  <span>UM</span>
                </div>
                <div className="mini-timeline__body">
                  <p className="mini-timeline__dates">November 2023 – February 2024</p>
                  <h3 className="mini-timeline__org">
                    University of Massachusetts Amherst — Amherst, MA
                  </h3>
                  <p className="mini-timeline__role">Undergraduate Researcher</p>
                  <ul className="mini-timeline__bullets">
                    <li>
                      Executed 20+ benchmarks comparing Rosette with GPT with tasks such as integer
                      constraints, logic functions and bug localization
                    </li>
                    <li>
                      Developed a Rosette test suite, achieving 70-80% correctness versus GPT&apos;s
                      100% speed advantage with higher hallucination rate
                    </li>
                    <li>
                      Created a research poster illustrating comparative success rates, error
                      patterns, and performance deltas between Rosette and GPT
                    </li>
                    <li>
                      Presented to 100+ attendees at UMass Winter Symposium, summarizing research on
                      AI-driven code synthesis and benchmarking
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div
            className="mini-timeline__panel"
            id="panel-edu"
            role="tabpanel"
            aria-labelledby="tab-edu"
            hidden={miniTab !== 'edu'}
          >
            <ul className="mini-timeline__list">
              <li className="mini-timeline__item">
                <div className="mini-timeline__node" aria-hidden="true">
                  <span>NY</span>
                </div>
                <div className="mini-timeline__body">
                  <p className="mini-timeline__dates">May 2027</p>
                  <h3 className="mini-timeline__org">New York University</h3>
                  <p className="mini-timeline__role">
                    M.S. Computer Engineering (AI Specialization) · 4.0 GPA
                  </p>
                </div>
              </li>
              <li className="mini-timeline__item">
                <div className="mini-timeline__node" aria-hidden="true">
                  <span>UM</span>
                </div>
                <div className="mini-timeline__body">
                  <p className="mini-timeline__dates">May 2025</p>
                  <h3 className="mini-timeline__org">University of Massachusetts Amherst</h3>
                  <p className="mini-timeline__role">
                    Accelerated 2 year B.S. Data Science/Computer Science · 3.7 GPA
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section className="section section--about" id="about">
          <div className="section__gutter">
            <h2 className="section__label">About</h2>
          </div>
          <div className="section__content">
            <p className="lead">
              I work across web backends, ML pipelines, and systems-flavored projects—APIs, real-time
              features, retrieval, and tooling that has to stay correct under load.
            </p>
            <p>
              Shipped work includes an <strong>AI-assisted S&amp;P portfolio stack</strong> (LoRA,
              PostgreSQL features, Alpaca), a <strong>group movie recommender</strong> (PyTorch +
              WebSocket rooms), and research/hackathon ML (e.g. disaster classification,
              program-synthesis comparisons).
            </p>
            <p>
              Currently interested in <strong>efficient VLMs</strong> (latency-aware low-rank
              scheduling) and <strong>ML moderation</strong> pipelines with measurable latency and
              human-in-the-loop safety.
            </p>
            <p className="section__cta">
              <a href="mailto:you@example.com">Get in touch</a> ·{' '}
              <a href="/portfolio.html">3D project gallery</a>
            </p>
          </div>
        </section>

        <section className="section section--skills" id="skills" aria-labelledby="skills-heading">
          <div className="section__gutter">
            <h2 className="section__label" id="skills-heading">
              Skills
            </h2>
          </div>
          <div className="section__content">
            <div className="skill-groups">
              <div className="skill-group">
                <h3 className="skill-group__title">Languages &amp; runtimes</h3>
                <ul className="skill-pills">
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      Python
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      TypeScript
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      Java
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      R
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      SQL
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      C
                    </span>
                  </li>
                </ul>
              </div>
              <div className="skill-group">
                <h3 className="skill-group__title">Web &amp; APIs</h3>
                <ul className="skill-pills">
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      Node.js
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      Express
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      FastAPI
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      React
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      HTML/CSS
                    </span>
                  </li>
                </ul>
              </div>
              <div className="skill-group">
                <h3 className="skill-group__title">Data &amp; ML</h3>
                <ul className="skill-pills">
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      PostgreSQL
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      MongoDB
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      PyTorch
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      Flask
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      NumPy
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      Pandas
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      Scikit-learn
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      Hugging Face Transformers
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      OpenAI API
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      Deep learning
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      Computer Vision (YOLO)
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      NLP
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      RAG pipelines
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      Embeddings (FAISS)
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      Feature engineering
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      Statistical analysis
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      Model evaluation
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      Data visualization
                    </span>
                  </li>
                </ul>
              </div>
              <div className="skill-group">
                <h3 className="skill-group__title">Ops &amp; tools</h3>
                <ul className="skill-pills">
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      Git
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      GitHub
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      Docker
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      Linux
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      Bash
                    </span>
                  </li>
                  <li>
                    <span className="skill-pill">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
                        alt=""
                        width="18"
                        height="18"
                        loading="lazy"
                      />{' '}
                      AWS
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--projects" id="projects" aria-labelledby="projects-heading">
          <div className="section__head">
            <h2 className="section__title" id="projects-heading">
              Selected work
            </h2>
            <p className="section__sub">
              Two builds I like revisiting — more in the <a href="/portfolio.html">gallery</a>.
            </p>
          </div>

          <article className="project-row">
            <div className="project-row__media" aria-hidden="true">
              <span className="project-row__badge">01</span>
              <div className="project-row__art project-row__art--ride">Rideability</div>
            </div>
            <div className="project-row__body">
              <h3 className="project-row__title">Motorcycle Rideability Index</h3>
              <p className="project-row__desc">
                ZIP geocoding, OpenWeather-backed conditions, a rule-based rideability score, and
                PouchDB-backed search history.
              </p>
              <ul className="project-row__tags">
                <li>Node.js</li>
                <li>Express</li>
                <li>OpenWeather</li>
                <li>PouchDB</li>
                <li>Vanilla JS</li>
              </ul>
              <div className="project-row__links">
                <a href="https://github.com/manovay/Motorcycle-" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="/rideability.html">Live page</a>
              </div>
            </div>
          </article>

          <article className="project-row project-row--flip">
            <div className="project-row__media" aria-hidden="true">
              <span className="project-row__badge">02</span>
              <div className="project-row__art project-row__art--film">Recommender</div>
            </div>
            <div className="project-row__body">
              <h3 className="project-row__title">Group Movie Recommender</h3>
              <p className="project-row__desc">
                PyTorch embeddings on MovieLens, FastAPI services, WebSocket “rooms” for voting and
                live refreshed group picks.
              </p>
              <ul className="project-row__tags">
                <li>PyTorch</li>
                <li>FastAPI</li>
                <li>WebSockets</li>
                <li>Python</li>
              </ul>
              <div className="project-row__links">
                <a href="https://github.com/manovay/movie-recc" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="/movierecc.html">Live page</a>
              </div>
            </div>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <span>Manovay Sharma</span>
        <span className="site-footer__sep">·</span>
        <a href="/home.html">Home</a>
      </footer>
    </div>
  );
}
