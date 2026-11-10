import Link from "next/link";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/data/projects";
import { notFound } from "next/navigation";
import styles from "../projects.module.css";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project not found — Lanboer Zhao" };
  }
  return { title: `${project.title} — Lanboer Zhao` };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className={styles.page}>
      <h1>{project.title}</h1>
      <p className={styles.summary}>{project.summary}</p>

      <section className={styles.detailSection}>
        <h2>What it does</h2>
        <p>{project.description}</p>
      </section>

      <section className={styles.detailSection}>
        <h2>What I contributed</h2>
        <p>{project.contribution}</p>
      </section>

      <section className={styles.detailSection}>
        <h2>Tools used</h2>
        <ul className={styles.toolsList}>
          {project.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </section>

      <Link href="/projects" className={styles.backLink}>
        ← Back to all projects
      </Link>
    </article>
  );
}
