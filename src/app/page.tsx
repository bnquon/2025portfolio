import PageContainer from "../../components/PageContainer";
import NameTitle from "../../components/home/NameTitle";
import IntroAndSocials from "../../components/home/IntroAndSocials";
import AboutPage from "../../components/about/AboutPage";
import ProjectPage from "../../components/projects/ProjectPage";
import ReachOutPage from "../../components/reachOut/reachOutPage";
import RevealAnimationWrapper from "../../components/RevealAnimationWrapper";

export default function Home() {
  return (
    <>
      {/* Home Page */}
      <PageContainer height="sm:h-screen h-[100svh]">
        <section id="#">
          <NameTitle />
        </section>

        {/* Line and titles text */}
        <RevealAnimationWrapper
          delay={1.65}
          className="h-full w-full relative flex flex-col"
        >
          <hr className="sm:mt-0 mt-6 bg-[#d5d5d5] w-full" />
          <div className="flex justify-between sm:mt-10 mt-6 2xl:text-4xl sm:text-2xl text-lg">
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
    </>
  );
}
