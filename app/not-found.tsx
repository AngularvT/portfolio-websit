import Link from "next/link";
import type { Metadata } from "next";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found — Lanboer Zhao",
};

export default function NotFound() {
  return (
    <div className={styles.page}>
      <p className={styles.code}>404</p>
      <h1>Page not found</h1>
      <p>
        There is no page or project at this URL. If you followed a project
        link, double-check the slug — every project lives at
        <code>/projects/&lt;slug&gt;</code>.
      </p>
      <p className={styles.actions}>
        <Link href="/" className={styles.link}>
          Return home
        </Link>{" "}
        or{" "}
        <Link href="/projects" className={styles.link}>
          browse all projects
        </Link>
        .
      </p>
    </div>
  );
}
