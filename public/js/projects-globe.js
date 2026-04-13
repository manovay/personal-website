/** Project copy sourced from projects.md; globe layout uses Three.js. */
const PROJECTS = [
    {
        term: 'UMass URV',
        title: 'Comparing GPT and Rosette for Program Synthesis',
        link: '1726430909053%20(1).pdf',
        linkLabel: 'Paper (PDF)',
        bullets: [
            'Research through the UMass URV program comparing GPT and Rosette on program synthesis, bug detection, optimization, and verification.',
            'Correctness: Rosette guarantees correctness when the specification is correct; GPT can be wrong, especially with vague specs.',
            'Specification: GPT specs are easier to write but less precise; Rosette needs complete, formal specifications.',
            'Program space: Rosette uses a small, safe subset of datatypes; GPT can target many languages but outputs are often incorrect.',
            'Speed: GPT tends to be faster for synthesis and bug detection; Rosette is stronger on verification-style tasks.',
        ],
    },
    {
        term: 'Spring 2024',
        title: 'NFL MVP Prediction Modeling Project',
        link: 'milestone2-template.pdf',
        linkLabel: 'View milestone (PDF)',
        bullets: [
            'Built predictive models using 30+ years of NFL MVP candidate data (150+ players) to identify key statistical drivers of MVP voting outcomes.',
            'Applied linear and stepwise regression to quantify impact of performance metrics (e.g., passing TDs, rushing yards) on MVP vote share.',
            'Developed decision tree models to derive interpretable thresholds (e.g., >34 passing TDs → ~73% vote share likelihood) for MVP candidacy.',
            'Performed cross-validation and evaluated models using RMSE/MAE, achieving moderate predictive performance (R² ≈ 0.4–0.5).',
            'Conducted exploratory data analysis with visualizations to uncover positional biases (QB/RB dominance) and stat distributions.',
        ],
    },
    {
        term: 'Summer 2024',
        title: 'Motorcycle Rideability Index (Full-Stack Weather Web App)',
        link: 'https://github.com/manovay/Motorcycle-',
        linkLabel: 'GitHub',
        bullets: [
            'Built a Node.js / Express REST API that geocodes US ZIP codes with OpenWeatherMap, pulls current conditions (One Call API), and returns location, weather fields, and a rideability score for motorcyclists.',
            'Implemented a rule-based rideability model (10-point scale) that weights snow, precipitation, visibility, temperature bands, and wind with additive penalties to reflect riding risk.',
            'Persisted lookups and history with PouchDB (document IDs per ZIP on weather fetch, revision handling for upserts) and exposed CRUD endpoints for stored searches (GET/POST/PUT/DELETE under /api/searches).',
            'Delivered a vanilla JavaScript frontend with multi-view UI (home, results, recents, about), fetch-based API calls, and recent search list with delete and in-place edit (location) wired to the API.',
            'Enabled CORS, JSON request bodies, and environment-based configuration (PORT, OPENWEATHER_API_KEY via dotenv) for local deployment.',
        ],
    },
    {
        term: 'Fall 2024',
        title: 'ComicNotify (Full-Stack Subscription & Email Alert App)',
        link: 'https://github.com/manovay/comic-subscription',
        linkLabel: 'GitHub',
        bullets: [
            'Built a Node.js / Express REST API that integrates the Marvel Developer API (Axios): MD5 request signing with timestamp + public/private keys, resolves characters by name, lists series for a character, and returns total comic counts per series for subscription baselines.',
            'Designed a MongoDB (Mongoose) user model on Atlas with phone, email, and an embedded list of subscribed series (series ID, title, stored chapter/comic count), plus a signup endpoint with duplicate phone/email checks.',
            'Implemented a chapter-change notifier that loads all subscribers, re-queries Marvel for each series’ current total, compares it to the stored count, updates persisted totals, and sends HTML email alerts via SendGrid when new issues are detected (with node-cron available for scheduled runs; startup/manual trigger in app.js).',
            'Shipped a vanilla JavaScript frontend that searches by character, renders series pickers with cover thumbnails, fetches per-series totals before subscribe, and POSTs the assembled payload to the API.',
        ],
    },
    {
        term: 'Fall 2024',
        title: 'ScrubData',
        link: 'https://github.com/manovay/data-cleaning-hackumass',
        linkLabel: 'GitHub',
        bullets: [
            'Developed a full-stack data-cleaning web app in 36 hours at HackUMass to automate CSV preprocessing—handling missing values, type coercion, and basic validation before analysis or downstream ML.',
            'Integrated AWS S3 for object storage and Databricks for distributed processing, so teams could upload large files and run cleaning pipelines on datasets with 100k+ rows with near real-time feedback as jobs completed.',
            'Built a responsive frontend with HTML, CSS, and JavaScript: users could set cleaning rules (e.g., drop/replace nulls, column filters), preview transformed rows in the browser, and iterate without re-uploading the full file each time.',
            'Engineered a Node.js + Express backend to authenticate and call Databricks job APIs, pass parameters from the UI, poll or stream status, and return cleaned outputs—reducing manual steps and keeping transformations consistent for stronger data integrity.',
        ],
    },
    {
        term: 'Fall 2024',
        title: 'Environmental Disaster Prediction & Geospatial Analysis',
        link: 'https://github.com/manovay/Environmental-Disaster-Classifier-',
        linkLabel: 'GitHub',
        bullets: [
            'Built end-to-end data pipeline using NASA EONET API to collect and process 6,700+ disaster events across 10+ categories over a 10-year period.',
            'Performed large-scale EDA to uncover temporal trends, identifying seasonal peaks (July–Sept) and significant class imbalance (≈98% severe storms).',
            'Developed geospatial visualizations (Plotly Mapbox) to map disaster hotspots, accurately highlighting high-risk regions (e.g., Southeast U.S., Alaska volcanic zones).',
            'Trained KNN classification model (80/20 split, k=5) achieving 99.3% accuracy, and analyzed model bias via confusion matrix due to dataset imbalance.',
            'Engineered features (lat/long normalization, encoding, scaling) and evaluated model limitations, proposing improvements (resampling, advanced models) for better generalization.',
        ],
    },
    {
        term: 'Spring 2025',
        title: 'Group Movie Recommender App',
        link: 'https://github.com/manovay/movie-recc',
        linkLabel: 'GitHub',
        bullets: [
            'Built a full-stack recommender on the MovieLens 100k dataset: trained user and item representations in PyTorch, exposed inference and session APIs through FastAPI, and used WebSockets so multiple people could browse, vote, and see recommendations refresh together without reloading the page.',
            'Modeled user embeddings and genre vectors with bias correction, then aggregated preferences across group members to rank candidate titles—achieving roughly 85%+ top-5 accuracy on held-out evaluation for the group recommendation setup.',
            'Implemented shared “movie rooms” that supported 10+ concurrent sessions, each with isolated state (participants, shortlists, votes) and live pushes whenever someone joined, rated a film, or requested a new batch of recommendations from the model backend.',
            'Used an event-driven WebSocket protocol (join/leave, votes, recommendation refreshes) with lightweight server-side fan-out so group voting and UI state stayed aligned, typically under ~200 ms round-trip latency during active sessions.',
        ],
    },
    {
        term: 'Spring 2025',
        title: 'AP Study Guide Generator',
        link: 'https://github.com/manovay/ExamMine',
        linkLabel: 'GitHub',
        bullets: [
            'Automated an end-to-end RAG pipeline over AP-style exam PDFs: used Selenium to collect or refresh source documents where needed, then PyPDF2 (plus text cleanup) to extract and normalize page-level content before chunking and indexing.',
            'Encoded passages with sentence-transformers MiniLM-L6-v2 for dense retrieval, stored vectors alongside document metadata in MongoDB Atlas, and paired FAISS-style nearest-neighbor search for fast top-k lookup at query time.',
            'Improved retrieval quality by experimenting with chunk boundaries, overlap, and metadata weighting (e.g., unit/topic tags), which raised judged relevance of retrieved context by roughly 20% before generation.',
            'Integrated OpenAI GPT-4o for grounded Q&A and quiz generation from the retrieved snippets, reporting about 85% accuracy on validation quizzes and under ~5% hallucination rate in a manual spot-check across 200+ evaluation queries.',
        ],
    },
    {
        term: 'Summer 2025',
        title: 'S&P 500 Portfolio Management Platform',
        link: 'https://ozero.manovay.info',
        linkLabel: 'Live site',
        bullets: [
            'Built an AI-assisted portfolio stack that LoRA–fine-tuned a large language model on three years of S&P 500 price and context data, with engineered features and labels persisted in PostgreSQL so training, validation, and walk-forward tests stayed reproducible.',
            'Wired automated execution through Alpaca’s trading APIs and hosted low-latency inference on RunPod serverless GPUs; a weekly rebalance cadence pulled fresh model outputs into target weights and pushed orders according to your risk and sizing rules.',
            'Benchmarked against SPY over eight months: roughly +6.21% cumulative excess return, a 57.6% win rate on rebalance intervals, and a 62.7% bootstrap probability that the strategy’s edge was not pure noise—framed alongside drawdown and turnover context.',
            'Delivered a Flask application with Plotly dashboards for equity curve, PnL, Sharpe ratio, and maximum drawdown so you could monitor live performance, compare to the benchmark, and inspect regime behavior during stress periods.',
        ],
    },
    {
        term: 'Fall 2025',
        title: 'Java Neural Network Visualizer',
        link: 'https://github.com/manovay/Java-NN',
        linkLabel: 'GitHub',
        bullets: [
            'Developed an interactive MNIST digit classifier desktop app in Java 11 using DeepLearning4J (DL4J) feedforward networks with Adam optimization, configurable hidden-layer size, and reproducible training (MNIST iterators, batch size, seed).',
            'Persisted trained MultiLayerNetwork models and data normalizers to MongoDB (binary serialization via DL4J ModelSerializer and metadata documents), enabling reload, comparison, and metrics across sessions.',
            'Built a Swing GUI with tabbed workflow (visualize, metrics, train): async training and inference via SwingWorker, custom GraphPanel / HeatmapPanel / BarChartPanel for activations and outputs, and neuron disable for interactive what-if analysis.',
            'Implemented evaluation on the MNIST test split (overall accuracy, per-class accuracy, confusion matrix) and XChart line/bar charts for training history and metrics visualization.',
        ],
    },
    {
        term: 'Fall 2025',
        title: 'Python RISC-V simulator',
        link: null,
        linkLabel: null,
        bullets: [
            'Built a cycle-accurate RISC-V (RV32I) processor simulator in Python with single-cycle and five-stage pipelined cores, byte-addressable instruction/data memories, register file tracing, and HALT handling for deterministic shutdown.',
            'Implemented full ISA decode and execute coverage—R-type/I-type ALU (ADD/SUB/XOR/OR/AND, immediates), LW/SW, BEQ/BNE, JAL—with correct I/S/B/J immediate sign-extension and PC+4 return semantics for JAL.',
            'Engineered pipeline correctness: RAW hazard mitigation via multi-stage forwarding (EX/MEM/WB → ID/EX), load-use detection with IF/ID stall and EX bubble, and branch-taken handling with ID-stage resolution and fetch redirect.',
            'Measured end-to-end performance (cycles, instructions, CPI, IPC) and automated regression against golden outputs (StateResult, RF/DMEM dumps, metrics); documented single-cycle vs pipeline tradeoffs on small programs (e.g. CPI ~1.03–1.17 vs ~1.18–1.83 on provided workloads per project analysis).',
        ],
    },
    {
        term: 'Spring 2026',
        title: 'Latency-Aware Rank Scheduling for Low-Rank VLMs (ongoing)',
        link: null,
        linkLabel: null,
        bullets: [
            'Exploring how to allocate low-rank capacity across layers and modalities in compressed vision–language models when total parameters are capped: rank becomes a schedulable resource, and the goal is to favor allocations that preserve task quality while respecting latency-sensitive deployment constraints.',
            'Implementing and comparing scheduling policies—uniform baselines, importance- or sensitivity-weighted ranks, and explicitly latency-aware heuristics—so you can map the Pareto frontier between accuracy (or downstream scores) and end-to-end latency rather than only model size.',
            'Standing up a reproducible GPU benchmarking harness that records time-to-first-token (TTFT), time-per-output token (TPOT), tokens/sec throughput, and peak/resident memory under fixed batch and sequence settings, with pinned seeds and configs for apples-to-apples runs across schedules.',
            'Plumbing chosen rank schedules through a real inference path (prefill/decode loops, batched generation where applicable) and running controlled ablations to isolate the effect of scheduling from other compression knobs, with results tracked in tables/plots for the write-up.',
        ],
    },
    {
        term: 'Spring 2026',
        title: 'Adaptive ML-Based Moderation System (ongoing)',
        link: null,
        linkLabel: null,
        bullets: [
            'Building end-to-end ML moderation pipeline for a self-hosted chat platform (30–200 users), integrating real-time inference and human-in-the-loop decision workflows.',
            'Developed toxicity classification service (TF-IDF + Logistic Regression baseline, evaluating DistilBERT) trained on 160k+ labeled comments (Jigsaw dataset).',
            'Designed streaming inference system handling ~1–5 messages/sec with target p95 latency <150 ms, prioritizing messages via model-driven risk scoring.',
            'Implemented data pipelines (MinIO + batch jobs) for nightly dataset generation, thread-safe/time-based splits, and leakage prevention in training workflows.',
            'Built continuous feedback loop (message → score → moderator label → retraining) enabling weekly model updates and performance-based promotion (AUC/Recall).',
            'Engineered production safeguards (no auto-enforcement, human validation, fallback logging) and monitoring for drift, reliability, and system robustness.',
        ],
    },
];

