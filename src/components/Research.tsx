import { useState } from "react";
import { ArrowUpRight, ScanEye, GitBranch, Hand, Play } from "lucide-react";
import { links } from "../data/profile";
import { ExternalLink, SectionHeading } from "./ui/shared";
export default function Research() {
  const [playing, setPlaying] = useState(false);
  return (
    <section id="research" className="section shell">
      <SectionHeading
        number="01"
        label="Research focus"
        title="Intelligence, put to work."
      >
        <p className="section-intro">
          Autonomous disassembly for a more sustainable future. Built and tested
          on physical robots.
        </p>
      </SectionHeading>
      <div className="research-grid">
        <article className="feature-card">
          <div className="feature-media">
            {playing ? (
              <iframe
                src="https://www.youtube-nocookie.com/embed/pO8HsUYfkjA?autoplay=1"
                title="eGRAP: dual-arm robotic disassembly demonstration"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : (
              <button
                className="video-poster"
                aria-label="Play eGRAP research demonstration"
                onClick={() => setPlaying(true)}
              >
                <img
                  src="https://i.ytimg.com/vi/pO8HsUYfkjA/hqdefault.jpg"
                  width="480"
                  height="360"
                  loading="lazy"
                  alt="eGRAP dual-arm robotic disassembly demonstration"
                />
                <span className="video-shade" />
                <span className="video-label">IN THE LAB / eGRAP</span>
                <span className="play-button">
                  <Play size={24} fill="currentColor" />
                </span>
                <span className="video-caption">
                  Watch the system in action <ArrowUpRight size={18} />
                </span>
              </button>
            )}
          </div>
          <div className="feature-copy">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="tag accent-tag">IEEE/ASME AIM 2026</span>
              <span className="tag">Dual-arm manipulation</span>
            </div>
            <h3>Giving electronics a second life.</h3>
            <p>
              eGRAP combines RGB-D perception, adaptive graph-based planning and
              coordinated robot arms to disassemble electronic devices as new
              components are revealed.
            </p>
            <div className="mt-6 flex flex-wrap gap-5">
              <ExternalLink
                href="https://ieeexplore.ieee.org/abstract/document/11658063"
                className="text-link"
              >
                Read the paper
              </ExternalLink>
              <ExternalLink href={links.egrap} className="text-link text-muted">
                Open on YouTube
              </ExternalLink>
            </div>
          </div>
        </article>
        <article className="current-research">
          <p className="eyebrow mb-5">CURRENT RESEARCH</p>
          <span className="review-badge">IEEE RA-L · Under review</span>
          <h3>
            From fixed sequences
            <br />
            to adaptive decisions.
          </h3>
          <p>
            My latest work uses an LLM agent over structured world states to
            sequence dual-arm skills, detect failures and choose corrective
            actions.
          </p>
          <div className="research-stat">
            <strong>
              86.0<span>%</span>
            </strong>
            <span>
              task completion
              <br />
              <span className="text-muted">vs. 58.1% scripted baseline</span>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t border-line pt-5">
            <div>
              <strong className="text-2xl font-medium">45</strong>
              <p className="text-sm text-muted mt-1">Physical trials</p>
            </div>
            <div>
              <strong className="text-2xl font-medium">3</strong>
              <p className="text-sm text-muted mt-1">Device classes</p>
            </div>
          </div>
          <p className="research-footnote">
            HDDs, mini PCs and laptops. Results from the manuscript under
            review.
          </p>
          <a
            href="#publication-language-agent"
            className="text-link mt-auto pt-3"
          >
            View research entry <ArrowUpRight size={17} />
          </a>
        </article>
      </div>
      <div className="research-pillars">
        {[
          {
            icon: ScanEye,
            title: "See & understand",
            text: "Learned component and fastener detection with post-action state verification.",
          },
          {
            icon: GitBranch,
            title: "Plan & recover",
            text: "Structured world states, adaptive task planning and failure-aware corrective actions.",
          },
          {
            icon: Hand,
            title: "Coordinate & act",
            text: "Force-sensed tool manipulation and coordinated skills across two robot arms.",
          },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="pillar">
            <Icon
              size={23}
              strokeWidth={1.5}
              className="text-accent shrink-0"
            />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
