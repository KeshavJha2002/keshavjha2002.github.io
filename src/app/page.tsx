import { Navbar } from "@/components/layout/Navbar";
import { SidebarLeft } from "@/components/layout/SidebarLeft";
import { SidebarRight } from "@/components/layout/SidebarRight";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Featured } from "@/components/sections/Featured";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <>
      <Navbar />
      <SidebarLeft />
      <SidebarRight />

      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          paddingLeft: "48px",
          paddingRight: "48px",
        }}
      >
        <hr className="section-divider" />
        <Hero />
        <hr className="section-divider" />
        <About />
        <hr className="section-divider" />
        <Experience />
        <hr className="section-divider" />
        <section
          id="projects"
          style={{
            padding: "80px 60px",
          }}
        >
          <SectionHeading
            number="03."
            title="check out the projects I have worked on"
          />
          <Featured />
          <Projects />
        </section>
        <hr className="section-divider" />
        <Blog />
        <hr className="section-divider" />
        <Contact />
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          main {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          section#projects {
            padding: 60px 24px !important;
          }
        }
      `}</style>
    </>
  );
}