/**
 * One GLTF per row in PROJECTS; paths + scales follow asset.md (scaled down where noted).
 * Index 0 = UMass research / computer.gltf. Index 11 = Latency / math.gltf — dense mesh; keep scale small.
 */
const PROJECT_MODELS = [
    { path: './images/computer.gltf', scale: 0.30 },
    { path: './images/football.gltf', scale: 0.04 },
    { path: './images/motorcycle.gltf', scale: 0.48 },
    { path: './images/marvelscene.gltf', scale: 0.011 },
    { path: './images/broom.gltf', scale: 0.9 },
    { path: './images/earth.gltf', scale: 0.05 },
    { path: './images/film.gltf', scale: 0.50 },
    { path: './images/book.gltf', scale: 0.4 },
    { path: './images/stocks.gltf', scale: 0.3 },
    { path: './images/java.gltf', scale: 0.2 },
    { path: './images/chip.gltf', scale: 0.8 },
    { path: './images/math.gltf', scale: 0.0006 },
    { path: './images/shield.gltf', scale: 0.3 },
];

const LATENCY_PROJECT_INDEX = 11;

function countMeshDrawStats(root) {
    let triangles = 0;
    let meshes = 0;
    root.traverse((obj) => {
        if (!obj.isMesh || !obj.geometry) return;
        meshes += 1;
        const g = obj.geometry;
        if (g.index) {
            triangles += g.index.count / 3;
        } else if (g.attributes && g.attributes.position) {
            triangles += g.attributes.position.count / 3;
        }
    });
    return { triangles: Math.round(triangles), meshes };
}

