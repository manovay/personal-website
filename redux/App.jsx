import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Route, Routes } from 'react-router-dom';
import PortfolioModern from './PortfolioModern.jsx';
import SemesterDetail from './SemesterDetail.jsx';
import Timeline from './Timeline.jsx';

const easeOut = [0.22, 1, 0.36, 1];

function AmbientLayer({ reduceMotion, orbDrift }) {
  return (
    <div className="ambient-layer" aria-hidden="true">
      <motion.div
        className="ambient ambient--a"
        style={{ top: orbDrift }}
        animate={
          reduceMotion
            ? { opacity: 0.4 }
            : {
                opacity: [0.32, 0.52, 0.32],
                scale: [1, 1.08, 1],
              }
        }
        transition={
          reduceMotion
            ? { duration: 0.3 }
            : { duration: 10, repeat: Infinity, ease: 'easeInOut' }
        }
      />
      <motion.div
        className="ambient ambient--b"
        animate={
          reduceMotion
            ? { opacity: 0.25 }
            : {
                opacity: [0.22, 0.44, 0.22],
                scale: [1.05, 1, 1.05],
              }
        }
        transition={
          reduceMotion
            ? { duration: 0.3 }
            : { duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }
        }
      />
      <motion.div
        className="ambient ambient--c"
        style={{ bottom: orbDrift }}
        animate={
          reduceMotion
            ? { opacity: 0.2 }
            : {
                opacity: [0.18, 0.38, 0.18],
              }
        }
        transition={
          reduceMotion
            ? { duration: 0.3 }
            : { duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }
        }
      />
    </div>
  );
}

/** Portfolio sections + interactive academic timeline (same scroll document). */
function HomePage() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const orbDrift = useTransform(scrollYProgress, [0, 1], ['-6%', '10%']);

  return (
    <>
      <AmbientLayer reduceMotion={reduceMotion} orbDrift={orbDrift} />
      <PortfolioModern />
      <div id="academic-timeline" className="timeline-embed">
        <motion.header
          className="timeline-header timeline-header--embed"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.55, ease: easeOut }}
        >
          <motion.a
            className="back-link"
            href="/redux/"
            whileHover={reduceMotion ? {} : { x: -4, scale: 1.02 }}
            whileTap={reduceMotion ? {} : { scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 420, damping: 28 }}
          >
            ← Timeline
          </motion.a>
          <motion.h1
            className="timeline-title"
            initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.6,
              delay: reduceMotion ? 0 : 0.06,
              ease: easeOut,
            }}
          >
            Academic timeline
          </motion.h1>
          <motion.p
            className="timeline-subtitle"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.45,
              delay: reduceMotion ? 0 : 0.18,
              ease: easeOut,
            }}
          >
            Milestones along the way · click a block for full courses & projects
          </motion.p>
        </motion.header>

        <div className="timeline-embed__body">
          <Timeline />
        </div>
      </div>
    </>
  );
}

function SemesterRoute() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const orbDrift = useTransform(scrollYProgress, [0, 1], ['-6%', '10%']);

  return (
    <>
      <AmbientLayer reduceMotion={reduceMotion} orbDrift={orbDrift} />
      <SemesterDetail />
    </>
  );
}

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:semesterId" element={<SemesterRoute />} />
      </Routes>
    </div>
  );
}
