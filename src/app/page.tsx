import PageContainer from "../../components/PageContainer";
import NavBar from "../../components/home/NavBar";
import NameTitle from "../../components/home/NameTitle";
import IntroAndSocials from "../../components/home/IntroAndSocials";
import AboutPage from "../../components/about/AboutPage";
import ProjectPage from "../../components/projects/ProjectPage";
import ReachOutPage from "../../components/reachOut/reachOutPage";
import Footer from "../../components/footer/Footer";
import RevealAnimationWrapper from "../../components/RevealAnimationWrapper";

export default function Home() {
  return (
    <>
      {/* Home Page */}
      <PageContainer height="h-screen">
        <NavBar />
        <NameTitle />

        {/* Line and titles text */}
        <RevealAnimationWrapper
          delay={1.65}
          className="h-full w-full relative flex flex-col"
        >
          <hr
            style={{
              marginTop: "-32px",
              color: "#d5d5d5",
            }}
          />
          <div className="flex justify-between mt-10 2xl:text-4xl text-2xl">
            <p>Software Engineer</p>
            <p>SFU CS Student</p>
          </div>

          <IntroAndSocials />
        </RevealAnimationWrapper>
      </PageContainer>

      {/* About Section */}
      <AboutPage />

      {/* Projects Section */}
      <ProjectPage />

      {/* Reach Out Section */}
      <ReachOutPage />

      {/* Footer */}
      <Footer />
    </>
  );
}
