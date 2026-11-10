import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Home — Lanboer Zhao",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>Hi, I&apos;m Lanboer Zhao.</h1>
        <p className={styles.tagline}>
          I&apos;m an Information Systems graduate student at Santa Clara
          University who designs game systems and builds playable prototypes.
        </p>
        <p className={styles.intro}>
          Welcome to my portfolio. Here you can learn about me, browse the
          projects I have worked on, and find out how to get in touch.
        </p>
        <div className={styles.ctas}>
          <Link href="/projects" className={`${styles.button} ${styles.primary}`}>
            View projects
          </Link>
          <Link href="/about-me" className={`${styles.button} ${styles.secondary}`}>
            About me
          </Link>
          <Link
            href="/contact-me-server-form"
            className={`${styles.button} ${styles.secondary}`}
          >
            Contact
          </Link>
        </div>
      </section>

      <section className={styles.featured}>
        <h2>Projects</h2>
        <ul className={styles.projectList}>
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}`} className={styles.projectLink}>
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
