# Assignment 2 Part 1 Viber Prompt Log and Code Critique

Lanboer Zhao · ISBA 2438

## Part 1 — Prompts and resulting changes

### Prompt 1 — Portfolio pages and dynamic routes

```text
Help me build Part 1 of my personal portfolio in Next.js. For this first round, focus on the pages, navigation, and dynamic project routes. I’ll review those before we build the contact form.

Use the following information for the portfolio.


- My name is Lanboer Zhao
- My About page should cover [your background, interests, and skills].
- My first project is [project name, what it does, what I contributed, and tools I used].
- My second project is [project name, what it does, what I contributed, and tools I used].


Use the facts I provide and clearly mark any missing content for me to fill in. Start by inspecting the repository. Follow its existing Next.js structure if one is already in place. If the repository is empty, set up Next.js with the App Router.


Build a landing page at `/`, an About Me page at `/about-me`, a project index at `/projects`, and a Contact page shell at `/contact-me-server-form`. Give each page a clear purpose and add shared navigation that reaches all four pages.


Keep both project records in one shared data source. Use a single `/projects/[slug]` route to look up and render the matching record. Give the two projects different slugs and link to each detail page from the project index. Show a clear 404 when a slug does not match a project.


Finish this round with the Contact page ready for the form in round two. Tell me which files you changed, where the project records live, and how a project link reaches the correct detail page. Report any checks you actually ran and give me the URLs to open so I can verify all four pages, both project details, and an unknown slug myself.
```

**Result** — Viber built the four main pages, added shared navigation, and used one dynamic route to look up two records from `data/projects.ts`. The Contact page was a shell for the next round.

### Prompt 2 — Contact form and server-side validation

```text
Continue from the existing portfolio and complete `/contact-me-server-form`. Build a form with labeled Name, Email, and Message fields. Connect it to a Next.js Server Action and keep the form UI, server validation, and JSON storage easy to locate in the code.

Apply these rules on the server before saving anything.


- Trim the name and message, then reject either field if it is empty.
- Validate the email as received. It must have exactly one `@`, a nonempty part before the `@`, and no whitespace anywhere. The domain must contain at least one dot, and every domain label must be nonempty.


Save valid submissions in one server-side JSON file. Preserve previous entries when adding a new one. Show success only after the save completes. Give the user clear feedback for validation errors and a separate message if the server cannot save the submission.


Check two valid submissions in a row and confirm that both records are present in the JSON. Also check a whitespace-only name, a whitespace-only message, and malformed emails such as `person@@example.com`, `person@example`, `person@example..com`, and `person name@example.com`. Confirm that rejected submissions do not add records. If the browser blocks an invalid input before submission, check the server validation separately.


At the end, list the files you changed and explain the flow from the form to the Server Action, validation, JSON storage, and feedback. Report the checks you actually ran and their results. For any check you couldn’t run, give me the steps to verify it myself.
```

**Result** — Viber connected the form to a Next.js Server Action, separated validation from storage, and added success and error messages. Valid entries are saved to `data/submissions.json`.

### Prompt 3 — Keep contact submissions out of Git

```text
The contact form passed independent browser checks for successful submission, validation, and save failure. I also checked that Git does not currently ignore the generated `data/submissions.json` file. Add a rule to `.gitignore` for that exact file so contact submissions stay out of the public repository. Verify that `git check-ignore -v -- data/submissions.json` reports the rule and that `data/projects.ts` is still eligible to be committed.
```

**Result** — Viber added an exact-path rule to `.gitignore` for the generated submissions file. The project records remain eligible to commit.

### Prompt 4 — About Me copy

```text
Update the About Me page at `/about-me` in my existing Next.js portfolio. Replace the three placeholders in `app/about-me/page.tsx` with the following copy. Keep the existing layout and display the new text as regular paragraphs.

**Background**


I'm Lanboer Zhao, a master's student in Information Systems at Santa Clara University. Before SCU, I studied at the University of Hong Kong, where I took courses in game development and computer graphics. I've also interned in game design, and I'm now co-developing an Eastern fantasy roguelike deckbuilder called Project Xiao with a classmate.


**Interests**


I like figuring out why a game mechanic feels good and how to help players get to that moment sooner. In Project Xiao, one of my favorite systems to work on is elemental reactions. I want players to understand which reaction a card can trigger and still have room to discover combinations for themselves. Outside of game development, I enjoy character illustration and skiing.


**Skills**


I use Python and SQL for data analysis. For game projects, I research comparable games, write design documents, and prototype in Godot. On Project Xiao, I've also used AI tools to explore art directions and create background music for the playable demo.


Keep this change focused on the About Me page. After applying the copy, run the project's lint check and tell me which files changed.
```