function formatNum(n) {
    return n.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

function fibonacciSpherePoint(i, n, radius) {
    const t = (i + 0.5) / n;
    const phi = Math.acos(1 - 2 * t);
    const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
    return new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
    );
}

function randBetween(min, max) {
    return min + Math.random() * (max - min);
}

function getCssPalette() {
    const cs = getComputedStyle(document.documentElement);
    const keys = ['--accent', '--accent-bright', '--tab-from', '--tab-to', '--nobel', '--muted'];
    const out = [];
    keys.forEach((k) => {
        const v = (cs.getPropertyValue(k) || '').trim();
        if (v) out.push(v);
    });
    // fallback (shouldn't happen with your CSS)
    if (!out.length) out.push('#e32721', '#ff5a52', '#7dd3fc', '#a78bfa');
    return out;
}

function buildNearbyConnections(points, perPoint = 2) {
    // points: THREE.Vector3[] (in globeGroup local space)
    const connections = [];
    for (let i = 0; i < points.length; i += 1) {
        const dists = [];
        for (let j = 0; j < points.length; j += 1) {
            if (j === i) continue;
            dists.push({ j, d: points[i].distanceToSquared(points[j]) });
        }
        dists.sort((a, b) => a.d - b.d);
        const k = Math.max(0, Math.min(perPoint, dists.length));
        for (let n = 0; n < k; n += 1) {
            const j = dists[n].j;
            // de-dupe undirected edges
            const a = Math.min(i, j);
            const b = Math.max(i, j);
            const key = `${a}-${b}`;
            connections.push({ a, b, key });
        }
    }
    const seen = new Set();
    return connections.filter((c) => {
        if (seen.has(c.key)) return false;
        seen.add(c.key);
        return true;
    });
}

