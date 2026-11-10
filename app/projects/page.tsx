import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Projects — Lanboer Zhao",
};

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <h1>Projects</h1>
      <p className={styles.intro}>
        A collection of things I have built. Select a project to read the full
        write-up.
      </p>
      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.slug} className={styles.card}>
            <h2>
              <Link
                href={`/projects/${project.slug}`}
                className={styles.cardTitle}
              >
                {project.title}
              </Link>
            </h2>
            <p>{project.summary}</p>
            <p className={styles.tools}>{project.tools.join(" · ")}</p>
            <Link
              href={`/projects/${project.slug}`}
              className={styles.cardLink}
            >
              Read project details →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
