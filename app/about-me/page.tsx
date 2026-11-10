import type { Metadata } from "next";
import styles from "./about-me.module.css";

export const metadata: Metadata = {
  title: "About — Lanboer Zhao",
};

export default function AboutMe() {
  return (
    <div className={styles.page}>
      <h1>About me</h1>

      <section className={styles.section}>
        <h2>Background</h2>
        <p>
          I&apos;m Lanboer Zhao, a master&apos;s student in Information Systems
          at Santa Clara University. Before SCU, I studied at the University
          of Hong Kong, where I took courses in game development and computer
          graphics. I&apos;ve also interned in game design, and I&apos;m now
          co-developing an Eastern fantasy roguelike deckbuilder called
          Project Xiao with a classmate.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Interests</h2>
        <p>
          I like figuring out why a game mechanic feels good and how to help
          players get to that moment sooner. In Project Xiao, one of my
          favorite systems to work on is elemental reactions. I want players
          to understand which reaction a card can trigger and still have room
          to discover combinations for themselves. Outside of game
          development, I enjoy character illustration and skiing.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Skills</h2>
        <p>
          I use Python and SQL for data analysis. For game projects, I
          research comparable games, write design documents, and prototype in
          Godot. On Project Xiao, I&apos;ve also used AI tools to explore art
          directions and create background music for the playable demo.
        </p>
      </section>
    </div>
  );
}