function addRandomLongConnections(points, connections, extra = 10) {
    const seen = new Set(connections.map((c) => c.key));
    const n = points.length;
    if (n < 3) return connections;

    let tries = 0;
    while (extra > 0 && tries < extra * 20) {
        tries += 1;
        const a = Math.floor(Math.random() * n);
        let b = Math.floor(Math.random() * n);
        if (b === a) continue;

        // bias toward far-apart pairs ("reach across")
        const d2 = points[a].distanceToSquared(points[b]);
        const farEnough = d2 > 6.0; // tuned for radius ~1.85
        if (!farEnough) continue;

        const lo = Math.min(a, b);
        const hi = Math.max(a, b);
        const key = `${lo}-${hi}`;
        if (seen.has(key)) continue;
        seen.add(key);
        connections.push({ a: lo, b: hi, key });
        extra -= 1;
    }
    return connections;
}

function createConnectionParticles(points, connections, opts = {}) {
    const count = opts.count ?? 220;
    const size = opts.size ?? 0.028;
    const opacity = opts.opacity ?? 0.6;
    const minSpeed = opts.minSpeed ?? 0.25; // progress per second
    const maxSpeed = opts.maxSpeed ?? 0.75;
    const jitter = opts.jitter ?? 0.06;
    const retargetRate = opts.retargetRate ?? 0.28; // average re-targets per second (higher = more random routes)
    const palette = (opts.palette && opts.palette.length ? opts.palette : getCssPalette()).map((c) => new THREE.Color(c));

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const startIdx = new Uint16Array(count);
    const endIdx = new Uint16Array(count);
    const progress = new Float32Array(count);
    const speed = new Float32Array(count);
    const colorIdx = new Uint8Array(count);

    function pickConnection(i) {
        const c = connections[Math.floor(Math.random() * connections.length)];
        // random direction on that edge
        if (Math.random() < 0.5) {
            startIdx[i] = c.a;
            endIdx[i] = c.b;
        } else {
            startIdx[i] = c.b;
            endIdx[i] = c.a;
        }
        progress[i] = Math.random();
        speed[i] = randBetween(minSpeed, maxSpeed);
        colorIdx[i] = Math.floor(Math.random() * palette.length);
    }

    for (let i = 0; i < count; i += 1) pickConnection(i);

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
        size,
        transparent: true,
        opacity,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
        vertexColors: true,
    });

    const pointsObj = new THREE.Points(geom, mat);
    pointsObj.frustumCulled = false;

    const tmp = new THREE.Vector3();
    const tmp2 = new THREE.Vector3();

    function update(t, dt) {
        for (let i = 0; i < count; i += 1) {
            // occasionally re-route mid-flight so particles "leave and arrive"
            if (Math.random() < retargetRate * dt) pickConnection(i);
            progress[i] += speed[i] * dt;
            if (progress[i] > 1) {
                pickConnection(i);
            }
            tmp.copy(points[startIdx[i]]).lerp(points[endIdx[i]], progress[i]);
            // gentle perpendicular jitter so it looks "alive"
            const w = Math.sin(t * 1.4 + i * 0.17) * jitter;
            tmp2.set(
                Math.sin(t * 0.8 + i) * w,
                Math.cos(t * 0.9 + i * 1.3) * w,
                Math.sin(t * 1.1 + i * 0.7) * w
            );
            tmp.add(tmp2);

            positions[i * 3 + 0] = tmp.x;
            positions[i * 3 + 1] = tmp.y;
            positions[i * 3 + 2] = tmp.z;

            const c = palette[colorIdx[i]];
            colors[i * 3 + 0] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }
        geom.attributes.position.needsUpdate = true;
        geom.attributes.color.needsUpdate = true;
    }

    return { obj: pointsObj, update, material: mat };
}

