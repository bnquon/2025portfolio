import PageContainer from "../../components/PageContainer";
import NavBar from "../../components/home/NavBar";
import NameTitle from "../../components/home/NameTitle";
import IntroAndSocials from "../../components/home/IntroAndSocials";
import AboutPage from "../../components/about/AboutPage";
import ProjectPage from "../../components/projects/ProjectPage";
import ReachOutPage from "../../components/reachOut/reachOutPage";

export default function Home() {
  return (
    <>
      {/* Home Page */}
      <PageContainer height="h-screen">
        <NavBar />
        <NameTitle />

        {/* Line and titles text */}
        <hr
          style={{
            marginTop: "-32px",
            color: "#d5d5d5",
          }}
        />
        <div className="flex justify-between mt-10 text-4xl">
          <p>Software Engineer</p>
          <p>SFU CS Student</p>
        </div>

        <IntroAndSocials />
      </PageContainer>
      
      {/* About Section */}
      <AboutPage />

      {/* Projects Section */}
      <ProjectPage />

      {/* Reach Out Section */}
      <ReachOutPage />
    </>
  );
}
