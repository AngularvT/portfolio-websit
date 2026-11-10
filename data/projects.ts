export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  contribution: string;
  tools: string[];
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project Xiao (代号：霄)",
    summary:
      "A playable Eastern fantasy roguelike deckbuilder I'm making with a classmate in Godot.",
    description:
      "The prototype pairs card-based combat with elemental reactions and stacking buffs. Players can combine elements to trigger reactions and build around the effects they want to use.",
    contribution:
      "I researched comparable games and player feedback, wrote our design document, and set the visual direction. I iterated on character art, created background music with Suno, and used Codex to bring the design, art, and music together in a playable demo.",
    tools: ["Godot", "Codex", "Midjourney", "Suno"],
  },
  {
    slug: "project-two",
    title: "The Ring",
    summary:
      "A 2D puzzle platformer I worked on as part of a Unity team course project.",
    description:
      "Players escape a laboratory by moving boxes, climbing bookshelves, and finding a route through the ventilation system. A tutorial introduces the controls before three levels build on them.",
    contribution:
      "I designed the tutorial and three levels and implemented player movement, box interactions, platforms, pressure plates, and exit triggers in Unity and C#.",
    tools: ["Unity", "C#"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
