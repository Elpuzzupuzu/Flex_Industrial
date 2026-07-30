import FeaturedProjectsCarousel from "@/components/projects/FeaturedProjectsCarousel/FeaturedProjectsCarousel";
import ProjectsHero from "@/components/projects/ProjectsHero/ProjectsHero";

function Projects() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      {/* <ProjectsHero /> */}

      <FeaturedProjectsCarousel />
    </main>
  );
}

export default Projects;