import { Play } from "lucide-react";
import { links, publications } from "../data/profile";
import { ExternalLink, SectionHeading } from "./ui/shared";
export default function Publications() {
  return (
    <section id="publications" className="section shell">
      <SectionHeading
        number="02"
        label="Publications"
        title="Research, in writing."
      >
        <ExternalLink href={links.scholar} className="text-link">
          Google Scholar
        </ExternalLink>
      </SectionHeading>
      <div className="publication-list">
        {publications.map((paper, index) => (
          <article
            className="publication"
            id={`publication-${paper.id}`}
            key={paper.id}
          >
            <span className="publication-number">0{index + 1}</span>
            <div className="min-w-0">
              <div className="mb-3 flex flex-wrap items-center gap-3 text-xs">
                <span className="font-mono text-accent">
                  {paper.venue} / {paper.year}
                </span>
                {paper.status === "Under review" && (
                  <span className="review-badge">Under review</span>
                )}
              </div>
              <h3>
                {paper.url ? (
                  <a href={paper.url} target="_blank" rel="noopener noreferrer">
                    {paper.title}
                  </a>
                ) : (
                  paper.title
                )}
              </h3>
              <p className="publication-authors">{paper.authors}</p>
              <p className="publication-description">{paper.description}</p>
            </div>
            <div className="publication-actions">
              {paper.url ? (
                <ExternalLink
                  href={paper.url}
                  className="text-link"
                  aria-label={`Read ${paper.title}`}
                >
                  Read paper
                </ExternalLink>
              ) : (
                <span className="text-sm text-muted">Submitted manuscript</span>
              )}
              {paper.video && (
                <ExternalLink href={paper.video} className="text-link">
                  <Play size={13} /> Video
                </ExternalLink>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