function openModal(project, meshStats) {
    const backdrop = document.getElementById('project-modal');
    document.getElementById('modal-term').textContent = project.term;
    document.getElementById('modal-title').textContent = project.title;

    const meshEl = document.getElementById('modal-mesh-stats');
    if (meshStats) {
        meshEl.hidden = false;
        if (meshStats.fallback) {
            meshEl.textContent = '3D: placeholder geometry (model failed to load).';
            meshEl.classList.remove('is-heavy');
        } else {
            const heavy = meshStats.triangles >= 80000;
            meshEl.classList.toggle('is-heavy', heavy);
            const note =
                meshStats.projectIndex === LATENCY_PROJECT_INDEX
                    ? ' High triangle count — scaled down on the globe for performance.'
                    : '';
            meshEl.textContent = `3D mesh: ~${formatNum(meshStats.triangles)} triangles, ${meshStats.meshes} draw call${
                meshStats.meshes === 1 ? '' : 's'
            }.${note}`;
        }
    } else {
        meshEl.hidden = true;
        meshEl.textContent = '';
        meshEl.classList.remove('is-heavy');
    }

    const ul = document.getElementById('modal-bullets');
    ul.innerHTML = '';
    project.bullets.forEach((b) => {
        const li = document.createElement('li');
        li.textContent = b;
        ul.appendChild(li);
    });
    const linkEl = document.getElementById('modal-link');
    if (project.link) {
        linkEl.href = project.link;
        linkEl.textContent = project.linkLabel || 'Open link';
        linkEl.style.display = 'inline';
        if (!project.link.startsWith('http') && !project.link.startsWith('//')) {
            linkEl.target = '_self';
            linkEl.removeAttribute('rel');
        } else {
            linkEl.target = '_blank';
            linkEl.rel = 'noopener noreferrer';
        }
    } else {
        linkEl.style.display = 'none';
        linkEl.href = '#';
    }

    const listLinkEl = document.getElementById('modal-list-link');
    if (meshStats && typeof meshStats.projectIndex === 'number') {
        listLinkEl.href = `#project-idx-${meshStats.projectIndex}`;
        listLinkEl.style.display = 'inline';
    } else {
        listLinkEl.href = '#';
        listLinkEl.style.display = 'none';
    }
    backdrop.classList.add('is-open');
}

function closeModal() {
    document.getElementById('project-modal').classList.remove('is-open');
}

function loadOneGltf(loader, cfg, index) {
    return new Promise((resolve) => {
        loader.load(
            cfg.path,
            (gltf) => {
                const stats = countMeshDrawStats(gltf.scene);
                resolve({
                    ok: true,
                    index,
                    scene: gltf.scene,
                    scale: cfg.scale,
                    path: cfg.path,
                    stats,
                });
            },
            undefined,
            (err) => {
                console.warn('GLTF load failed:', cfg.path, err);
                resolve({ ok: false, index, scale: cfg.scale, path: cfg.path });
            }
        );
    });
}

