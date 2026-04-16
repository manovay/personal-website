/**
 * Timeline entries — courses aligned with courses.md; projects aligned with projects.md.
 */

/** @typedef {{ name: string, stack: string, url?: string | null, linkLabel?: 'git' | 'pdf' | 'site', bullets: string[] }} SemesterProject */

/**
 * Short suffix for project links on timeline tiles (not shown when url is missing).
 * @param {SemesterProject} p
 */
export function projectPreviewLinkText(p) {
  if (!p.url) return null;
  const kind = p.linkLabel ?? inferLinkLabel(p.url);
  if (kind === 'pdf') return '- pdf';
  if (kind === 'site') return '- site';
  return '- git';
}

function inferLinkLabel(url) {
  const u = url.toLowerCase();
  if (u.includes('github.com')) return 'git';
  if (u.endsWith('.pdf')) return 'pdf';
  return 'site';
}

export const ENTRIES = [
  {
    id: 's26',
    date: 'Spring 2026',
    title: 'Where I am now',
    body: 'Current classes, thesis/capstone, job search, or flagship work. What you want visitors to remember.',
    courses: [
      'ECE-GY 6143 Machine Learning',
      'ECE-GY 9183 Machine Learning Systems and Operations',
      'ECE-GY 9483 Efficient AI and Hardware Accelerator Design',
    ],
    projects: [
      {
        name: 'Value-Centric Soft-GQA on Llama-2-7B: Structured Low-Rank Attention Compressio',
        stack: 'Python, Llama-2-7B, low-rank attention (ongoing)',
        url: null,
        bullets: [
          'Designing structured low-rank compression for Llama-2-7B attention, focusing on Value-Centric Soft-GQA.',
          'Optimizing low-rank capacity allocation across layers to preserve validation perplexity and downstream task accuracy.',
          'Implementing robust layerwise compression with stable factorization and dynamically scaled ridge regression.',
          'Conducting structured experimental sweeps, including depth and alpha (residual allocation) variations, to evaluate performance.',
        ],
      },
      {
        name: 'Adaptive ML-Based Moderation System',
        stack: 'Python, DistilBERT, MinIO, self-hosted chat (ongoing)',
        url: null,
        bullets: [
          'Building end-to-end ML moderation pipeline for a self-hosted chat platform (30–200 users), integrating real-time inference and human-in-the-loop decision workflows.',
          'Developed toxicity classification service (TF-IDF + Logistic Regression baseline, evaluating DistilBERT) trained on 160k+ labeled comments (Jigsaw dataset).',
          'Designed streaming inference system handling ~1–5 messages/sec with target p95 latency <150 ms, prioritizing messages via model-driven risk scoring.',
          'Implemented data pipelines (MinIO + batch jobs) for nightly dataset generation, thread-safe/time-based splits, and leakage prevention in training workflows.',
          'Built continuous feedback loop (message → score → moderator label → retraining) enabling weekly model updates and performance-based promotion (AUC/Recall).',
          'Engineered production safeguards (no auto-enforcement, human validation, fallback logging) and monitoring for drift, reliability, and system robustness.',
        ],
      },
    ],
  },
  {
    id: 's26-work',
    date: 'Spring 2026',
    title: 'Experience',
    variant: 'experience-chain',
    body: 'Two concurrent roles — edge perception for competitive robotics and low-latency teleoperation for data-center robot research.',
    courses: [],
    projects: [],
    experienceChain: [
      {
        id: 'arc',
        organization: 'ArcRobotics NYU',
        location: 'Brooklyn, NY',
        role: 'Computer Vision Engineer',
        range: 'January 2026 – Current',
        bullets: [
          'Building a robot perception pipeline using YOLOv8 (PyTorch + Ultralytics) to detect opponent robots for autonomous targeting',
          'Training and benchmarking YOLOv8n vs larger variants on a ~1k image dataset, optimizing accuracy vs real-time inference',
          'Evaluating oriented bounding box (OBB) vs standard detection models to improve detection robustness for moving targets',
          'Deploying models to Jetson AGX and AMD Kria KR260, applying INT8 quantization with Vitis to achieve ~35 FPS edge',
        ],
      },
      {
        id: 'hsrn',
        organization: 'NYU High Speed Research Network (HSRN)',
        location: 'Brooklyn, NY',
        role: 'Research Engineer',
        range: 'January 2026 – Current',
        bullets: [
          'Developing a React teleoperation front end for remote data-center robots over video/audio streams',
          'Implemented real-time bidirectional audio streaming in React using Web Audio API + AudioWorklets with <100 ms target latency',
          'Integrated Corelink pub/sub streaming (WebSocket transport) for audio, video, and robot-control channels',
          'Built the operator UI with Material UI, WASD/arrow-key driving, and multi-axis controls for live demos',
        ],
      },
    ],
  },
  {
    id: 'f25',
    date: 'Fall 2025',
    title: 'Sharpening focus',
    body: 'Specialization, capstone prep, advanced topics, or a flagship project taking shape.',
    courses: ['CS-GY 9053-I2 Java Processing', 'CECE-GY 6913-A Computer Systems Architecture'],
    projects: [
      {
        name: 'Java Neural Network Visualizer',
        stack: 'Java 11, DL4J, Swing, MongoDB, MNIST',
        url: 'https://github.com/manovay/Java-NN',
        bullets: [
          'Developed an interactive MNIST digit classifier desktop app in Java 11 using DeepLearning4J (DL4J) feedforward networks with Adam optimization, configurable hidden-layer size, and reproducible training (MNIST iterators, batch size, seed).',
          'Persisted trained MultiLayerNetwork models and data normalizers to MongoDB (binary serialization via DL4J ModelSerializer and metadata documents), enabling reload, comparison, and metrics across sessions.',
          'Built a Swing GUI with tabbed workflow (visualize, metrics, train): async training and inference via SwingWorker, custom GraphPanel / HeatmapPanel / BarChartPanel for activations and outputs, and neuron disable for interactive what-if analysis.',
          'Implemented evaluation on the MNIST test split (overall accuracy, per-class accuracy, confusion matrix) and XChart line/bar charts for training history and metrics visualization.',
        ],
      },
      {
        name: 'Python RISC-V simulator',
        stack: 'Python, RV32I, pipelining, forwarding',
        url: null,
        bullets: [
          'Built a cycle-accurate RISC-V (RV32I) processor simulator in Python with single-cycle and five-stage pipelined cores, byte-addressable instruction/data memories, register file tracing, and HALT handling for deterministic shutdown.',
          'Implemented full ISA decode and execute coverage—R-type/I-type ALU (ADD/SUB/XOR/OR/AND, immediates), LW/SW, BEQ/BNE, JAL—with correct I/S/B/J immediate sign-extension and PC+4 return semantics for JAL.',
          'Engineered pipeline correctness: RAW hazard mitigation via multi-stage forwarding (EX/MEM/WB → ID/EX), load-use detection with IF/ID stall and EX bubble, and branch-taken handling with ID-stage resolution and fetch redirect.',
          'Measured end-to-end performance (cycles, instructions, CPI, IPC) and automated regression against golden outputs (StateResult, RF/DMEM dumps, metrics); documented single-cycle vs pipeline tradeoffs on small programs (e.g. CPI ~1.03–1.17 vs ~1.18–1.83 on provided workloads per project analysis).',
        ],
      },
    ],
  },
  {
    id: 'f25-exp',
    date: 'Fall 2025',
    title: 'Experience',
    variant: 'experience',
    body: 'Applied computer vision and ML for transportation infrastructure — detection, throughput, and data pipelines.',
    courses: [],
    projects: [],
    experience: {
      organization: 'Road Athena',
      location: 'Brooklyn, NY',
      role: 'Computer Vision Research Intern',
      range: 'Sep 2025 – December 2025',
      bullets: [
        'Trained and fine-tuned YOLOv8n/s models, achieving mAP@50 = 0.87, recall = 0.85, and +40% anomaly mAP over baseline',
        'Optimized inference to 22 ms/frame enabling real-time processing (45 FPS) for automated road-condition assessment at scale',
        'Built an automated video-sorting pipeline processing hundreds of frames per video, generating annotated, class-sorted outputs',
        'Improved minority-class recall by 25%, enhancing rare road damage detection via reweighting, focal loss, and augmentations.',
      ],
    },
  },
  {
    id: 'su25',
    date: 'Summer 2025',
    title: 'Summer work',
    body: 'Role, project, or independent build. Stack, impact, or lessons learned in a sentence or two.',
    courses: ['None'],
    projects: [
      {
        name: 'S&P 500 Portfolio Management Platform',
        stack: 'Flask, PostgreSQL, PyTorch LoRA, Alpaca API, Plotly, RunPod',
        url: 'https://ozero.manovay.info',
        linkLabel: 'site',
        bullets: [
          'Built an AI-assisted portfolio stack that LoRA–fine-tuned a large language model on three years of S&P 500 price and context data, with engineered features and labels persisted in PostgreSQL so training, validation, and walk-forward tests stayed reproducible.',
          'Wired automated execution through Alpaca’s trading APIs and hosted low-latency inference on RunPod serverless GPUs; a weekly rebalance cadence pulled fresh model outputs into target weights and pushed orders according to your risk and sizing rules.',
          'Benchmarked against SPY over eight months: roughly +6.21% cumulative excess return, a 57.6% win rate on rebalance intervals, and a 62.7% bootstrap probability that the strategy’s edge was not pure noise—framed alongside drawdown and turnover context.',
          'Delivered a Flask application with Plotly dashboards for equity curve, PnL, Sharpe ratio, and maximum drawdown so you could monitor live performance, compare to the benchmark, and inspect regime behavior during stress periods.',
        ],
      },
    ],
  },
  {
    id: 's25',
    date: 'Spring 2025',
    title: 'Momentum',
    body: 'Notable project milestones, competitions, open source, or leadership/mentoring if relevant.',
    courses: [
      'E&C-ENG 579 Math Modeling for Data Science & ML',
      'COMPSCI 230 Computer Architecture/OS',
      'COMPSCI 383 Artificial Intelligence',
      'HISTORY 373 American Thought & Culture',
      'INFO 490PI Wearable Health Informatics',
      'MICROBIO 160 Biology of Cancer and AIDS',
      'COMPSCI 325 Human-Computer Interaction',
    ],
    projects: [
      {
        name: 'Group Movie Recommender App',
        stack: 'PyTorch, FastAPI, WebSockets, MovieLens',
        url: 'https://github.com/manovay/movie-recc',
        bullets: [
          'Built a full-stack recommender on the MovieLens 100k dataset: trained user and item representations in PyTorch, exposed inference and session APIs through FastAPI, and used WebSockets so multiple people could browse, vote, and see recommendations refresh together without reloading the page.',
          'Modeled user embeddings and genre vectors with bias correction, then aggregated preferences across group members to rank candidate titles—achieving roughly 85%+ top-5 accuracy on held-out evaluation for the group recommendation setup.',
          'Implemented shared “movie rooms” that supported 10+ concurrent sessions, each with isolated state (participants, shortlists, votes) and live pushes whenever someone joined, rated a film, or requested a new batch of recommendations from the model backend.',
          'Used an event-driven WebSocket protocol (join/leave, votes, recommendation refreshes) with lightweight server-side fan-out so group voting and UI state stayed aligned, typically under ~200 ms round-trip latency during active sessions.',
        ],
      },
      {
        name: 'AP Study Guide Generator (ExamMine)',
        stack: 'Python, Selenium, MongoDB Atlas, sentence-transformers, OpenAI GPT-4o',
        url: 'https://github.com/manovay/ExamMine',
        bullets: [
          'Automated an end-to-end RAG pipeline over AP-style exam PDFs: used Selenium to collect or refresh source documents where needed, then PyPDF2 (plus text cleanup) to extract and normalize page-level content before chunking and indexing.',
          'Encoded passages with sentence-transformers MiniLM-L6-v2 for dense retrieval, stored vectors alongside document metadata in MongoDB Atlas, and paired FAISS-style nearest-neighbor search for fast top-k lookup at query time.',
          'Improved retrieval quality by experimenting with chunk boundaries, overlap, and metadata weighting (e.g., unit/topic tags), which raised judged relevance of retrieved context by roughly 20% before generation.',
          'Integrated OpenAI GPT-4o for grounded Q&A and quiz generation from the retrieved snippets, reporting about 85% accuracy on validation quizzes and under ~5% hallucination rate in a manual spot-check across 200+ evaluation queries.',
        ],
      },
    ],
  },
  {
    id: 'f24',
    date: 'Fall 2024',
    title: 'Leveling up',
    body: 'Heavier coursework, team projects, frameworks, or domains you went deeper on.',
    courses: [
      'CICS 305 Social Issues in Computing',
      'COMPSCI 240 Reasoning Under Uncertainty',
      'INFO 324 Clinical Health Informatics',
      'INFO 348 Data Analytics with Python',
      'INFO 390C Computational Biology & Bioinformatics',
      'MATH 235 Linear Algebra I',
      'STATISTC 315 Statistics I',
    ],
    projects: [
      {
        name: 'ComicNotify',
        stack: 'Node.js, Express, Marvel API, MongoDB Atlas, SendGrid',
        url: 'https://github.com/manovay/comic-subscription',
        bullets: [
          'Built a Node.js / Express REST API that integrates the Marvel Developer API (Axios): MD5 request signing with timestamp + public/private keys, resolves characters by name, lists series for a character, and returns total comic counts per series for subscription baselines.',
          'Designed a MongoDB (Mongoose) user model on Atlas with phone, email, and an embedded list of subscribed series (series ID, title, stored chapter/comic count), plus a signup endpoint with duplicate phone/email checks.',
          'Implemented a chapter-change notifier that loads all subscribers, re-queries Marvel for each series’ current total, compares it to the stored count, updates persisted totals, and sends HTML email alerts via SendGrid when new issues are detected (with node-cron available for scheduled runs; startup/manual trigger in app.js).',
          'Shipped a vanilla JavaScript frontend that searches by character, renders series pickers with cover thumbnails, fetches per-series totals before subscribe, and POSTs the assembled payload to the API.',
        ],
      },
      {
        name: 'ScrubData',
        stack: 'Node.js, Express, AWS S3, Databricks, HTML/CSS/JS',
        url: 'https://github.com/manovay/data-cleaning-hackumass',
        bullets: [
          'Developed a full-stack data-cleaning web app in 36 hours at HackUMass to automate CSV preprocessing—handling missing values, type coercion, and basic validation before analysis or downstream ML.',
          'Integrated AWS S3 for object storage and Databricks for distributed processing, so teams could upload large files and run cleaning pipelines on datasets with 100k+ rows with near real-time feedback as jobs completed.',
          'Built a responsive frontend with HTML, CSS, and JavaScript: users could set cleaning rules (e.g., drop/replace nulls, column filters), preview transformed rows in the browser, and iterate without re-uploading the full file each time.',
          'Engineered a Node.js + Express backend to authenticate and call Databricks job APIs, pass parameters from the UI, poll or stream status, and return cleaned outputs—reducing manual steps and keeping transformations consistent for stronger data integrity.',
        ],
      },
      {
        name: 'Environmental Disaster Prediction & Geospatial Analysis',
        stack: 'Python, NASA EONET, Plotly Mapbox, scikit-learn',
        url: 'https://github.com/manovay/Environmental-Disaster-Classifier-',
        bullets: [
          'Built end-to-end data pipeline using NASA EONET API to collect and process 6,700+ disaster events across 10+ categories over a 10-year period.',
          'Performed large-scale EDA to uncover temporal trends, identifying seasonal peaks (July–Sept) and significant class imbalance (≈98% severe storms).',
          'Developed geospatial visualizations (Plotly Mapbox) to map disaster hotspots, accurately highlighting high-risk regions (e.g., Southeast U.S., Alaska volcanic zones).',
          'Trained KNN classification model (80/20 split, k=5) achieving 99.3% accuracy, and analyzed model bias via confusion matrix due to dataset imbalance.',
          'Engineered features (lat/long normalization, encoding, scaling) and evaluated model limitations, proposing improvements (resampling, advanced models) for better generalization.',
        ],
      },
    ],
  },
  {
    id: 'su24',
    date: 'Summer 2024',
    title: 'Summer stretch',
    body: 'Internship, research, job, or deep project. What you shipped or learned outside the normal term.',
    courses: [
      'SOCIOL 313 Survey Design and Analysis',
      'COMPSCI 326 Web Programming',
      'COMPSCI 345 Databases',
      'GEOGRAPH 585 Introduction to GIS',
      'MATH 132 Calculus II',
      'CHEM 140 General Chem Prep W/ Lab',
    ],
    projects: [
      {
        name: 'Motorcycle Rideability Index',
        stack: 'Node.js, Express, OpenWeather, PouchDB, vanilla JS',
        url: 'https://github.com/manovay/Motorcycle-',
        bullets: [
          'Built a Node.js / Express REST API that geocodes US ZIP codes with OpenWeatherMap, pulls current conditions (One Call API), and returns location, weather fields, and a rideability score for motorcyclists.',
          'Implemented a rule-based rideability model (10-point scale) that weights snow, precipitation, visibility, temperature bands, and wind with additive penalties to reflect riding risk.',
          'Persisted lookups and history with PouchDB (document IDs per ZIP on weather fetch, revision handling for upserts) and exposed CRUD endpoints for stored searches (GET/POST/PUT/DELETE under /api/searches).',
          'Delivered a vanilla JavaScript frontend with multi-view UI (home, results, recents, about), fetch-based API calls, and recent search list with delete and in-place edit (location) wired to the API.',
          'Enabled CORS, JSON request bodies, and environment-based configuration (PORT, OPENWEATHER_API_KEY via dotenv) for local deployment.',
        ],
      },
    ],
  },
  {
    id: 's24',
    date: 'Spring 2024',
    title: 'Building foundations',
    body: 'Classes, labs, or self-study. Skills you strengthened. One project worth highlighting.',
    courses: [
      'MATH 131 Calculus I',
      'PSYCH 240 Statistics I',
      'ANTHRO 104 Culture, Society and People',
      'CICS 210 Data Structures',
      'INFO 203 Networks',
      'INFO 248 Data Science',
    ],
    projects: [
      {
        name: 'NFL MVP Prediction Modeling Project',
        stack: 'R, RStudio, regression, decision trees',
        url: '/milestone2-template.pdf',
        linkLabel: 'pdf',
        bullets: [
          'Built predictive models using 30+ years of NFL MVP candidate data (150+ players) to identify key statistical drivers of MVP voting outcomes.',
          'Applied linear and stepwise regression to quantify impact of performance metrics (e.g., passing TDs, rushing yards) on MVP vote share.',
          'Developed decision tree models to derive interpretable thresholds (e.g., >34 passing TDs → ~73% vote share likelihood) for MVP candidacy.',
          'Performed cross-validation and evaluated models using RMSE/MAE, achieving moderate predictive performance (R² ≈ 0.4–0.5).',
          'Conducted exploratory data analysis with visualizations to uncover positional biases (QB/RB dominance) and stat distributions.',
        ],
      },
    ],
  },
  {
    id: 'f23',
    date: 'Fall 2023',
    title: 'Starting point',
    body: 'What you were focused on this semester: key courses, first projects, tools you picked up.',
    courses: [
      'CICS 110 Foundations of Programming',
      'CICS 160 Object-Oriented Programming',
      'COMP-LIT 335 American Comics',
      'FYS-Nature-InspiredDesign/Comp',
      'INFO 101 Informatics',
      'INFO 150 Discrete Math',
    ],
    projects: [],
  },
  {
    id: 'f23-exp',
    date: 'Fall 2023',
    title: 'Experience',
    variant: 'experience',
    body: 'Undergraduate research comparing program synthesis (Rosette) with GPT on structured benchmarks — poster at the Winter Symposium.',
    courses: [],
    projects: [],
    experience: {
      organization: 'University of Massachusetts Amherst',
      location: 'Amherst, MA',
      role: 'Undergraduate Researcher',
      range: 'Nov 2023 – Feb 2024',
      url: '/1726430909053%20(1).pdf',
      bullets: [
        'Executed 20+ benchmarks comparing Rosette with GPT with tasks such as integer constraints, logic functions and bug localization',
        'Developed a Rosette test suite, achieving 70–80% correctness versus GPT’s 100% speed advantage with higher hallucination rate',
        'Created a research poster illustrating comparative success rates, error patterns, and performance deltas between Rosette and GPT',
        'Presented to 100+ attendees at UMass Winter Symposium, summarizing research on AI-driven code synthesis and benchmarking',
      ],
    },
  },
];

export function getSemesterById(id) {
  return ENTRIES.find((e) => e.id === id) ?? null;
}
