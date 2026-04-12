# Fall 2023
None

# Spring 2024
NFL MVP Prediction Modeling Project - link to display milestone2-template.pdf

Built predictive models using 30+ years of NFL MVP candidate data (150+ players) to identify key statistical drivers of MVP voting outcomes
Applied linear and stepwise regression to quantify impact of performance metrics (e.g., passing TDs, rushing yards) on MVP vote share
Developed decision tree models to derive interpretable thresholds (e.g., >34 passing TDs → ~73% vote share likelihood) for MVP candidacy
Performed cross-validation and evaluated models using RMSE/MAE, achieving moderate predictive performance (R² ≈ 0.4–0.5)
Conducted exploratory data analysis with visualizations to uncover positional biases (QB/RB dominance) and stat distributions



# Summer 2024
Motorcycle Rideability Index (Full-Stack Weather Web App) - link to https://github.com/manovay/Motorcycle-

Built a Node.js / Express REST API that geocodes US ZIP codes with OpenWeatherMap, pulls current conditions (One Call API), and returns location, weather fields, and a rideability score for motorcyclists
Implemented a rule-based rideability model (10-point scale) that weights snow, precipitation, visibility, temperature bands, and wind with additive penalties to reflect riding risk
Persisted lookups and history with PouchDB (document IDs per ZIP on weather fetch, revision handling for upserts) and exposed CRUD endpoints for stored searches (GET/POST/PUT/DELETE under /api/searches)
Delivered a vanilla JavaScript frontend with multi-view UI (home, results, recents, about), fetch-based API calls, and recent search list with delete and in-place edit (location) wired to the API
Enabled CORS, JSON request bodies, and environment-based configuration (PORT, OPENWEATHER_API_KEY via dotenv) for local deployment


# Fall 2024 
ComicNotify (Full-Stack Subscription & Email Alert App) - link to https://github.com/manovay/comic-subscription 

Built a Node.js / Express REST API that integrates the Marvel Developer API (Axios): MD5 request signing with timestamp + public/private keys, resolves characters by name, lists series for a character, and returns total comic counts per series for subscription baselines.
Designed a MongoDB (Mongoose) user model on Atlas with phone, email, and an embedded list of subscribed series (series ID, title, stored chapter/comic count), plus a signup endpoint with duplicate phone/email checks.
Implemented a chapter-change notifier that loads all subscribers, re-queries Marvel for each series’ current total, compares it to the stored count, updates persisted totals, and sends HTML email alerts via SendGrid when new issues are detected (with node-cron available for scheduled runs; startup/manual trigger in app.js).
Shipped a vanilla JavaScript frontend that searches by character, renders series pickers with cover thumbnails, fetches per-series totals before subscribe, and POSTs the assembled payload to the API.


ScrubData  - https://github.com/manovay/data-cleaning-hackumass
Developed a full-stack data-cleaning web app in 36 hours at HackUMass to automate CSV preprocessing—handling missing values, type coercion, and basic validation before analysis or downstream ML.
Integrated AWS S3 for object storage and Databricks for distributed processing, so teams could upload large files and run cleaning pipelines on datasets with 100k+ rows with near real-time feedback as jobs completed.
Built a responsive frontend with HTML, CSS, and JavaScript: users could set cleaning rules (e.g., drop/replace nulls, column filters), preview transformed rows in the browser, and iterate without re-uploading the full file each time.
Engineered a Node.js + Express backend to authenticate and call Databricks job APIs, pass parameters from the UI, poll or stream status, and return cleaned outputs—reducing manual steps and keeping transformations consistent for stronger data integrity.

Environmental Disaster Prediction & Geospatial Analysis - link to https://github.com/manovay/Environmental-Disaster-Classifier- 
Built end-to-end data pipeline using NASA EONET API to collect and process 6,700+ disaster events across 10+ categories over a 10-year period
Performed large-scale EDA to uncover temporal trends, identifying seasonal peaks (July–Sept) and significant class imbalance (≈98% severe storms)
Developed geospatial visualizations (Plotly Mapbox) to map disaster hotspots, accurately highlighting high-risk regions (e.g., Southeast U.S., Alaska volcanic zones)
Trained KNN classification model (80/20 split, k=5) achieving 99.3% accuracy, and analyzed model bias via confusion matrix due to dataset imbalance
Engineered features (lat/long normalization, encoding, scaling) and evaluated model limitations, proposing improvements (resampling, advanced models) for better generalization

# Spring 2025 

Group Movie Recommender App - link to https://github.com/manovay/movie-recc 
Built a full-stack recommender on the MovieLens 100k dataset: trained user and item representations in PyTorch, exposed inference and session APIs through FastAPI, and used WebSockets so multiple people could browse, vote, and see recommendations refresh together without reloading the page.
Modeled user embeddings and genre vectors with bias correction, then aggregated preferences across group members to rank candidate titles—achieving roughly 85%+ top-5 accuracy on held-out evaluation for the group recommendation setup.
Implemented shared “movie rooms” that supported 10+ concurrent sessions, each with isolated state (participants, shortlists, votes) and live pushes whenever someone joined, rated a film, or requested a new batch of recommendations from the model backend.
Used an event-driven WebSocket protocol (join/leave, votes, recommendation refreshes) with lightweight server-side fan-out so group voting and UI state stayed aligned, typically under ~200 ms round-trip latency during active sessions.

