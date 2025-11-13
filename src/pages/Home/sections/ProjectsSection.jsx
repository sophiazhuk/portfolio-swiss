import React from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../../../data/projects";
import styles from "./ProjectsSection.module.css";

const ProjectsSection = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.twoColumn}>
      <div className={styles.colOne}>
        <h1 className="sectionTitle">Projects</h1>
        <table className={styles.projectTable} role="table">
          <tbody>
            {projects.map((p) => (
              <tr
                key={p.slug}
                className={p.comingSoon ? styles.comingSoon : ""}
                {...(!p.comingSoon
                  ? {
                      onClick: () => navigate(`/project/${p.slug}`),
                      role: "button",
                      tabIndex: 0,
                      onKeyDown: (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          navigate(`/project/${p.slug}`);
                        }
                      },
                    }
                  : {})}
              >
                <td>{p.title}</td>
                <td>{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.colTwo} />
    </div>
  );
};

export default ProjectsSection;