function buildFallbackMesh(i) {
    const geom = new THREE.IcosahedronGeometry(0.18, 1);
    const hue = (i * 0.09) % 1;
    const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color().setHSL(hue, 0.55, 0.55),
        metalness: 0.35,
        roughness: 0.4,
        emissive: new THREE.Color().setHSL(hue, 0.5, 0.08),
    });
    return new THREE.Mesh(geom, mat);
}

function isExternalLink(link) {
    return typeof link === 'string' && (link.startsWith('http://') || link.startsWith('https://') || link.startsWith('//'));
}

function setViewMode(mode) {
    const isList = mode === 'list';
    document.body.classList.toggle('is-list', isList);
    const listView = document.getElementById('list-view');
    if (listView) listView.hidden = !isList;
    const toggle = document.getElementById('view-toggle');
    if (toggle) {
        toggle.setAttribute('aria-pressed', String(isList));
        toggle.textContent = isList ? 'Globe view' : 'List view';
    }
    const hint = document.querySelector('.globe-hint');
    if (hint) {
        hint.textContent = isList
            ? 'Scroll the list. (Globe view might take a second to load.)'
            : 'Drag to spin the globe. Click a model for details. (Might take a second.)';
    }
}

function scrollToHashIfPresent() {
    const id = (window.location.hash || '').replace(/^#/, '');
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function buildListView(loadResults) {
    const inner = document.querySelector('#list-view .list-inner');
    if (!inner) return { start() {}, stop() {} };
    if (inner.childElementCount) return { start() {}, stop() {} };

    const mini = [];
    const visible = new Set();

    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                const idx = Number(e.target.getAttribute('data-idx'));
                if (!Number.isFinite(idx)) return;
                if (e.isIntersecting) visible.add(idx);
                else visible.delete(idx);
            });
        },
        { root: null, threshold: 0.2 }
    );

    for (let i = PROJECTS.length - 1; i >= 0; i -= 1) {
        const p = PROJECTS[i];
        const row = document.createElement('section');
        row.className = 'project-row';
        row.id = `project-idx-${i}`;
        row.setAttribute('data-idx', String(i));

        const modelWrap = document.createElement('div');
        modelWrap.className = 'project-model';
        modelWrap.id = `list-model-${i}`;

        const meta = document.createElement('div');
        meta.className = 'project-meta';

        const term = document.createElement('div');
        term.className = 'term';
        term.textContent = p.term;

        const title = document.createElement('h3');
        title.textContent = p.title;

        const ul = document.createElement('ul');
        p.bullets.forEach((b) => {
            const li = document.createElement('li');
            li.textContent = b;
            ul.appendChild(li);
        });

        const links = document.createElement('div');
        links.className = 'project-links';
        if (p.link) {
            const a = document.createElement('a');
            a.href = p.link;
            a.textContent = p.linkLabel || 'Open link';
            if (isExternalLink(p.link)) {
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
            }
            links.appendChild(a);
        }
        const back = document.createElement('a');
        back.href = '#top';
        back.textContent = 'Back to top';
        links.appendChild(back);

        meta.appendChild(term);
        meta.appendChild(title);
        meta.appendChild(ul);
        meta.appendChild(links);

        row.appendChild(modelWrap);
        row.appendChild(meta);
        inner.appendChild(row);
        io.observe(row);

        // Mini renderer setup (render only when visible)
        const res = loadResults[i];
        let rootObj;
        if (res && res.ok) {
            rootObj = res.scene.clone(true);
            const s = PROJECT_MODELS[i]?.scale ?? 0.2;
            rootObj.scale.set(s, s, s);
        } else {
            rootObj = buildFallbackMesh(i);
        }

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        // When list view is initially hidden, client sizes can be 0.
        // Use a safe default; we’ll correct on start()/resize.
        const initW = modelWrap.clientWidth || 240;
        const initH = modelWrap.clientHeight || 240;
        renderer.setSize(initW, initH);
        modelWrap.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        scene.add(new THREE.AmbientLight(0xffffff, 0.65));
        const d = new THREE.DirectionalLight(0xffffff, 0.9);
        d.position.set(3, 4, 5);
        scene.add(d);
        scene.add(rootObj);

        const cam = new THREE.PerspectiveCamera(55, initW / initH, 0.1, 50);
        cam.position.z = 2.6;

        mini.push({ i, modelWrap, renderer, scene, cam, rootObj });
    }

    let running = false;
    let raf = 0;
    let last = 0;

    function tick(t) {
        if (!running) return;
        raf = requestAnimationFrame(tick);
        if (t - last < 33) return; // ~30fps
        last = t;

        mini.forEach((m) => {
            if (!visible.has(m.i)) return;
            m.rootObj.rotation.y += 0.015;
            m.rootObj.rotation.x += 0.01;
            m.renderer.render(m.scene, m.cam);
        });
    }

    function resizeMini() {
        mini.forEach((m) => {
            const w = m.modelWrap.clientWidth;
            const h = m.modelWrap.clientHeight;
            if (!w || !h) return;
            m.renderer.setSize(w, h);
            m.cam.aspect = w / h;
            m.cam.updateProjectionMatrix();
        });
    }

    window.addEventListener('resize', resizeMini);

    return {
        start() {
            if (running) return;
            // Ensure canvases match visible sizes when list view opens.
            resizeMini();
            running = true;
            raf = requestAnimationFrame(tick);
        },
        stop() {
            running = false;
            if (raf) cancelAnimationFrame(raf);
        },
    };
}