AP Study Guide Generator - link to https://github.com/manovay/ExamMine 
Automated an end-to-end RAG pipeline over AP-style exam PDFs: used Selenium to collect or refresh source documents where needed, then PyPDF2 (plus text cleanup) to extract and normalize page-level content before chunking and indexing.
Encoded passages with sentence-transformers MiniLM-L6-v2 for dense retrieval, stored vectors alongside document metadata in MongoDB Atlas, and paired FAISS-style nearest-neighbor search for fast top-k lookup at query time.
Improved retrieval quality by experimenting with chunk boundaries, overlap, and metadata weighting (e.g., unit/topic tags), which raised judged relevance of retrieved context by roughly 20% before generation.
Integrated OpenAI GPT-4o for grounded Q&A and quiz generation from the retrieved snippets, reporting about 85% accuracy on validation quizzes and under ~5% hallucination rate in a manual spot-check across 200+ evaluation queries.


#Summer 2025
S&P 500 Portfolio Management Platform - link to Https://ozero.manovay.info  
Built an AI-assisted portfolio stack that LoRA–fine-tuned a large language model on three years of S&P 500 price and context data, with engineered features and labels persisted in PostgreSQL so training, validation, and walk-forward tests stayed reproducible.
Wired automated execution through Alpaca’s trading APIs and hosted low-latency inference on RunPod serverless GPUs; a weekly rebalance cadence pulled fresh model outputs into target weights and pushed orders according to your risk and sizing rules.
Benchmarked against SPY over eight months: roughly +6.21% cumulative excess return, a 57.6% win rate on rebalance intervals, and a 62.7% bootstrap probability that the strategy’s edge was not pure noise—framed alongside drawdown and turnover context.
Delivered a Flask application with Plotly dashboards for equity curve, PnL, Sharpe ratio, and maximum drawdown so you could monitor live performance, compare to the benchmark, and inspect regime behavior during stress periods.


#Fall 2025
Java Neural Network Visualizer - link to https://github.com/manovay/Java-NN
Developed an interactive MNIST digit classifier desktop app in Java 11 using DeepLearning4J (DL4J) feedforward networks with Adam optimization, configurable hidden-layer size, and reproducible training (MNIST iterators, batch size, seed).
Persisted trained MultiLayerNetwork models and data normalizers to MongoDB (binary serialization via DL4J ModelSerializer and metadata documents), enabling reload, comparison, and metrics across sessions.
Built a Swing GUI with tabbed workflow (visualize, metrics, train): async training and inference via SwingWorker, custom GraphPanel / HeatmapPanel / BarChartPanel for activations and outputs, and neuron disable for interactive what-if analysis.
Implemented evaluation on the MNIST test split (overall accuracy, per-class accuracy, confusion matrix) and XChart line/bar charts for training history and metrics visualization.

Python RISC-V simulator - link to github 
Built a cycle-accurate RISC-V (RV32I) processor simulator in Python with single-cycle and five-stage pipelined cores, byte-addressable instruction/data memories, register file tracing, and HALT handling for deterministic shutdown
• Implemented full ISA decode and execute coverage—R-type/I-type ALU (ADD/SUB/XOR/OR/AND, immediates), LW/SW, BEQ/BNE, JAL—with correct I/S/B/J immediate sign-extension and PC+4 return semantics for JAL
• Engineered pipeline correctness: RAW hazard mitigation via multi-stage forwarding (EX/MEM/WB → ID/EX), load-use detection with IF/ID stall and EX bubble, and branch-taken handling with ID-stage resolution and fetch redirect
• Measured end-to-end performance (cycles, instructions, CPI, IPC) and automated regression against golden outputs (StateResult, RF/DMEM dumps, metrics); documented single-cycle vs pipeline tradeoffs on small programs (e.g. CPI ~1.03–1.17 vs ~1.18–1.83 on provided workloads per project analysis)

#Spring 2026

Latency-Aware Rank Scheduling for Low-Rank VLMs (ongoing) — repository link TBD
Exploring how to allocate low-rank capacity across layers and modalities in compressed vision–language models when total parameters are capped: rank becomes a schedulable resource, and the goal is to favor allocations that preserve task quality while respecting latency-sensitive deployment constraints.
Implementing and comparing scheduling policies—uniform baselines, importance- or sensitivity-weighted ranks, and explicitly latency-aware heuristics—so you can map the Pareto frontier between accuracy (or downstream scores) and end-to-end latency rather than only model size.
Standing up a reproducible GPU benchmarking harness that records time-to-first-token (TTFT), time-per-output token (TPOT), tokens/sec throughput, and peak/resident memory under fixed batch and sequence settings, with pinned seeds and configs for apples-to-apples runs across schedules.
Plumbing chosen rank schedules through a real inference path (prefill/decode loops, batched generation where applicable) and running controlled ablations to isolate the effect of scheduling from other compression knobs, with results tracked in tables/plots for the write-up.

Adaptive ML-Based Moderation System (ongoing) - repository link TBD
Building end-to-end ML moderation pipeline for a self-hosted chat platform (30–200 users), integrating real-time inference and human-in-the-loop decision workflows
Developed toxicity classification service (TF-IDF + Logistic Regression baseline, evaluating DistilBERT) trained on 160k+ labeled comments (Jigsaw dataset)
Designed streaming inference system handling ~1–5 messages/sec with target p95 latency <150 ms, prioritizing messages via model-driven risk scoring
Implemented data pipelines (MinIO + batch jobs) for nightly dataset generation, thread-safe/time-based splits, and leakage prevention in training workflows
Built continuous feedback loop (message → score → moderator label → retraining) enabling weekly model updates and performance-based promotion (AUC/Recall)
Engineered production safeguards (no auto-enforcement, human validation, fallback logging) and monitoring for drift, reliability, and system robustness

