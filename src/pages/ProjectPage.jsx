import React, { Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectLayout from "../components/project/ProjectLayout";
import { projects } from "../data/projects";
import Meta from "../components/seo/Meta";
// Lazy content components to reduce initial bundle.
const LazyBuzz = React.lazy(
  () => import("../components/project/content/BuzzContent"),
);
const LazyPortfolio = React.lazy(
  () => import("../components/project/content/PortfolioContent"),
);
const LazyMitra = React.lazy(
  () => import("../components/project/content/MitraContent"),
);
const LazyVRNW = React.lazy(
  () => import("../components/project/content/VRNWContent"),
);
const LazyLLM = React.lazy(
  () => import("../components/project/content/LLMContent"),
);

const contentMap = {
  buzz: LazyBuzz,
  portfolio: LazyPortfolio,
  mitra: LazyMitra,
  vrnw: LazyVRNW,
  "llm-intuitive-interfaces": LazyLLM,
};

const ProjectPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const meta = projects.find((p) => p.slug === slug);

  // Fallback title if unknown
  const title = meta?.title || "Project";

  const Content = contentMap[slug];

  return (
    <>
      <Meta
        title={title}
        description={meta?.description}
        ogImage={meta?.ogImage}
        path={`/projects/${slug}`}
      />
      <ProjectLayout
        title={title}
        onBack={() => navigate("/", { state: { section: "Projects" } })}
      >
        {Content ? (
          <Suspense fallback={<p>Loading…</p>}>
            <Content />
          </Suspense>
        ) : (
          <>
            {meta?.links?.site && (
              <p>
                <a
                  href={meta.links.site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              </p>
            )}
            {meta?.links?.repo && (
              <p>
                <a
                  href={meta.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </p>
            )}
            <p>More details for this project are coming soon.</p>
          </>
        )}
      </ProjectLayout>
    </>
  );
};

export default ProjectPage;
