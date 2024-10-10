import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, ProjectCard, CategoryTabs, TabButton } from "./styles";
import { ExternalLink } from "lucide-react";
import projects from "./projectsData";
import githubIcon from "../../assets/github.svg";

export function Project() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"all" | "domotica" | "software">(
    "all"
  );

  const filteredProjects = projects.filter(
    (project) => activeTab === "all" || project.category === activeTab
  );

  return (
    <Container id="project">
      <h2>{t("project_title")}</h2>
      <CategoryTabs>
        <TabButton
          onClick={() => setActiveTab("all")}
          active={activeTab === "all"}
        >
          {t("all")}
        </TabButton>
        <TabButton
          onClick={() => setActiveTab("domotica")}
          active={activeTab === "domotica"}
        >
          {t("domotica")}
        </TabButton>
        <TabButton
          onClick={() => setActiveTab("software")}
          active={activeTab === "software"}
        >
          {t("software")}
        </TabButton>
      </CategoryTabs>
      <div className="projects">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id}>
            <img src={project.image} alt={project.title} />
            <h3>{t(project.title)}</h3>
            <p>{t(project.description)}</p>
            <div className="tech-stack">
              {project.techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.category === "software" && project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-media"
                    src={githubIcon}
                    alt="GitHub"
                    style={{ width: "28px", height: "28px" }}
                  />{" "}
                </a>
              )}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink />
              </a>
            </div>
          </ProjectCard>
        ))}
      </div>
    </Container>
  );
}