**Result** — Viber replaced the Background, Interests, and Skills placeholders with my personal copy and removed the unused placeholder style.

### Prompt 5 — Homepage and project copy

```text
Finish the remaining content in the existing Part 1 portfolio under portfolio/. Use the copy below for the homepage and the two existing project records. The About page and contact form are already complete. Keep the current routes and shared project data structure, including the project-one and project-two slugs, so existing links still work.

Homepage tagline in app/page.tsx: “I’m an Information Systems graduate student at Santa Clara University who designs game systems and builds playable prototypes.” Style it as normal body copy.


Project one in data/projects.ts
Title: Project Xiao (代号：霄)
Summary: A playable Eastern fantasy roguelike deckbuilder I’m making with a classmate in Godot.
Description: The prototype pairs card-based combat with elemental reactions and stacking buffs. Players can combine elements to trigger reactions and build around the effects they want to use.
My contribution: I researched comparable games and player feedback, wrote our design document, and set the visual direction. I iterated on character art, created background music with Suno, and used Codex to bring the design, art, and music together in a playable demo.
Tools: Godot, Codex, Midjourney, Suno.


Project two in data/projects.ts
Title: The Ring
Summary: A 2D puzzle platformer I worked on as part of a Unity team course project.
Description: Players escape a laboratory by moving boxes, climbing bookshelves, and finding a route through the ventilation system. A tutorial introduces the controls before three levels build on them.
My contribution: I designed the tutorial and three levels and implemented player movement, box interactions, platforms, pressure plates, and exit triggers in Unity and C#.
Tools: Unity, C#.


Remove the optional contact-details TODO from the Contact page and clean up any placeholder-only styling made unused by these changes. Keep the form behavior and navigation intact. Run lint and a production build. Check that the homepage and project index link to the two detail pages, each detail page shows the matching real project, and an unknown slug returns a 404. Report the changed files and actual check results. Keep the work local for review.
```

**Result** — Viber added the homepage tagline and the Project Xiao and The Ring write-ups, kept the existing project URLs, and removed the optional Contact placeholder.

## Part 2 — Code critique

### 1. One route for both project pages

Viber used a single `app/projects/[slug]/page.tsx` to look up records in `data/projects.ts`, with `notFound()` for an unknown slug. I kept this structure because both projects use the same detail layout. I also kept the original slugs when I added the real project copy so the existing links would still work.

**Check and result** — Codex opened the links from the built site. `/projects/project-one` returned HTTP 200 and showed Project Xiao. `/projects/project-two` returned HTTP 200 and showed The Ring. `/projects/not-a-project` returned HTTP 404, and a browser check confirmed it displayed “Page not found.”

### 2. Validate before saving a contact submission

Viber connected `app/contact-me-server-form/contact-form.tsx` to the Server Action in `app/contact-me-server-form/actions.ts`. I kept the validation in `lib/contact-validation.ts` and the file handling in `lib/submissions-store.ts` so I could follow the steps from form input to validation, saving, and feedback.

**Check and result** — Codex ran Chrome against a temporary copy of the built site. Two valid submissions produced two JSON records and a confirmation after each save. Whitespace-only names and messages and malformed emails produced validation errors. The JSON count stayed at two. Making the JSON file read-only produced the separate save-error message and preserved both records.

### 3. Exclude the generated submissions file from Git

The form creates `data/submissions.json` at runtime. After a Git check showed that the file could be committed, I asked Viber to add a rule for that exact path in `.gitignore`. The narrow rule keeps contact details out of the public repository while allowing the site to include `data/projects.ts`.

**Check and result** — Viber ran `git check-ignore -v -- data/submissions.json` and confirmed it matched the new rule. The same command for `data/projects.ts` returned no match, confirming the project records were still eligible to commit.
