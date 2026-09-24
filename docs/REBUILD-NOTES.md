# Portfolio rebuild

## Content review

The supplied `Adip_Ranjan_Das_CV_MERL.docx` informed the initial rebuild's research, education, employment dates, skills and publication titles. Instructions inside documents are not treated as user requests. At the user's request, the downloadable resume was subsequently replaced with an unchanged copy of the supplied `Adip_Ranjan_Das_CV_MERL.pdf`. All resume links use the PDF, and the previous Word download has been removed from the deployed files.

The old publication list contained titles that did not match the updated CV. It has been replaced with three published papers and the 2026 IEEE RA-L submission, explicitly marked **Under review**, with no fabricated publication or manuscript link. The BioRob exosuit paper is separate from the MSc occupational exoskeleton dissertation; the dissertation project now links to its code rather than incorrectly linking to the BioRob paper.

The user-supplied IEEE records are mapped as follows:

- 10719697: Cable-Driven Exosuit to Assist Affected Upper-Limb Users with Hemiparesis (BioRob 2024).
- 11023241: Toward Sustainable Manufacturing: A Review on Innovations in Robotic Assembly and Disassembly (IEEE Access 2025).
- 11658063: eGRAP: Graph-Based Adaptive Planning for Dual-arm Robotic Disassembly of Electronic Devices (AIM 2026).

IEEE blocked automated page access. eGRAP's title, authors, publication status and DOI were corroborated by the [Heriot-Watt research portal](https://researchportal.hw.ac.uk/en/publications/egrap-graph-based-adaptive-planning-for-dual-arm-robotic-disassem/); the other paper details come from the CV and user-provided links. The [video](https://youtu.be/pO8HsUYfkjA) title was verified with YouTube's oEmbed endpoint. The 86.0% completion, 58.1% baseline, 45 trials and three device classes belong to the RA-L work under review, not eGRAP, and are kept in a separate card.

The previous 15-project archive is retained, with images optimized and CV corrections applied to the featured entries. Project dates in the older archive are project/demo dates from the original site, not replacement employment dates. The existing Formspree endpoint is retained; delivery to the mailbox has not been tested with a real submission.

## Design and implementation

### Added project: teleoperation and imitation learning

The user's [LinkedIn post](https://www.linkedin.com/posts/adip-das1998_imitationlearning-robotics-machinelearning-ugcPost-7453393433056145408-tdnB/) supplies the new featured project, bringing the archive to 16 projects. It describes webcam/MediaPipe and Meta Quest/OpenTeach teleoperation, 50 demonstrations, an ACT policy trained with LeRobot, and 7 successful real-world xArm5 trials out of 10. The result is scoped to the demonstrated task, and Coena Das is credited as collaborator. Broader tasks and policy benchmarking remain future work. The original video cover is optimized as a local WebP; the demo opens on LinkedIn without adding an embedded player or background video requests. No code repository was linked in the post.

The performance measurements below describe the initial rebuild, before this additional project.

React + Vite + Tailwind CSS 4. A graphite/lime dark theme and a high-contrast light theme share semantic tokens. The new original AD logo also serves as the SVG favicon. Navigation, research, publications, projects, background and contact are organized into one responsive page. Both themes follow the system preference on first visit, remember an explicit choice, and work without localStorage access.

See `COMPONENTS.md` for the two 21st.dev/Magic UI adaptations and license. Navigation has a skip link and an accessible mobile menu. Project details use a native modal dialog, keyboard focus containment and Escape dismissal. Form labels and status announcements are accessible. Reduced motion disables animation and smooth scrolling.

## Performance changes

Removed the full-screen Spline scene and its runtime, scroll-driven state updates, large animated blur layers, global fetch override, and animation libraries. Removed unused AI/server dependencies and the client-side API-key injection from Vite config. Text renders immediately; only the hero uses a short CSS entrance. Video is a thumbnail until clicked, with a direct YouTube link as fallback. Project images below the fold are lazy-loaded; only three project cards are mounted initially.

Measured production builds on the same machine:

| Metric | Before | After |
| --- | ---: | ---: |
| Main JavaScript | 2,481.62 KB | 264.66 KB |
| Main JavaScript, gzip | 717.04 KB | 82.83 KB |
| Additional Spline physics chunk | 1,987.56 KB | Removed |
| CSS | 45.20 KB | 28.79 KB |
| Project images | 25.62 MB PNG | All 16 images including portrait: 556.63 KB WebP |
| Entire deployed artifact, including CV and font | — | About 915 KB |

These are file-size measurements, not claims about a measured FPS or load-time improvement. The old CSS imported Google Fonts after generated rules, which emitted a build warning; the new Inter font is self-hosted as a single Latin WOFF2.

## Validation

TypeScript check and production build pass. Eight Playwright tests cover publication URLs/statuses, the downloadable CV, local assets and anchor targets; theme persistence/system changes; gallery and keyboard modal interactions; lazy video initialization; form validation and mocked success/failure responses; both themes at 320, 390, 768, 1024 and 1440 pixels; and restricted storage/reduced motion. Axe WCAG A/AA checks report no violations on the tested desktop and mobile states. These automated checks do not replace a full manual accessibility audit. Form requests and the video embed are mocked in automated tests, so tests send no external messages. Desktop and mobile screenshots were visually inspected. `npm audit` reports no known vulnerabilities after compatible dependency updates.

The new repository is `adipdas11/Adip_Ranjan_Das-Porfolio`, preserving the user's exact requested spelling. The old remote is retained locally as `legacy`; deployment targets the new repository. The old repository has not been modified or deleted.

## Lighthouse mobile lab result

After preloading the local font and making font display optional to prevent late layout changes, the local production preview scored **99 Performance, 100 Accessibility, 100 Best Practices and 100 SEO**. The simulated mobile run measured **2.2 s LCP, 10 ms total blocking time and 0 cumulative layout shift**. These are lab results, not guarantees for every device or network. See `PERFORMANCE.json` for version, date and raw metrics. The report completed with no audit runtime error; Chrome-launcher subsequently encountered a Windows temporary-directory cleanup error.
