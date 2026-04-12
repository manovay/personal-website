import { Fragment } from 'react';
import { motion } from 'motion/react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getSemesterById, projectPreviewLinkText } from './semesterData.js';

const easeOut = [0.22, 1, 0.36, 1];

export default function SemesterDetail() {
  const { semesterId } = useParams();
  const entry = getSemesterById(semesterId);

  if (!entry) {
    return <Navigate to="/" replace />;
  }

  const isExperience = entry.variant === 'experience';
  const isExperienceChain = entry.variant === 'experience-chain';
  const expVisual = isExperience || isExperienceChain;

  return (
    <div className={`semester-page semester-page--no-top-header${expVisual ? ' semester-page--experience' : ''}`}>
      <motion.main
        className="semester-detail semester-detail--no-top-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: easeOut }}
      >
        <nav className="semester-minimal-nav" aria-label="Page navigation">
          <Link className="semester-minimal-nav__link" to="..">
            ← Timeline
          </Link>
          <a className="semester-minimal-nav__link" href="/home.html">
            Home
          </a>
        </nav>
        <header className="semester-inline-heading">
          <p className="semester-header__date">{entry.date}</p>
          <h1 className="semester-page-heading">{entry.title}</h1>
          <p className="semester-intro">{entry.body}</p>
        </header>

        {isExperienceChain && entry.experienceChain?.length ? (
          <div className="semester-chain-page">
            {entry.experienceChain.map((exp, i) => (
              <Fragment key={exp.id ?? i}>
                {i > 0 ? (
                  <div className="semester-chain-bridge" aria-hidden="true">
                    <span className="semester-chain-bridge__line" />
                    <span className="semester-chain-bridge__line" />
                  </div>
                ) : null}
                <section
                  className="semester-block semester-block--chain-node"
                  id={exp.id}
                  aria-labelledby={`chain-role-${exp.id}`}
                >
                  <h2
                    id={`chain-role-${exp.id}`}
                    className="semester-block__heading semester-block__heading--experience"
                  >
                    {exp.organization}
                  </h2>
                  <p className="semester-exp__org">{exp.location}</p>
                  <p className="semester-exp__role-line">
                    {exp.role}
                    <span className="semester-exp__sep"> · </span>
                    {exp.range}
                  </p>
                  <h3 className="semester-exp__subheading">Highlights</h3>
                  <ul className="semester-list semester-list--experience">
                    {exp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </section>
              </Fragment>
            ))}
          </div>
        ) : isExperience && entry.experience ? (
          <section className="semester-block" aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="semester-block__heading semester-block__heading--experience">
              Role
            </h2>
            <p className="semester-exp__org">
              <strong>{entry.experience.organization}</strong>
              <span className="semester-exp__sep"> · </span>
              {entry.experience.location}
            </p>
            <p className="semester-exp__role-line">
              {entry.experience.role}
              <span className="semester-exp__sep"> · </span>
              {entry.experience.range}
            </p>
            {entry.experience.url ? (
              <p className="semester-exp__pdf-wrap">
                <a
                  className="semester-project__external"
                  href={entry.experience.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  - pdf
                </a>
              </p>
            ) : null}
            <h3 className="semester-exp__subheading">Highlights</h3>
            <ul className="semester-list semester-list--experience">
              {entry.experience.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </section>
        ) : (
          <>
            <section className="semester-block" aria-labelledby="courses-heading">
              <h2 id="courses-heading" className="semester-block__heading">
                Courses
              </h2>
              <ul className="semester-list">
                {entry.courses.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </section>

            <section className="semester-block" aria-labelledby="projects-heading">
              <h2 id="projects-heading" className="semester-block__heading">
                Projects
              </h2>
              {entry.projects?.length ? (
                <div className="semester-projects">
                  {entry.projects.map((proj, i) => {
                    const linkText = projectPreviewLinkText(proj);
                    return (
                      <article key={`${proj.name}-${i}`} className="semester-project">
                        <h3 className="semester-project__title">{proj.name}</h3>
                        <p className="semester-project__stack">{proj.stack}</p>
                        {linkText && proj.url ? (
                          <p className="semester-project__link-wrap">
                            <a
                              className="semester-project__external"
                              href={proj.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {linkText}
                            </a>
                          </p>
                        ) : null}
                        <ul className="semester-list semester-list--project-bullets">
                          {proj.bullets.map((b, j) => (
                            <li key={j}>{b}</li>
                          ))}
                        </ul>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <p className="semester-project__empty">None</p>
              )}
            </section>
          </>
        )}
      </motion.main>
    </div>
  );
}
