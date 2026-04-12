import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react';
import { Fragment, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ENTRIES, projectPreviewLinkText } from './semesterData.js';

/** Academic + experience tiles that share one timeline row (both columns filled). */
const PAIRED_ENTRY_IDS = [
  ['s26', 's26-work'],
  ['f25', 'f25-exp'],
  ['f23', 'f23-exp'],
];

function buildTimelineRows(entries) {
  const rows = [];
  let i = 0;
  while (i < entries.length) {
    const e = entries[i];
    const next = entries[i + 1];
    const paired = PAIRED_ENTRY_IDS.some(([a, b]) => e.id === a && next?.id === b);
    if (paired) {
      rows.push({ type: 'pair', left: e, right: next });
      i += 2;
    } else {
      rows.push({ type: 'single', entry: e });
      i += 1;
    }
  }
  return rows;
}

/** Fade in / fade out as items enter and leave the viewport */
const viewport = {
  once: false,
  amount: 0.28,
  margin: '-6% 0px -10% 0px',
};

const springPhys = {
  type: 'spring',
  stiffness: 85,
  damping: 17,
  mass: 0.75,
};

const springSnappy = {
  type: 'spring',
  stiffness: 400,
  damping: 32,
};

function ExperienceChainCard({ entry, alignRight }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const xSlide = alignRight ? 56 : -56;

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateY = useSpring(
    useTransform(mx, [-0.5, 0.5], alignRight ? [7, -7] : [-7, 7]),
    { stiffness: 220, damping: 30, mass: 0.4 }
  );
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [-6, 6]), {
    stiffness: 220,
    damping: 30,
    mass: 0.4,
  });

  const onPointerMove = (e) => {
    if (reduceMotion || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onPointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const transition = reduceMotion
    ? { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
    : springPhys;

  const chain = entry.experienceChain ?? [];

  return (
    <article className="timeline-card timeline-card--experience timeline-card--chain">
      <motion.div
        ref={ref}
        className="timeline-card__inner timeline-card__inner--experience timeline-card__inner--chain"
        style={{
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        whileHover={
          reduceMotion
            ? {}
            : {
                y: -6,
                transition: springSnappy,
              }
        }
        whileTap={reduceMotion ? {} : { scale: 0.992 }}
        initial={{
          opacity: 0,
          x: xSlide,
          scale: 0.94,
          filter: 'blur(12px)',
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
          filter: 'blur(0px)',
        }}
        viewport={viewport}
        transition={transition}
      >
        <Link
          to={entry.id}
          className="timeline-card__main-link timeline-card__main-link--chain-head"
          aria-label={`${entry.date}: ${entry.title} — two linked roles, view details`}
        >
          <time className="timeline-card__date">{entry.date}</time>
          <h2 className="timeline-card__title">{entry.title}</h2>
          <p className="timeline-card__body">{entry.body}</p>
        </Link>

        <div className="timeline-card__chain">
          {chain.map((exp, idx) => (
            <Fragment key={exp.id ?? idx}>
              {idx > 0 ? (
                <div className="timeline-card__chain-connector" aria-hidden="true">
                  <span className="timeline-card__chain-line" />
                  <span className="timeline-card__chain-node-dot" />
                  <span className="timeline-card__chain-line" />
                </div>
              ) : null}
              <Link
                to={`${entry.id}#${exp.id}`}
                className="timeline-card__chain-node"
                aria-label={`${exp.organization}: ${exp.role} — open details`}
              >
                <p className="timeline-card__exp-headline timeline-card__exp-headline--chain">
                  <strong>{exp.organization}</strong>
                  <span className="timeline-card__exp-sep"> · </span>
                  {exp.location}
                </p>
                <p className="timeline-card__exp-meta">
                  {exp.role}
                  <span className="timeline-card__exp-sep"> · </span>
                  {exp.range}
                </p>
                <ul className="timeline-card__preview-list timeline-card__preview-list--experience timeline-card__preview-list--chain">
                  {exp.bullets.map((line, i) => (
                    <li key={`${exp.id}-${i}`}>{line}</li>
                  ))}
                </ul>
              </Link>
            </Fragment>
          ))}
        </div>

        <Link to={entry.id} className="timeline-card__cta timeline-card__cta--experience">
          View details →
        </Link>
      </motion.div>
    </article>
  );
}

function TimelineCard({ entry, alignRight }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const xSlide = alignRight ? 56 : -56;
  const isExperience = entry.variant === 'experience';

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateY = useSpring(
    useTransform(mx, [-0.5, 0.5], alignRight ? [7, -7] : [-7, 7]),
    { stiffness: 220, damping: 30, mass: 0.4 }
  );
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [-6, 6]), {
    stiffness: 220,
    damping: 30,
    mass: 0.4,
  });

  const onPointerMove = (e) => {
    if (reduceMotion || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onPointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const transition = reduceMotion
    ? { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
    : springPhys;

  return (
    <article className={`timeline-card${isExperience ? ' timeline-card--experience' : ''}`}>
      <motion.div
        ref={ref}
        className={`timeline-card__inner${isExperience ? ' timeline-card__inner--experience' : ''}`}
        style={{
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        whileHover={
          reduceMotion
            ? {}
            : {
                y: -6,
                transition: springSnappy,
              }
        }
        whileTap={reduceMotion ? {} : { scale: 0.992 }}
        initial={{
          opacity: 0,
          x: xSlide,
          scale: 0.94,
          filter: 'blur(12px)',
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
          filter: 'blur(0px)',
        }}
        viewport={viewport}
        transition={transition}
      >
        <Link
          to={entry.id}
          className="timeline-card__main-link"
          aria-label={
            isExperience
              ? `${entry.date}: ${entry.title} — view role details`
              : `${entry.date}: ${entry.title} — view courses and full project write-ups`
          }
        >
          <time className="timeline-card__date">{entry.date}</time>
          <h2 className="timeline-card__title">{entry.title}</h2>
          <p className="timeline-card__body">{entry.body}</p>
          {isExperience && entry.experience ? (
            <div className="timeline-card__preview timeline-card__preview--in-link timeline-card__preview--experience">
              <p className="timeline-card__exp-headline">
                <strong>{entry.experience.organization}</strong>
                <span className="timeline-card__exp-sep"> · </span>
                {entry.experience.location}
              </p>
              <p className="timeline-card__exp-meta">
                {entry.experience.role}
                <span className="timeline-card__exp-sep"> · </span>
                {entry.experience.range}
              </p>
              <div className="timeline-card__preview-block timeline-card__preview-block--flush">
                <span className="timeline-card__preview-label">Highlights:</span>
                <ul className="timeline-card__preview-list timeline-card__preview-list--experience">
                  {entry.experience.bullets.map((line, i) => (
                    <li key={`${entry.id}-x-${i}`}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="timeline-card__preview timeline-card__preview--in-link">
              <div className="timeline-card__preview-block">
                <span className="timeline-card__preview-label">Courses:</span>
                <ul className="timeline-card__preview-list">
                  {entry.courses?.length ? (
                    entry.courses.map((line, i) => (
                      <li key={`${entry.id}-c-${i}`}>{line}</li>
                    ))
                  ) : (
                    <li className="timeline-card__preview-empty">—</li>
                  )}
                </ul>
              </div>
            </div>
          )}
        </Link>

        {isExperience && entry.experience?.url ? (
          <p className="timeline-card__exp-pdf-wrap">
            <a
              href={entry.experience.url}
              target="_blank"
              rel="noopener noreferrer"
              className="timeline-card__exp-pdf"
              onClick={(e) => e.stopPropagation()}
            >
              - pdf
            </a>
          </p>
        ) : null}

        {!isExperience ? (
          <div className="timeline-card__preview-block timeline-card__preview-block--projects">
            <span className="timeline-card__preview-label">Projects:</span>
            <ul className="timeline-card__preview-list timeline-card__preview-list--projects">
              {entry.projects?.length ? (
                entry.projects.map((proj, i) => {
                  const linkText = projectPreviewLinkText(proj);
                  return (
                    <li key={`${entry.id}-p-${i}`}>
                      <span className="timeline-card__project-line">
                        <span className="timeline-card__project-name">{proj.name}</span>
                        <span className="timeline-card__project-stack"> — {proj.stack}</span>
                        {linkText && proj.url ? (
                          <a
                            href={proj.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="timeline-card__project-git"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {linkText}
                          </a>
                        ) : null}
                      </span>
                    </li>
                  );
                })
              ) : (
                <li className="timeline-card__preview-empty">None</li>
              )}
            </ul>
          </div>
        ) : null}

        <Link to={entry.id} className={`timeline-card__cta${isExperience ? ' timeline-card__cta--experience' : ''}`}>
          {isExperience ? 'View details →' : 'Open semester →'}
        </Link>
      </motion.div>
    </article>
  );
}

function RowCard({ entry, alignRight }) {
  if (entry.variant === 'experience-chain') {
    return <ExperienceChainCard entry={entry} alignRight={alignRight} />;
  }
  return <TimelineCard entry={entry} alignRight={alignRight} />;
}

export default function Timeline() {
  const reduceMotion = useReducedMotion();
  const rows = buildTimelineRows(ENTRIES);

  return (
    <div className="timeline">
      {rows.map((row, r) => {
        const track = (
          <div className="timeline__track">
            <motion.span
              className="timeline__dot"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={viewport}
              transition={
                reduceMotion
                  ? { duration: 0.35 }
                  : { ...springSnappy, delay: 0.04 }
              }
            />
          </div>
        );

        if (row.type === 'pair') {
          return (
            <div
              key={`pair-${row.left.id}-${row.right.id}`}
              className="timeline__row timeline__row--pair"
            >
              <RowCard entry={row.left} alignRight={false} />
              {track}
              <RowCard entry={row.right} alignRight />
            </div>
          );
        }

        const alignRight = r % 2 === 1;
        const entry = row.entry;
        return (
          <div
            key={entry.id}
            className={`timeline__row ${alignRight ? 'timeline__row--right' : 'timeline__row--left'}`}
          >
            {!alignRight ? (
              <RowCard entry={entry} alignRight={false} />
            ) : (
              <div className="timeline__spacer" aria-hidden="true" />
            )}
            {track}
            {alignRight ? (
              <RowCard entry={entry} alignRight />
            ) : (
              <div className="timeline__spacer" aria-hidden="true" />
            )}
          </div>
        );
      })}
    </div>
  );
}
