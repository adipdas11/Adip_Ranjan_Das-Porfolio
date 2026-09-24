import { ArrowUpRight } from "lucide-react";
import { experience, links, skills } from "../data/profile";
import { SectionHeading, Tags } from "./ui/shared";
export default function Background() {
  return (
    <section id="about" className="section shell">
      <SectionHeading
        number="04"
        label="A little background"
        title="Researcher. Engineer. Builder."
      >
        <a href={links.cv} download className="text-link">
          Full résumé <ArrowUpRight size={17} />
        </a>
      </SectionHeading>
      <div className="about-intro">
        <p>
          I’m a robotics PhD researcher at{" "}
          <span>Heriot-Watt University’s ARM²Lab, National Robotarium</span>. I
          build autonomous dual-arm systems for disassembling end-of-life
          electronics, connecting learned perception and adaptive planning with
          real hardware.
        </p>
        <div>
          <p>
            My interests include contact-rich manipulation, reliability and
            corrective action for learned policies, Vision-Language-Action
            models, and sim-to-real transfer.
          </p>
          <p className="mt-4">
            I’m also developing an Isaac Sim digital twin of the disassembly
            cell for simulation-based policy training and evaluation.
          </p>
        </div>
      </div>
      <div className="background-grid">
        <div id="experience">
          <h3 className="subsection-title">
            Experience <span>01</span>
          </h3>
          <div className="experience-list">
            {experience.map((item) => (
              <article key={item.organisation} className="experience-item">
                <p className="text-xs font-mono text-muted mb-3">{item.date}</p>
                <h4>{item.role}</h4>
                <p className="mt-1 text-accent text-sm">{item.organisation}</p>
                <p className="text-muted text-sm leading-relaxed mt-4 mb-4">
                  {item.description}
                </p>
                <Tags items={item.tags} />
              </article>
            ))}
          </div>
        </div>
        <div>
          <div id="education">
            <h3 className="subsection-title">
              Education <span>02</span>
            </h3>
            <div className="education-list">
              <article>
                <p className="eyebrow">NOV 2023 — PRESENT</p>
                <h4>PhD in Robotics</h4>
                <p>Heriot-Watt University</p>
                <p className="education-detail">
                  Dual-robot manipulation for industrial disassembly of
                  electronic equipment. Supervised by Dr Maria Koskinopoulou and
                  Dr Xianwen Kong.
                </p>
              </article>
              <article>
                <p className="eyebrow">SEP 2022 — SEP 2023</p>
                <h4>
                  MSc in Robotics{" "}
                  <span className="tag accent-tag">Distinction</span>
                </h4>
                <p>University of Bristol</p>
                <p className="education-detail">
                  Bristol Robotics Laboratory. Dissertation on an occupational
                  upper-limb exoskeleton for workplace safety and human–robot
                  interaction.
                </p>
              </article>
              <article>
                <p className="eyebrow">JUL 2016 — JUN 2020</p>
                <h4>BTech in Electronics & Computer Science</h4>
                <p>KIIT, Bhubaneswar</p>
                <p className="education-detail">
                  GPA 8.5 / 10. Road-sign and traffic-signal detection for
                  driving assistance.
                </p>
              </article>
            </div>
          </div>
          <div id="skills" className="mt-12">
            <h3 className="subsection-title">
              Toolkit <span>03</span>
            </h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <h4 className="text-sm font-medium mb-2">{skill.name}</h4>
                  <p className="text-sm text-muted leading-7">{skill.items}</p>
                </div>
              ))}
            </div>
          </div>
          <div id="achievements" className="mt-12">
            <h3 className="subsection-title">
              Recognition <span>04</span>
            </h3>
            <ul className="recognition-list">
              <li>
                Bristol PLUS Award <span>2023</span>
              </li>
              <li>
                ROS 2 Developer · Rigbetel Labs <span>2023</span>
              </li>
              <li>
                Fusion 360: Design for Mechatronics <span>2022</span>
              </li>
              <li>
                ROS 1 Developer · Rigbetel Labs <span>2021</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
