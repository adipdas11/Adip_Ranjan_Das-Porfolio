import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { asset, links } from "../data/profile";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { BlurFade } from "./ui/blur-fade";
export default function Hero() {
  return (
    <section id="home" className="shell hero">
      <div className="hero-grid">
        <div>
          <p className="eyebrow mb-7 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Adip Ranjan
            Das · PhD Researcher
          </p>
          <BlurFade>
            <h1>
              Building robots
              <br />
              that adapt to
              <br />
              <span className="text-muted">the real world.</span>
            </h1>
          </BlurFade>
          <p className="hero-description">
            I work at the intersection of robot learning, perception and
            dual-arm manipulation. Turning complex environments into purposeful
            action.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <InteractiveHoverButton href="#research">
              Explore my research
            </InteractiveHoverButton>
            <a href={links.cv} download className="text-link">
              Download CV <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <span className="flex items-center gap-2">
              <MapPin size={15} /> Edinburgh, UK
            </span>
            <span className="hidden sm:block">/</span>
            <span>ARM²Lab · National Robotarium</span>
          </div>
        </div>
        <BlurFade delay={0.12} className="portrait-wrap">
          <div className="portrait-frame">
            <div className="portrait-topline">
              <span>RESEARCHER / ENGINEER</span>
              <span>01—AD</span>
            </div>
            <img
              className="portrait"
              src={asset("images/adip.webp")}
              width="375"
              height="500"
              fetchPriority="high"
              alt="Adip Ranjan Das"
            />
            <div className="portrait-caption">
              <span>Adip Ranjan Das</span>
              <span>Heriot-Watt University</span>
            </div>
          </div>
          <a className="portrait-note" href="#publications">
            <span className="note-icon">
              <ArrowUpRight size={22} />
            </span>
            <span>
              <span className="block text-xs text-muted mb-1">
                LATEST PUBLICATION / AIM 2026
              </span>
              <span className="text-sm font-medium">
                eGRAP: adaptive robotic disassembly
              </span>
            </span>
          </a>
        </BlurFade>
      </div>
      <div className="hero-bottom">
        <p>
          PERCEPTION <span>+</span> PLANNING <span>+</span> MANIPULATION
        </p>
        <a href="#research" className="flex items-center gap-2">
          Discover the work <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}