async function main() {
    const perfHud = document.getElementById('perf-hud');

    const stage = document.getElementById('globe-stage');
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    stage.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 5.2;

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const dir = new THREE.DirectionalLight(0xffffff, 0.95);
    dir.position.set(4, 8, 6);
    scene.add(dir);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const radius = 1.85;
    const pickables = [];
    const projectPoints = [];

    const loader = new THREE.GLTFLoader();
    const loadResults = await Promise.all(
        PROJECT_MODELS.map((cfg, i) => loadOneGltf(loader, cfg, i))
    );

    let mathModelSummary = 'math.gltf: (not loaded)';
    loadResults.forEach((r) => {
        if (r.ok && r.index === LATENCY_PROJECT_INDEX) {
            mathModelSummary = `math.gltf: ${formatNum(r.stats.triangles)} tris, ${r.stats.meshes} mesh(es)`;
        }
    });

    let totalGlobeTris = 0;
    loadResults.forEach((r) => {
        if (r.ok) totalGlobeTris += r.stats.triangles;
    });

    PROJECTS.forEach((project, i) => {
        const pos = fibonacciSpherePoint(i, PROJECTS.length, radius);
        const loaded = loadResults[i];
        let obj;

        if (loaded && loaded.ok) {
            obj = loaded.scene.clone(true);
            const s = loaded.scale;
            obj.scale.set(s, s, s);
            obj.traverse((child) => {
                if (child.isMesh && child.material) {
                    const mats = Array.isArray(child.material) ? child.material : [child.material];
                    mats.forEach((m) => {
                        if (m.emissive) {
                            m.emissiveIntensity = Math.max(m.emissiveIntensity || 0, 0.15);
                        }
                    });
                }
            });
            obj.userData.meshStats = {
                ...loaded.stats,
                projectIndex: i,
            };
        } else {
            obj = buildFallbackMesh(i);
            obj.userData.meshStats = { triangles: 80, meshes: 1, fallback: true, projectIndex: i };
        }

        obj.position.copy(pos);
        obj.lookAt(0, 0, 0);
        obj.userData.projectIndex = i;

        // Spin each project around its own axis (independent of globe rotation).
        // Axis is in object-local space so it "self rotates" no matter where it sits on the sphere.
        obj.userData.selfSpinAxis = new THREE.Vector3(
            randBetween(-1, 1),
            randBetween(-1, 1),
            randBetween(-1, 1)
        ).normalize();
        obj.userData.selfSpinSpeed = randBetween(0.35, 0.95); // radians / second

        globeGroup.add(obj);
        pickables.push(obj);
        projectPoints.push(pos.clone());
    });

    // Particles moving between nearby projects.
    // More neighbors per node = more in/out lanes.
    let connections = buildNearbyConnections(projectPoints, 5);
    // Add a few "reach across" edges for variety.
    connections = addRandomLongConnections(projectPoints, connections, 14);
    const particles = connections.length
        ? createConnectionParticles(projectPoints, connections, {
              count: 320,
              size: 0.03,
              opacity: 0.62,
              retargetRate: 0.35,
          })
        : null;
    if (particles) globeGroup.add(particles.obj);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let hovered = null;

    let rotX = 0;
    let rotY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let dragging = false;
    let pointerDownX = 0;
    let pointerDownY = 0;
    let lastPx = 0;
    let lastPy = 0;
    const autoSpin = 0.0012;

    let fpsFrames = 0;
    let fpsLast = performance.now();
    let fpsSmooth = 0;
    let animLast = performance.now();

    function findProjectRoot(o) {
        while (o && o.userData.projectIndex === undefined) {
            o = o.parent;
        }
        return o;
    }

    function onPointerDown(e) {
        dragging = true;
        pointerDownX = e.clientX;
        pointerDownY = e.clientY;
        lastPx = e.clientX;
        lastPy = e.clientY;
        renderer.domElement.setPointerCapture(e.pointerId);
    }

    function onPointerMove(e) {
        pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;

        targetRotY += (pointer.x * 0.12 - targetRotY) * 0.03;
        targetRotX += (pointer.y * 0.08 - targetRotX) * 0.03;

        if (!dragging) return;
        const dx = e.clientX - lastPx;
        const dy = e.clientY - lastPy;
        lastPx = e.clientX;
        lastPy = e.clientY;
        rotY += dx * 0.005;
        rotX += dy * 0.004;
    }

    function onPointerUp(e) {
        dragging = false;
        try {
            renderer.domElement.releasePointerCapture(e.pointerId);
        } catch (_) {
            /* ignore */
        }
    }

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    renderer.domElement.addEventListener('click', (e) => {
        const moved = Math.hypot(e.clientX - pointerDownX, e.clientY - pointerDownY);
        if (moved > 10) return;
        raycaster.setFromCamera(pointer, camera);
        const hits = raycaster.intersectObjects(pickables, true);
        if (!hits.length) return;
        const root = findProjectRoot(hits[0].object);
        if (root && root.userData.projectIndex !== undefined) {
            openModal(PROJECTS[root.userData.projectIndex], root.userData.meshStats);
        }
    });

    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('project-modal').addEventListener('click', (ev) => {
        if (ev.target.id === 'project-modal') closeModal();
    });
    window.addEventListener('keydown', (ev) => {
        if (ev.key === 'Escape') closeModal();
    });

    function animate() {
        requestAnimationFrame(animate);

        const now = performance.now();
        const dt = Math.min(0.05, (now - animLast) / 1000);
        animLast = now;
        fpsFrames += 1;
        if (now - fpsLast >= 600) {
            fpsSmooth = Math.round((fpsFrames * 1000) / (now - fpsLast));
            fpsFrames = 0;
            fpsLast = now;
        }

        if (!dragging) {
            rotY += autoSpin;
        }

        globeGroup.rotation.y = rotY + targetRotY;
        globeGroup.rotation.x = rotX + targetRotX;

        // Self-spin each project "element".
        for (let i = 0; i < pickables.length; i += 1) {
            const o = pickables[i];
            const axis = o.userData.selfSpinAxis;
            const speed = o.userData.selfSpinSpeed;
            if (axis && typeof speed === 'number') {
                o.rotateOnAxis(axis, speed * dt);
            }
        }

        // Particle flow along connections.
        if (particles) particles.update(now / 1000, dt);

        raycaster.setFromCamera(pointer, camera);
        const hits = raycaster.intersectObjects(pickables, true);
        const nextHover = hits.length ? findProjectRoot(hits[0].object) : null;
        if (nextHover !== hovered) {
            if (hovered && hovered.scale) {
                const s = hovered.userData.baseScale || 1;
                hovered.scale.setScalar(s);
            }
            hovered = nextHover;
            if (hovered) {
                if (hovered.userData.baseScale === undefined) {
                    hovered.userData.baseScale = hovered.scale.x;
                }
                hovered.scale.setScalar(hovered.userData.baseScale * 1.12);
            }
            renderer.domElement.style.cursor = hovered ? 'pointer' : 'grab';
        }

        renderer.render(scene, camera);

        const ri = renderer.info.render;
        if (perfHud) {
            perfHud.textContent = [
                `FPS ~${fpsSmooth}`,
                `Last frame: ${formatNum(ri.triangles)} tris · ${ri.calls} draws`,
                `Globe (one each): ~${formatNum(totalGlobeTris)} tris total`,
                mathModelSummary,
            ].join('\n');
        }
    }
    animate();

    // List view + toggle wiring
    const listController = buildListView(loadResults);
    const toggle = document.getElementById('view-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const toList = !document.body.classList.contains('is-list');
            setViewMode(toList ? 'list' : 'globe');
            if (toList) {
                listController.start();
                // if a hash exists, jump to it; otherwise keep at top
                scrollToHashIfPresent();
            } else {
                listController.stop();
            }
        });
    }

    // Modal “Open in list” behavior: switch + scroll
    const modalListLink = document.getElementById('modal-list-link');
    if (modalListLink) {
        modalListLink.addEventListener('click', (ev) => {
            const href = modalListLink.getAttribute('href') || '';
            if (!href.startsWith('#')) return;
            ev.preventDefault();
            closeModal();
            setViewMode('list');
            listController.start();
            window.location.hash = href;
            scrollToHashIfPresent();
        });
    }

    // If user loads with a hash, start in list mode.
    if ((window.location.hash || '').startsWith('#project-idx-')) {
        setViewMode('list');
        listController.start();
        // allow layout to settle before scroll
        setTimeout(scrollToHashIfPresent, 0);
    } else {
        // Default: list view first (globe can be heavier to load/render).
        setViewMode('list');
        listController.start();
    }

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

main().catch(console.error);
